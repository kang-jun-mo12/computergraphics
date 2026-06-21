# Three.js Rendering Escape Room

Computer Graphics 강의 내용을 여섯 개의 방탈출 퍼즐로 구성한 Three.js 웹 게임입니다.

플레이어는 1인칭 시점으로 방을 이동하며 조명, 셰이딩, 텍스처, 계층 애니메이션, DDGI, Surfel GI를 순서대로 해결합니다.

## 방 구성

1. **Lighting Room**  
   Phong diffuse/specular 계산과 `N dot L`, `R dot V` 값을 이용해 가장 강한 반사가 나타나는 표면점을 찾습니다.

2. **Shading Room**  
   Flat, Gouraud, Phong 셰이딩 차이를 비교하고, 목표 물체와 같은 셰이딩 기법을 선택한 뒤 키패드에 정답을 입력합니다.

3. **Texture Room**  
   원본 이미지를 image slot에 올린 뒤, texture wrapping, repeat, offset 값을 조절해 target texture와 일치시킵니다.

4. **Animation Room**  
   로봇팔의 joint hierarchy와 forward kinematics를 이용해 인형을 집고 drop zone으로 옮깁니다.

5. **DDGI Hide and Seek**  
   64-ray probe, SH irradiance, depth moment visibility를 이용해 간접광으로 숨은 적을 드러냅니다.

6. **Surfel GI Hide and Seek**  
   표면에 surfel cache를 설치하고 2-bounce relight를 통해 숨은 적을 드러냅니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 Vite가 출력하는 주소를 열면 게임을 플레이할 수 있습니다.

## 빌드

```bash
npm run build
```

빌드 결과는 `dist/`에 생성됩니다. GitHub Pages 배포는 `.github/workflows/deploy.yml`에서 자동으로 실행됩니다.

## 리포트

최종 리포트는 [FINAL_REPORT.md](FINAL_REPORT.md)에 정리했습니다. 리포트의 모든 주요 설명은 게임에서 캡처한 이미지와 함께 작성했습니다.
