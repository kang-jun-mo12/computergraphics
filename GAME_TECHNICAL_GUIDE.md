# Three.js Rendering Escape Room 기술 설명서

이 문서는 `threejs-escape-gi` 게임의 현재 구현 기준 설명서입니다. 게임은 Vite 기반 Three.js 단일 페이지 앱이며, 렌더링 방정식, 셰이딩, 텍스처 좌표, 계층 애니메이션, DDGI, Surfel GI를 방 단위 퍼즐로 체험하도록 구성되어 있습니다.

현재 실제 진행되는 방은 총 6개입니다.

1. 조명 방
2. Shading Room
3. 텍스처 방
4. Animation Room
5. DDGI Hide and Seek
6. Surfel GI Hide and Seek

Voxel GI 방과 이전 GI 프로토타입 클래스는 코드에 일부 남아 있지만, 현재 `roomClasses` 진행 배열에서는 제거되어 있습니다. Surfel GI 방을 클리어하면 엔딩으로 이동합니다.

## 프로젝트 구조

- `src/main.js`: 게임 로직, 방 클래스, 렌더링 계산, 인터랙션, UI 갱신이 들어 있는 핵심 파일
- `src/style.css`: HUD, 컨트롤 패널, 버튼, 점수 행 등의 스타일
- `index.html`: Three.js 캔버스와 HUD를 담는 HTML 엔트리
- `package.json`: Vite 실행 및 빌드 스크립트

실행 명령은 다음과 같습니다.

```bash
npm run dev
npm run build
npm run preview
```

## 공통 시스템

게임은 `THREE.WebGLRenderer`를 사용하고, 그림자는 `PCFSoftShadowMap`으로 설정합니다. 각 방은 `THREE.Group`으로 묶이며, 방 전환 시 이전 방의 이벤트 리스너와 Three.js 리소스를 정리합니다.

주요 공통 구성은 다음과 같습니다.

- `Game`: 렌더러, 카메라, 키보드, 마우스, 방 전환, 애니메이션 루프 관리
- `RoomBase`: 방 생명주기, 이동, 상호작용, 문 열림, 리소스 정리
- `UIManager`: 좌측 HUD, 점수 행, 조작 패널, 토스트 메시지 관리
- `buildRoomShell`: 바닥, 벽, 문, 레일이 있는 기본 방 생성
- `createDoor` / `setDoorOpen`: 클리어 시 문 열림 애니메이션 처리
- `CanvasTexture` 기반 라벨 함수들: 3D 안내판, 키패드 문자, 입력창 표시

그래픽 품질을 위해 렌더러에는 `ACESFilmicToneMapping`을 적용하고, `EffectComposer` 기반 후처리 파이프라인을 사용합니다.

- `RenderPass`: 기본 Three.js 씬 렌더
- `SSAOPass`: 벽, 바닥, 오브젝트 접촉부의 ambient occlusion 강화
- `UnrealBloomPass`: emissive 라이트, 몬스터 눈, GI 도구의 빛 번짐
- `OutputPass`: 최종 색 공간 출력

공통 방 셸에는 절차적 PBR 스타일 디테일을 추가했습니다.

- CanvasTexture 기반 콘크리트/벽/녹슨 금속 텍스처
- bump map과 roughness map 재사용으로 바닥과 벽의 표면 요철 표현
- 바닥 패널 seam, 벽 패널, 천장 라이트 패널, 문 주변 emissive 프레임
- 녹슨 금속 canister, 벽 파이프, 환풍구 grate, 바닥 케이블 오브젝트

### 기본 조작

- 마우스 클릭: pointer lock 활성화
- 마우스 이동: 1인칭 시점 회전
- `WASD`: 이동
- `E`: 상호작용 또는 GI 도구 설치
- `P`: 현재 방 스킵
- `Esc`: 마우스 잠금 해제

GI 방에서는 추가로 다음 조작을 사용합니다.

- `Shift`: 달리기
- `Space`: 상승
- `Q` 또는 `Ctrl`: 하강
- 좌클릭: GI로 보이는 적 사격
- `C`: 설치한 GI 도구 초기화

### 카메라와 이동

마우스 입력은 `lookYaw`, `lookPitch`로 저장되고, 카메라는 이 값을 기반으로 회전합니다. 이동 방향은 카메라 전방 벡터와 오른쪽 벡터에서 계산합니다.

일반 방은 바닥 위 이동이 중심이고, GI 방은 3차원 비행 이동을 허용합니다. GI 방에는 플레이어 반경 기반 충돌 보정이 있어 방 벽과 중앙 차폐물을 통과하지 못합니다.

## 1. 조명 방

### 목표

광원은 방 안의 랜덤한 3D 위치에 고정됩니다. 플레이어는 렌더 카메라를 움직여 glossy 3D 물체 표면에서 가장 강한 Phong 반사 방향을 찾습니다.

화면 중앙 에임이 물체 표면에 닿은 상태에서 좌클릭하면 현재 표면점의 반응값을 제출합니다. 내부적으로 radiance를 계산하지만, 최종 radiance 숫자는 플레이어에게 직접 보여주지 않습니다.

### 사용 기술

- `TorusKnotGeometry`: 각지지 않은 복잡한 glossy 물체
- `PointLight`: 랜덤 위치의 실제 광원
- shadow map: 광원에 의한 하이라이트, diffuse, shadow 영역 생성
- `ShaderMaterial`: Phong 조명 성분을 물체 표면에 직접 표현
- `Raycaster`: 화면 중앙 에임이 닿는 실제 mesh 표면점 계산
- 월드 공간 법선 계산: `NormalMatrix`
- `ArrowHelper`: 표면점 `x`, 법선 `n`, 입사광 `Li`, 시선 `v`, 반사 방향 `r` 시각화
- `CanvasPlaneLabel`: 설명 라벨을 벽에 고정해 광원과 물체를 가리지 않게 처리

### 계산식

표면점 `x`에서 카메라 방향 `wo`로 나가는 값을 Phong 조명 모델로 계산합니다.

```text
Li = lightPower / distance^2
diffuse = diffuseAlbedo * Li * max(dot(n, l), 0)
specular = specularStrength * Li * pow(max(dot(r, v), 0), shininess)
Lo = diffuse + specular
```

플레이어에게는 `N dot L`, `R dot V`, `Li`, diffuse, specular 같은 힌트만 표시합니다. 통과 판정은 좌클릭 순간 에임 표면점의 내부 계산값이 기준 이상인지로 결정됩니다.

## 2. Shading Room

### 목표

왼쪽 목표 물체와 오른쪽 플레이어 물체의 셰이딩 방식을 비교합니다. 플레이어는 `1`, `2`, `3` 또는 UI 버튼으로 Flat, Gouraud, Phong 셰이딩을 전환합니다.

문 옆 벽에 붙은 3D 키패드에 `PHONG`을 입력하고 `ENTER`를 제출하면 탈출합니다. 틀린 답을 제출하면 입력창과 HUD에 오답 상태가 표시되며, `DEL` 또는 `RESET`으로 다시 입력할 수 있습니다.

### 사용 기술

- `IcosahedronGeometry.toNonIndexed()`: 면 단위 차이가 잘 보이는 불규칙 물체 생성
- `MeshPhongMaterial` + `flatShading`: Flat shading 구현
- `ShaderMaterial`: Gouraud, Phong 셰이딩 직접 구현
- Vertex shader 조명 계산: Gouraud shading
- Fragment shader 조명 계산: Phong shading
- `EdgesGeometry`: 면 경계 보조 표시
- `Raycaster`: 3D 키패드 버튼 클릭 판정
- 벽 고정 키패드와 입력창: 시점 이동에 따라 벽 안으로 들어가지 않도록 고정 배치
- Depth test 적용: 물체 뒤쪽 키패드나 라벨이 비정상적으로 뚫려 보이지 않도록 처리

### 셰이딩 비교

Flat shading은 면마다 하나의 법선으로 조명을 계산하므로 면 경계가 뚜렷합니다.

Gouraud shading은 정점에서 조명을 계산하고 픽셀 사이를 보간합니다. 전체 밝기는 부드럽지만 작은 specular highlight가 정점 사이에서 약해질 수 있습니다.

Phong shading은 픽셀마다 보간된 법선을 normalize한 뒤 조명을 계산합니다. 하이라이트가 가장 자연스럽고 부드럽게 이어집니다.

### 키패드 시스템

- 알파벳 키: QWERTY 배열
- 특수 키: `DEL`, `RESET`, `ENTER`
- 좌클릭 또는 키보드 입력으로 조작
- 입력 글자는 입력창에 실시간 표시
- `PHONG` 제출 시 클리어
- HUD에는 힌트성 막대 없이 문 잠금 상태와 입력 상태만 표시

## 3. 텍스처 방

### 목표

플레이어는 서랍에 숨겨진 원본 이미지 카드를 찾아 이미지 슬롯에 올립니다. 이미지를 올리기 전에는 원본, 목표 텍스처, 플레이어 텍스처가 보이지 않습니다.

이미지를 슬롯에 올리면 텍스처 퍼즐이 열리고, wrapping, repeat, offset 값을 조절해 목표 텍스처와 자신의 텍스처를 맞춥니다.

### 사용 기술

- `CanvasTexture`: 코드에서 직접 만든 체크 패턴 UV 이미지
- `Texture.clone()`: 원본, 목표, 플레이어 텍스처를 같은 소스에서 분기
- `wrapS`, `wrapT`: 텍스처 좌우/상하 wrapping 모드
- `ClampToEdgeWrapping`: 가장자리 픽셀을 늘려 고정
- `RepeatWrapping`: 텍스처 반복
- `MirroredRepeatWrapping`: 반복마다 좌우/상하 반전
- `texture.repeat`: UV 반복 횟수
- `texture.offset`: UV 시작 위치
- `PlaneGeometry`: 원본, 목표, 플레이어 텍스처 표시판
- 카드/슬롯 상호작용: 원본 이미지를 찾아 기계에 올리는 구조

### 조작

이미지를 올린 뒤 사용할 수 있는 조작은 다음과 같습니다.

- `1`: Clamp
- `2`: Repeat
- `3`: Mirror
- `4`: Repeat X 선택
- `5`: Repeat Y 선택
- `6`: Offset X 선택
- `7`: Offset Y 선택
- 방향키: 선택한 값 증가/감소
- 슬라이더: repeat, offset 직접 조절

### 목표 값과 판정

목표는 다음 값 근처입니다.

```text
Wrapping = MirroredRepeatWrapping
Repeat X = 2.60
Repeat Y = 1.80
Offset X = 0.18
Offset Y = -0.12
```

점수는 wrapping, repeat, offset의 가중합으로 계산합니다.

```text
total = wrapScore * 0.42 + repeatScore * 0.34 + offsetScore * 0.24
```

현재 탈출 기준은 `0.92` 이상입니다.

## 4. Animation Room

### 목표

플레이어는 1인칭 시점으로 방 안을 이동하면서 로봇팔을 조종합니다. 숫자키로 하나의 관절을 선택하고, 방향키로 선택한 관절만 움직입니다.

로봇팔의 4갈고리 집게로 인형을 집은 뒤 목표 드롭존에 옮기면 탈출합니다. 시간 제한이 있으며, 시간이 다 되면 로봇팔과 인형이 초기화됩니다.

### 사용 기술

- `THREE.Group`: 로봇팔 관절 계층 구조
- 부모-자식 transform: base, shoulder, elbow, wrist, claw가 순차적으로 움직임
- Euler rotation: 각 관절 회전값 제어
- wrist ball joint: 손목 pitch/yaw 제어
- 4갈고리 claw 모델: claw 아래 네 개 hook pivot 배치
- `localToWorld`: 관절, 집게, grip 위치를 월드 좌표로 변환
- 단순 중력: 인형을 놓으면 y 속도에 중력 가속 적용
- 충돌 근사: 로봇팔 segment, 인형 vertical capsule, 드롭존 cylinder로 계산
- 시간 제한: 타이머가 0 이하가 되면 실패 및 리셋

### 조작

- `1`: Base 선택
- `2`: Shoulder 선택
- `3`: Elbow 선택
- `4`: Wrist 선택
- `5`: Claw 선택
- 방향키: 선택한 관절 조작
- Wrist 선택 시 좌우는 yaw, 위아래는 pitch
- Claw 선택 시 위는 닫기, 아래는 열기

### 잡기와 드롭 판정

인형의 grip 지점이 집게 cage 안에 있고, 집게가 충분히 닫혔으며, grip 거리가 기준 안에 들어오면 `HOLD` 상태가 됩니다. `HOLD` 상태에서는 인형이 집게의 grip 위치를 따라갑니다. 집게를 열면 인형이 떨어지고 중력에 의해 아래로 이동합니다.

드롭존 판정은 두 방식으로 처리됩니다.

1. 인형이 드롭존 상단에 직접 놓였는지 확인
2. 공중에서 떨어지는 중 인형의 이동 경로가 드롭존 상단 영역을 통과했는지 확인

두 번째 판정 덕분에 인형을 드롭존 바로 위 공중에서 놓아도 성공할 수 있습니다.

## 5. DDGI Hide and Seek

### 목표

방은 밝지만 적들은 직접광이나 주변광만으로는 보이지 않습니다. 플레이어는 술래가 되어 3차원 공간을 이동하면서 원하는 위치에 DDGI probe를 설치합니다.

설치한 probe가 만든 간접광 필드에 의해 드러난 적만 권총으로 맞힐 수 있습니다. 적을 모두 맞히면 다음 방으로 이동합니다.

### 공통 GI 기반

`GIHideSeekBase`에는 DDGI와 Surfel GI 방이 공유하는 시스템이 들어 있습니다.

- 큰 방과 중앙 차폐물 구성
- 빨간 벽, 파란 벽, 바닥, 천장, 앞/뒤 벽에 GI patch 생성
- 각 patch의 직접광 irradiance 계산
- 얇은 벽/중앙 차폐물에 대한 occlusion 검사
- 움직이는 적 AI
- 비행 몬스터 모델: 날개, 뿔, 발광 눈, 촉수, aura point light
- 몬스터 날개/촉수 애니메이션과 공중 부유 움직임
- 시네마틱 GI 방 장식: 천장 라이트 스트립, 벽 패널, 회전 링, 공중 입자
- 적 opacity를 GI reveal 값으로 제어
- 오른손 권총 모델과 raycast 사격
- 플레이어 몸 반경 기반 벽 충돌

### DDGI Probe 구현

DDGI 방은 플레이어가 원하는 위치로 이동한 뒤 `E`를 눌러 probe를 직접 설치하는 자유 배치 방식입니다. 설치된 각 probe는 다음 계산 데이터를 저장합니다.

- probe당 64개 golden sphere ray 방향 샘플
- `traceIndirectRay`: 표면 hit, 표면 법선, radiance, depth 저장
- `directSurfaceRadiance`: 표면이 직접광을 받아 1차 bounce source가 되는 양 계산
- L2 spherical harmonics, 9 coefficients: probe irradiance 방향 분포 저장
- depth moment visibility: 저장된 ray depth/depth2와 Chebyshev 형태 visibility로 차폐 뒤쪽 누수 억제
- weighted probe interpolation: 주변 active probe의 SH 값을 거리 가중치와 visibility로 보간

적 위치에서는 probe field의 SH irradiance를 샘플하고 depth visibility를 곱해 reveal 값을 계산합니다. 직접광이나 기본 ambient light만으로는 적 opacity가 올라가지 않습니다.

### 조작

- `E`: 현재 위치에 DDGI probe 설치
- `C`: probe 전체 삭제
- 좌클릭: DDGI로 보이는 적 사격
- `Shift`: 달리기
- `Space`: 상승
- `Q` 또는 `Ctrl`: 하강

## 6. Surfel GI Hide and Seek

### 목표

DDGI 방과 마찬가지로 적들은 기본 조명만으로는 보이지 않습니다. 플레이어는 바라보는 표면에 surfel을 설치해 간접광 캐시를 만들고, surfel GI에 의해 드러난 적을 권총으로 맞힙니다.

모든 적을 맞히면 엔딩으로 이동합니다.

### Surfel 설치

Surfel은 표면 위에 놓이는 작은 조명 샘플입니다.

- view ray 기반 표면 hit
- 바닥, 벽, 천장, 중앙 차폐물 표면에 surfel 설치
- surfel 위치와 법선 저장
- 설치 지점의 direct radiance 계산
- 기존 surfel cache의 bounce 값을 더해 누적 간접광 구성
- surfel을 작은 점 mesh로 시각화
- surfel field를 적 위치에서 sample해 reveal 값 계산

### Surfel GI 계산

각 surfel은 다음 정보를 가집니다.

- `pos`: 표면 위치
- `normal`: 표면 법선
- `irradiance`: 해당 지점에 저장된 간접광 세기
- `direct`: 직접광으로 받은 radiance
- `color`: 표면 색
- `area`: surfel이 대표하는 면적
- `radius`: surfel transport kernel 반경
- `point`: 시각화용 작은 sphere mesh

적 위치에서 surfel field를 샘플할 때는 다음 요소를 고려합니다.

- surfel에서 적까지의 거리 제곱
- surfel normal과 적 방향 사이의 emitter cosine
- receiver normal이 있는 경우 receiver cosine
- surfel area 기반 solid angle
- 반경 기반 kernel falloff
- 중앙 차폐물 visibility/occlusion

surfel을 설치하면 새 surfel의 직접 radiance와 기존 surfel cache의 bounce 값을 더합니다. 그 뒤 전체 surfel cache를 두 번 relight하여 surfel들끼리 간접광을 주고받는 transport를 갱신합니다.

### 조작

- `E`: 바라보는 표면에 surfel 설치
- `C`: surfel 전체 삭제
- 좌클릭: Surfel GI로 보이는 적 사격
- `Shift`: 달리기
- `Space`: 상승
- `Q` 또는 `Ctrl`: 하강

## 엔딩

Surfel GI 방을 클리어하면 `FinalRoom`으로 이동합니다. 엔딩 방은 문이 열린 상태로 시작하며, 중앙에 회전하는 트로피와 완료 문구를 표시합니다.

현재 엔딩 진행은 다음 순서입니다.

```text
Lighting -> Shading -> Texture -> Animation -> DDGI -> Surfel GI
```

## 학습 주제 요약

| 방 | 핵심 주제 | 주요 기술 |
| --- | --- | --- |
| 1. 조명 방 | 직접광, Phong radiance, 반사 방향 | ShaderMaterial, Raycaster, surface normal, Phong equation |
| 2. Shading Room | Flat/Gouraud/Phong 비교 | vertex shader, fragment shader, flatShading, keypad raycast |
| 3. 텍스처 방 | UV wrapping과 transform | CanvasTexture, repeat, offset, wrapping modes |
| 4. Animation Room | 계층 애니메이션과 간단 물리 | Group transform, joint control, collision approximation, gravity |
| 5. DDGI | probe 기반 간접광 | free-placement probes, 64-ray sampling, L2 SH, depth moment visibility, weighted interpolation |
| 6. Surfel GI | surfel 기반 간접광 | surface hit, surfel cache, surfel area, cosine transport, iterative relight, occlusion |

## 구현 범위와 주의점

### GI 구현 범위

DDGI와 Surfel GI는 Three.js 단일 브라우저 게임 안에서 직접 구현한 실시간 GI 퍼즐입니다. Unreal Engine Lumen, RTXGI, ReSTIR GI 같은 상용/논문급 전체 렌더링 엔진은 아니지만, 채점 기준에서 확인할 수 있는 핵심 GI 데이터 구조와 계산 경로는 코드에 들어가 있습니다.

- DDGI: 자유 배치 probe, ray traced one-bounce source sampling, L2 spherical harmonics, depth moment visibility, weighted probe interpolation
- Surfel GI: surface hit 기반 surfel 생성, surface normal/area/radius 저장, cosine/solid-angle transport, visibility test, multi-bounce relight pass

즉 적이 보이는 판정은 장식용 이펙트가 아니라 실제 GI cache 샘플 값에서 나오며, 직접광이나 기본 ambient light만으로는 적 opacity가 올라가지 않습니다.

### 물리 구현 범위

Animation Room은 Cannon.js, Rapier 같은 외부 물리 엔진을 사용하지 않습니다. 로봇팔은 선분, 인형은 세로 캡슐, 드롭존은 원기둥으로 근사해 충돌과 집기 판정을 계산합니다.

### Canvas 기반 3D UI

게임 속 라벨, 키패드 입력창, 버튼 문자는 대부분 CanvasTexture로 생성됩니다. 일부 라벨은 sprite가 아니라 plane mesh로 만들어 depth test를 적용했습니다. 이를 통해 벽 뒤 라벨이나 키패드가 물체를 뚫고 보이는 문제를 줄였습니다.

### 방 전환과 리소스 정리

각 방은 `RoomBase.dispose()`에서 이벤트 리스너를 제거하고, Three.js 객체의 geometry/material/texture를 dispose합니다. 방을 자주 바꾸는 구조이므로 리소스 누수를 줄이기 위한 처리가 포함되어 있습니다.
