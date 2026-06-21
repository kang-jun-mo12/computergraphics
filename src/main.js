import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const ROOM_NAMES = [
  'Lighting Room',
  'Shading Room',
  'Texture Room',
  'Animation Room',
  'DDGI Room',
  'Surfel GI Room'
];

const clamp01 = (v) => Math.max(0, Math.min(1, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rad = (deg) => THREE.MathUtils.degToRad(deg);
const fmt = (v, digits = 2) => Number(v).toFixed(digits);
const ROOM_LIMITS = { minX: -4.15, maxX: 4.15, minY: 0.18, maxY: 3.25, minZ: -3.45, maxZ: 3.35 };
const GI_ROOM_LIMITS = { minX: -17.25, maxX: 17.25, minY: 0.18, maxY: 5.55, minZ: -15.65, maxZ: 15.35 };

function getEl(id) {
  return document.getElementById(id);
}

function isTypingTarget(target) {
  return target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

function clampToBounds(pos, bounds = ROOM_LIMITS, fly = false) {
  pos.x = THREE.MathUtils.clamp(pos.x, bounds.minX, bounds.maxX);
  pos.z = THREE.MathUtils.clamp(pos.z, bounds.minZ, bounds.maxZ);
  pos.y = THREE.MathUtils.clamp(pos.y, fly ? bounds.minY : 0, fly ? bounds.maxY : 0);
}

function clampToRoom(pos, fly = false) {
  clampToBounds(pos, ROOM_LIMITS, fly);
}

function cameraMoveBasis(camera, fly = false) {
  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward);
  if (!fly) forward.y = 0;
  if (forward.lengthSq() < 0.0001) forward.set(0, 0, -1);
  forward.normalize();
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
  return { forward, right };
}

function wrapConstantFromName(name) {
  if (name === 'RepeatWrapping') return THREE.RepeatWrapping;
  if (name === 'MirroredRepeatWrapping') return THREE.MirroredRepeatWrapping;
  return THREE.ClampToEdgeWrapping;
}

function colorDistance(a, b) {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function makeMat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.58,
    metalness: opts.metalness ?? 0,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    transparent: opts.transparent ?? false,
    opacity: opts.opacity ?? 1,
    side: opts.side ?? THREE.FrontSide,
    flatShading: opts.flatShading ?? false,
    envMapIntensity: opts.envMapIntensity ?? 0.48
  });
}

const proceduralTextureCache = new Map();
const glowTextureCache = new Map();

function textureColorToCss(color, alpha = 1) {
  const c = new THREE.Color(color);
  return `rgba(${Math.round(c.r * 255)}, ${Math.round(c.g * 255)}, ${Math.round(c.b * 255)}, ${alpha})`;
}

function createRadialGlowTexture(color = 0xffd166, size = 256) {
  const key = `${color}-${size}`;
  if (glowTextureCache.has(key)) return glowTextureCache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cx = size / 2;
  const cy = size / 2;
  const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, size / 2);
  gradient.addColorStop(0, 'rgba(255, 255, 235, 0.96)');
  gradient.addColorStop(0.18, textureColorToCss(color, 0.58));
  gradient.addColorStop(0.48, textureColorToCss(color, 0.2));
  gradient.addColorStop(1, textureColorToCss(color, 0));
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  glowTextureCache.set(key, texture);
  return texture;
}

function createProceduralTexture(kind, base = 0x777777, accent = 0x333333, size = 512) {
  const key = `${kind}-${base}-${accent}-${size}`;
  if (proceduralTextureCache.has(key)) return proceduralTextureCache.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = textureColorToCss(base);
  ctx.fillRect(0, 0, size, size);

  const baseColor = new THREE.Color(base);
  const accentColor = new THREE.Color(accent);
  for (let i = 0; i < size * 10; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const r = kind === 'rust' ? Math.random() * 5 + 1 : Math.random() * 2.2 + 0.4;
    const mix = Math.random();
    const c = baseColor.clone().lerp(accentColor, mix * (kind === 'rust' ? 0.95 : 0.45));
    const alpha = kind === 'concrete' ? 0.08 : kind === 'wall' ? 0.06 : 0.18;
    ctx.fillStyle = `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (kind === 'concrete' || kind === 'wall') {
    ctx.strokeStyle = 'rgba(10, 12, 14, 0.18)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 26; i++) {
      let x = Math.random() * size;
      let y = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(x, y);
      const steps = 3 + Math.floor(Math.random() * 5);
      for (let s = 0; s < steps; s++) {
        x += (Math.random() - 0.5) * 80;
        y += (Math.random() - 0.5) * 80;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    for (let i = 0; i < 42; i++) {
      const y = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y + (Math.random() - 0.5) * 18);
      ctx.stroke();
    }
  }

  if (kind === 'rust') {
    const rustColors = ['rgba(163,79,29,0.42)', 'rgba(210,116,48,0.28)', 'rgba(70,35,19,0.35)'];
    for (let i = 0; i < 160; i++) {
      ctx.strokeStyle = rustColors[i % rustColors.length];
      ctx.lineWidth = 1 + Math.random() * 3;
      const x = Math.random() * size;
      const y = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (Math.random() - 0.5) * 50, y + Math.random() * 90);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255,220,160,0.12)';
    for (let i = 0; i < 80; i++) {
      const y = Math.random() * size;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(size, y + (Math.random() - 0.5) * 8);
      ctx.stroke();
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 8;
  proceduralTextureCache.set(key, texture);
  return texture;
}

function makeTexturedMat(kind, color, opts = {}) {
  const mat = makeMat(color, opts);
  const tex = createProceduralTexture(kind, color, opts.accentColor ?? 0x20242b).clone();
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(opts.repeatX ?? 2, opts.repeatY ?? 2);
  tex.needsUpdate = true;
  mat.map = tex;
  mat.roughnessMap = tex;
  mat.bumpMap = tex;
  mat.bumpScale = opts.bumpScale ?? (kind === 'rust' ? 0.035 : 0.022);
  mat.needsUpdate = true;
  return mat;
}

function makeGlossyTermMaterial(mode = 0) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uLightPos: { value: new THREE.Vector3(0, 2, 0) },
      uCameraPos: { value: new THREE.Vector3(0, 1.6, 4) },
      uAlbedo: { value: new THREE.Color(0x7df5d4) },
      uLightColor: { value: new THREE.Color(0xfff1c5) },
      uShininess: { value: 42 },
      uLightPower: { value: 5.2 },
      uMode: { value: mode }
    },
    vertexShader: `
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `,
    fragmentShader: `
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      uniform vec3 uLightPos;
      uniform vec3 uCameraPos;
      uniform vec3 uAlbedo;
      uniform vec3 uLightColor;
      uniform float uShininess;
      uniform float uLightPower;
      uniform int uMode;

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(uCameraPos - vWorldPos);
        if (dot(N, V) < 0.0) N = -N;
        vec3 toLight = uLightPos - vWorldPos;
        float distSq = max(dot(toLight, toLight), 0.18);
        vec3 L = normalize(toLight);
        vec3 R = reflect(-L, N);

        float nDotLRaw = dot(N, L);
        float nDotL = max(nDotLRaw, 0.0);
        float nDotV = max(dot(N, V), 0.0);
        float rDotV = max(dot(R, V), 0.0);
        float lightRadiance = uLightPower / distSq;

        float diffuseTerm = nDotL;
        float specTerm = nDotL > 0.0 ? pow(rDotV, uShininess) : 0.0;

        vec3 diffuse = uAlbedo * uLightColor * lightRadiance * diffuseTerm * 0.62;
        vec3 specular = vec3(1.0, 0.96, 0.86) * uLightColor * lightRadiance * specTerm * 1.9;
        float shadowMask = 1.0 - smoothstep(0.015, 0.22, nDotLRaw);
        vec3 shadowTint = uAlbedo * 0.16 + vec3(0.035, 0.045, 0.085);
        vec3 ambient = uAlbedo * 0.18 + vec3(0.06, 0.07, 0.105);
        float rim = pow(1.0 - nDotV, 2.0) * 0.16;
        vec3 combined = ambient + diffuse * 1.65 + specular * 2.8 + uAlbedo * rim;
        combined = mix(combined, shadowTint, shadowMask * 0.56);

        vec3 color = combined;
        if (uMode == 1) {
          color = uAlbedo * 0.1 + diffuse * 2.6;
        } else if (uMode == 2) {
          color = vec3(0.01, 0.012, 0.018) + specular * 5.0;
        } else if (uMode == 3) {
          color = mix(vec3(0.85, 0.72, 0.36), vec3(0.01, 0.02, 0.07), shadowMask);
        }
        color = color / (color + vec3(0.72));
        color = pow(color, vec3(0.82));
        gl_FragColor = vec4(color, 1.0);
      }
    `
  });
}

function disposeObject(root) {
  root.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        for (const value of Object.values(mat)) {
          if (value && value.isTexture) value.dispose();
        }
        mat.dispose();
      }
    }
  });
}

function createCanvasLabel(text, options = {}) {
  const fontSize = options.fontSize ?? 42;
  const pad = options.pad ?? 18;
  const lines = String(text).split('\n');
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
  const width = Math.ceil(Math.max(...lines.map((line) => ctx.measureText(line).width)) + pad * 2);
  const height = Math.ceil(lines.length * fontSize * 1.28 + pad * 2);
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
  ctx.fillStyle = options.background ?? 'rgba(5, 9, 18, 0.78)';
  ctx.strokeStyle = options.border ?? 'rgba(255,255,255,0.24)';
  ctx.lineWidth = 4;
  roundRect(ctx, 0, 0, width, height, 24, true, true);
  ctx.fillStyle = options.color ?? '#f4f7ff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  lines.forEach((line, i) => {
    const y = pad + fontSize * 0.68 + i * fontSize * 1.28;
    ctx.fillText(line, width / 2, y);
  });
  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(material);
  const scale = options.scale ?? 1;
  sprite.scale.set((width / height) * scale, scale, 1);
  sprite.renderOrder = 1000;
  return sprite;
}

function createCanvasPlaneLabel(text, options = {}) {
  const fontSize = options.fontSize ?? 42;
  const pad = options.pad ?? 18;
  const lines = String(text).split('\n');
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
  const width = Math.ceil(Math.max(...lines.map((line) => ctx.measureText(line).width)) + pad * 2);
  const height = Math.ceil(lines.length * fontSize * 1.28 + pad * 2);
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
  ctx.fillStyle = options.background ?? 'rgba(5, 9, 18, 0.78)';
  ctx.strokeStyle = options.border ?? 'rgba(255,255,255,0.24)';
  ctx.lineWidth = 4;
  roundRect(ctx, 0, 0, width, height, 24, true, true);
  ctx.fillStyle = options.color ?? '#f4f7ff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  lines.forEach((line, i) => {
    const y = pad + fontSize * 0.68 + i * fontSize * 1.28;
    ctx.fillText(line, width / 2, y);
  });
  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.FrontSide
  });
  const scale = options.scale ?? 1;
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry((width / height) * scale, scale), material);
  mesh.renderOrder = options.renderOrder ?? 0;
  return mesh;
}

function createDynamicLabel(initialText, options = {}) {
  const fontSize = options.fontSize ?? 32;
  const pad = options.pad ?? 14;
  const scale = options.scale ?? 1;
  const ctx = document.createElement('canvas').getContext('2d');
  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(material);
  sprite.renderOrder = 1001;
  sprite.userData.setText = (text) => {
    const lines = String(text).split('\n');
    ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
    const width = Math.ceil(Math.max(...lines.map((line) => ctx.measureText(line).width)) + pad * 2);
    const height = Math.ceil(lines.length * fontSize * 1.28 + pad * 2);
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.font = `700 ${fontSize}px system-ui, sans-serif`;
    ctx.fillStyle = options.background ?? 'rgba(5, 9, 18, 0.82)';
    ctx.strokeStyle = options.border ?? 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 4;
    roundRect(ctx, 0, 0, width, height, 18, true, true);
    ctx.fillStyle = options.color ?? '#f4f7ff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    lines.forEach((line, i) => {
      const y = pad + fontSize * 0.68 + i * fontSize * 1.28;
      ctx.fillText(line, width / 2, y);
    });
    texture.needsUpdate = true;
    sprite.scale.set((width / height) * scale, scale, 1);
  };
  sprite.userData.setText(initialText);
  return sprite;
}

function createFixedInputLabel(initialText, options = {}) {
  const width = options.width ?? 640;
  const height = options.height ?? 150;
  const fontSize = options.fontSize ?? 48;
  const valueWidth = options.valueWidth ?? width * 0.5;
  const ctx = document.createElement('canvas').getContext('2d');
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  const texture = new THREE.CanvasTexture(ctx.canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false,
    side: THREE.FrontSide
  });
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(options.worldWidth ?? 1.62, options.worldHeight ?? 0.38),
    material
  );
  mesh.renderOrder = 0;
  mesh.userData.setText = (text, state = '') => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = options.background ?? 'rgba(0, 0, 0, 0.88)';
    ctx.strokeStyle = state === 'wrong' ? 'rgba(255, 92, 92, 0.78)' : options.border ?? 'rgba(190, 205, 235, 0.48)';
    ctx.lineWidth = 8;
    roundRect(ctx, 4, 4, width - 8, height - 8, 32, true, true);

    ctx.shadowColor = 'rgba(120, 165, 255, 0.65)';
    ctx.shadowBlur = 8;
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${fontSize}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = options.labelColor ?? '#94b8ff';
    ctx.fillText('입력:', width * 0.28, height * 0.52);

    const valueText = String(text);
    let valueFontSize = Math.round(fontSize * 0.88);
    do {
      ctx.font = `900 ${valueFontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      if (ctx.measureText(valueText).width <= valueWidth || valueFontSize <= 18) break;
      valueFontSize -= 2;
    } while (true);
    ctx.fillStyle = options.valueColor ?? '#eaf1ff';
    ctx.fillText(valueText, width * 0.69, height * 0.52);
    if (state === 'wrong') {
      ctx.font = `900 ${Math.round(fontSize * 0.34)}px system-ui, sans-serif`;
      ctx.fillStyle = '#ff7070';
      ctx.fillText('오답', width * 0.86, height * 0.79);
    }
    ctx.shadowBlur = 0;
    texture.needsUpdate = true;
  };
  mesh.userData.setText(initialText);
  return mesh;
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function createCheckerTexture(size = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f1f7ff';
  ctx.fillRect(0, 0, size, size);
  const cells = 8;
  const cell = size / cells;
  for (let y = 0; y < cells; y++) {
    for (let x = 0; x < cells; x++) {
      ctx.fillStyle = (x + y) % 2 === 0 ? '#1e315c' : '#ef476f';
      ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.lineWidth = 8;
  ctx.strokeRect(24, 24, size - 48, size - 48);
  ctx.fillStyle = '#46f0c8';
  ctx.beginPath();
  ctx.arc(size * 0.73, size * 0.28, size * 0.115, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffd166';
  ctx.font = `900 ${size * 0.16}px system-ui`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('UV', size * 0.28, size * 0.72);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createDoor(group, position = new THREE.Vector3(0, 1.12, -4.04), accent = 0x46f0c8) {
  const doorGroup = new THREE.Group();
  doorGroup.position.copy(position);

  const frameMat = makeMat(0x171c28, { roughness: 0.45 });
  const glowMat = makeMat(accent, { emissive: accent, emissiveIntensity: 0.22, roughness: 0.38 });
  const panelMat = makeMat(0x222a39, { roughness: 0.65 });

  const panel = new THREE.Mesh(new THREE.BoxGeometry(1.45, 2.18, 0.14), panelMat);
  panel.position.set(0, 0, 0);
  panel.castShadow = true;
  panel.receiveShadow = true;
  doorGroup.add(panel);

  const top = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.16, 0.2), frameMat);
  top.position.set(0, 1.18, 0.02);
  doorGroup.add(top);
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.16, 2.46, 0.2), frameMat);
  left.position.set(-0.9, 0.04, 0.02);
  doorGroup.add(left);
  const right = left.clone();
  right.position.x = 0.9;
  doorGroup.add(right);

  const status = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.08, 0.05), glowMat);
  status.position.set(0, 0.93, 0.1);
  doorGroup.add(status);

  const label = createCanvasLabel('잠김', { scale: 0.42, fontSize: 38, background: 'rgba(0,0,0,0.58)' });
  label.position.set(0, 0.25, 0.22);
  doorGroup.add(label);

  doorGroup.userData = { panel, status, label, openAmount: 0 };
  group.add(doorGroup);
  return doorGroup;
}

function setDoorOpen(door, amount) {
  const t = clamp01(amount);
  door.userData.openAmount = t;
  door.userData.panel.position.x = -1.1 * t;
  door.userData.panel.rotation.y = -0.35 * t;
  door.userData.status.scale.x = 1 + t * 0.4;
  door.userData.status.material.emissiveIntensity = 0.22 + t * 0.5;
  if (t > 0.6 && door.userData.label.userData.text !== '열림') {
    door.remove(door.userData.label);
    door.userData.label = createCanvasLabel('열림', { scale: 0.42, fontSize: 38, background: 'rgba(0,0,0,0.58)', color: '#46f0c8' });
    door.userData.label.userData.text = '열림';
    door.userData.label.position.set(0, 0.25, 0.22);
    door.add(door.userData.label);
  }
}

function buildRoomShell(group, accent = 0x46f0c8, options = {}) {
  const width = options.width ?? 9.5;
  const depth = options.depth ?? 8.2;
  const height = options.height ?? 3.4;
  const floorMat = makeMat(options.floorColor ?? 0x1a2130, { roughness: 0.82, envMapIntensity: 0 });
  const wallMat = makeMat(options.wallColor ?? 0x101724, { roughness: 0.78, envMapIntensity: 0 });
  const accentMat = makeMat(accent, { emissive: accent, emissiveIntensity: 0.08, roughness: 0.55, envMapIntensity: 0 });
  const halfW = width / 2;
  const halfD = depth / 2;
  const backZ = -halfD;

  const floor = new THREE.Mesh(new THREE.BoxGeometry(width, 0.08, depth), floorMat);
  floor.position.set(0, -0.04, 0);
  floor.receiveShadow = true;
  group.add(floor);

  const back = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.12), wallMat);
  back.position.set(0, height / 2, backZ);
  back.receiveShadow = true;
  group.add(back);
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.12, height, depth), wallMat);
  left.position.set(-halfW, height / 2, 0);
  group.add(left);
  const right = left.clone();
  right.position.x = halfW;
  group.add(right);

  const rail = new THREE.Mesh(new THREE.BoxGeometry(width - 0.7, 0.06, 0.08), accentMat);
  rail.position.set(0, height - 0.48, backZ + 0.1);
  group.add(rail);

  const door = createDoor(group, new THREE.Vector3(0, 1.12, backZ + 0.1), accent);
  return { floor, back, left, right, door };
}

function buildLegacyShadingRoomShell(group, accent = 0x8fb4ff, options = {}) {
  const floorMat = makeMat(options.floorColor ?? 0x121622, { roughness: 0.82, envMapIntensity: 0 });
  const wallMat = makeMat(options.wallColor ?? 0x0f1523, { roughness: 0.78, envMapIntensity: 0 });
  const accentMat = makeMat(accent, { emissive: accent, emissiveIntensity: 0.08, roughness: 0.55, envMapIntensity: 0 });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.08, 8.2), floorMat);
  floor.position.set(0, -0.04, 0);
  floor.receiveShadow = true;
  group.add(floor);

  const back = new THREE.Mesh(new THREE.BoxGeometry(9.5, 3.4, 0.12), wallMat);
  back.position.set(0, 1.7, -4.1);
  back.receiveShadow = true;
  group.add(back);

  const left = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.4, 8.2), wallMat);
  left.position.set(-4.75, 1.7, 0);
  group.add(left);

  const right = left.clone();
  right.position.x = 4.75;
  group.add(right);

  const rail = new THREE.Mesh(new THREE.BoxGeometry(8.8, 0.06, 0.08), accentMat);
  rail.position.set(0, 2.92, -4.0);
  group.add(rail);

  const door = createDoor(group, new THREE.Vector3(0, 1.12, -4.0), accent);
  return { floor, back, left, right, door };
}

function addLegacyShadingRoomLights(group, accent = 0x8fb4ff) {
  const ambient = new THREE.HemisphereLight(0xaecaff, 0x14141b, 0.58);
  group.add(ambient);

  const key = new THREE.DirectionalLight(0xffffff, 1.18);
  key.position.set(4.2, 6.5, 3.6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -6;
  key.shadow.camera.right = 6;
  key.shadow.camera.top = 6;
  key.shadow.camera.bottom = -6;
  group.add(key);

  const point = new THREE.PointLight(accent, 0.58, 9);
  point.position.set(-2.8, 2.2, 1.8);
  group.add(point);
}

function addDefaultLights(group, accent = 0x88aaff) {
  const ambient = new THREE.HemisphereLight(0xaecaff, 0x14141b, 0.72);
  group.add(ambient);
  const key = new THREE.DirectionalLight(0xffffff, 1.65);
  key.position.set(4.2, 6.5, 3.6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -6;
  key.shadow.camera.right = 6;
  key.shadow.camera.top = 6;
  key.shadow.camera.bottom = -6;
  group.add(key);
  const point = new THREE.PointLight(accent, 1.0, 9);
  point.position.set(-2.8, 2.2, 1.8);
  group.add(point);
}

function createPlayerAvatar(color = 0x46f0c8) {
  const root = new THREE.Group();
  const bodyMat = makeMat(color, { roughness: 0.5, emissive: color, emissiveIntensity: 0.08 });
  const darkMat = makeMat(0x141a24, { roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.54, 6, 12), bodyMat);
  body.position.y = 0.58;
  body.castShadow = true;
  root.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 10), makeMat(0xf3d0a6, { roughness: 0.5 }));
  head.position.y = 1.05;
  head.castShadow = true;
  root.add(head);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.055, 0.035), darkMat);
  visor.position.set(0, 1.08, -0.15);
  root.add(visor);
  const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.28, 18), makeMat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.15 }));
  arrow.position.set(0, 0.25, -0.28);
  arrow.rotation.x = -Math.PI / 2;
  root.add(arrow);
  return root;
}

function createDeviceProp(kind, color) {
  const root = new THREE.Group();
  const mat = makeMat(color, { roughness: 0.34, metalness: 0.04, emissive: color, emissiveIntensity: 0.22 });
  const shell = makeMat(0x222a35, { roughness: 0.55 });
  if (kind === 'light') {
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 24, 12), mat);
    lamp.castShadow = true;
    root.add(lamp);
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 32, 16),
      new THREE.MeshBasicMaterial({ color: 0xfff5c7, toneMapped: false })
    );
    core.position.y = 0.015;
    root.add(core);
    const glass = new THREE.Mesh(
      new THREE.SphereGeometry(0.29, 32, 16),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      })
    );
    glass.userData.noCastShadow = true;
    root.add(glass);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: createRadialGlowTexture(color).clone(),
      color: 0xffffff,
      transparent: true,
      opacity: 0.56,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: true,
      toneMapped: false
    }));
    glow.scale.set(0.9, 0.9, 1);
    glow.renderOrder = 4;
    root.add(glow);
    root.userData.lightGlow = glow;
    root.userData.lightGlass = glass;
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.48, 12), shell);
    handle.position.y = -0.27;
    root.add(handle);
  } else if (kind === 'camera') {
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.25, 0.26), shell);
    body.castShadow = true;
    root.add(body);
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.14, 24), mat);
    lens.rotation.x = Math.PI / 2;
    lens.position.z = -0.2;
    root.add(lens);
    const frustum = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.75, 4, 1, true), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.18, wireframe: true }));
    frustum.rotation.x = -Math.PI / 2;
    frustum.position.z = -0.54;
    root.add(frustum);
  } else {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.24, 0.36), mat);
    box.castShadow = true;
    root.add(box);
  }
  return root;
}

function updateLightEmitterVisual(root) {
  if (!root) return;
  const time = performance.now() * 0.001;
  const pulse = 0.5 + Math.sin(time * 3.2) * 0.5;
  if (root.userData.lightGlow) {
    const scale = 0.86 + pulse * 0.12;
    root.userData.lightGlow.scale.set(scale, scale, 1);
    root.userData.lightGlow.material.opacity = 0.48 + pulse * 0.14;
  }
  if (root.userData.lightGlass) {
    root.userData.lightGlass.scale.setScalar(1 + pulse * 0.045);
    root.userData.lightGlass.material.opacity = 0.12 + pulse * 0.06;
  }
}

function createMachinePad(labelText, color = 0x46f0c8) {
  const root = new THREE.Group();
  const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 0.78), makeMat(0x202735, { roughness: 0.64 }));
  base.castShadow = true;
  base.receiveShadow = true;
  root.add(base);
  const top = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.035, 0.46), makeMat(color, { emissive: color, emissiveIntensity: 0.14, roughness: 0.48 }));
  top.position.y = 0.08;
  root.add(top);
  const label = createCanvasLabel(labelText, { scale: 0.25, fontSize: 30, color: '#ffffff', background: 'rgba(0,0,0,0.62)' });
  label.position.set(0, 0.42, 0);
  root.add(label);
  return root;
}

function cylinderBetween(a, b, radius, mat, radialSegments = 16) {
  const dir = b.clone().sub(a);
  const len = dir.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, radialSegments), mat);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function createRustyCanister(accent = 0x46f0c8) {
  const root = new THREE.Group();
  const rustMat = makeTexturedMat('rust', 0x8c4a24, {
    roughness: 0.86,
    metalness: 0.22,
    repeatX: 1.2,
    repeatY: 1.8,
    bumpScale: 0.05,
    accentColor: 0x24110a,
    side: THREE.DoubleSide
  });
  const rimMat = makeMat(0x2d211d, { roughness: 0.66, metalness: 0.48, envMapIntensity: 1.1 });
  const glowMat = makeMat(accent, { emissive: accent, emissiveIntensity: 0.45, roughness: 0.35, metalness: 0.18 });

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.36, 0.72, 40, 4, true), rustMat);
  body.position.y = 0.36;
  body.castShadow = true;
  body.receiveShadow = true;
  root.add(body);
  const topRim = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.026, 8, 44), rimMat);
  topRim.position.y = 0.73;
  topRim.rotation.x = Math.PI / 2;
  topRim.castShadow = true;
  root.add(topRim);
  const bottomRim = topRim.clone();
  bottomRim.position.y = 0.02;
  root.add(bottomRim);

  const stripe = new THREE.Mesh(new THREE.TorusGeometry(0.335, 0.008, 6, 44), glowMat);
  stripe.position.y = 0.48;
  stripe.rotation.x = Math.PI / 2;
  root.add(stripe);

  const handleA = cylinderBetween(new THREE.Vector3(-0.29, 0.6, 0), new THREE.Vector3(-0.46, 0.8, 0), 0.015, rimMat, 10);
  const handleB = cylinderBetween(new THREE.Vector3(0.29, 0.6, 0), new THREE.Vector3(0.46, 0.8, 0), 0.015, rimMat, 10);
  root.add(handleA, handleB);
  return root;
}

function createVentGrate(width = 1.0, height = 0.58, accent = 0x46f0c8) {
  const root = new THREE.Group();
  const frameMat = makeMat(0x0b1018, { roughness: 0.42, metalness: 0.5, envMapIntensity: 1.0 });
  const bladeMat = makeMat(0x273241, { roughness: 0.36, metalness: 0.46, envMapIntensity: 1.05 });
  const glowMat = makeMat(accent, { emissive: accent, emissiveIntensity: 0.22, roughness: 0.4 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(width, height, 0.04), frameMat);
  root.add(frame);
  for (let i = 0; i < 6; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(width * 0.82, 0.025, 0.04), bladeMat);
    blade.position.y = lerp(-height * 0.32, height * 0.32, i / 5);
    blade.rotation.x = rad(12);
    root.add(blade);
  }
  const status = new THREE.Mesh(new THREE.BoxGeometry(width * 0.72, 0.012, 0.045), glowMat);
  status.position.y = -height * 0.43;
  root.add(status);
  return root;
}

function addIndustrialProps(group, width, depth, height, accent = 0x46f0c8) {
  const halfW = width / 2;
  const halfD = depth / 2;
  const backZ = -halfD;
  const pipeMat = makeMat(0x1b2430, { roughness: 0.32, metalness: 0.58, envMapIntensity: 1.15 });
  const cableMat = makeMat(0x06080c, { roughness: 0.48, metalness: 0.28, envMapIntensity: 0.95 });
  const accentMat = makeMat(accent, { roughness: 0.28, metalness: 0.16, emissive: accent, emissiveIntensity: 0.34 });

  const propScale = width > 15 ? 1.18 : 0.88;
  const canisterPositions = [
    [-halfW + 0.75, halfD - 0.85, 0],
    [halfW - 0.85, backZ + 0.82, Math.PI * 0.22]
  ];
  if (width > 13) {
    canisterPositions.push([-halfW + 1.2, backZ + 1.25, Math.PI * 0.5]);
    canisterPositions.push([halfW - 1.2, halfD - 1.25, -Math.PI * 0.35]);
  }
  for (const [x, z, r] of canisterPositions) {
    const can = createRustyCanister(accent);
    can.position.set(x, 0, z);
    can.rotation.y = r;
    can.scale.setScalar(propScale);
    group.add(can);
  }

  const pipeY = height * 0.72;
  const pipeA = cylinderBetween(new THREE.Vector3(-halfW + 0.28, pipeY, backZ + 0.18), new THREE.Vector3(halfW - 0.28, pipeY, backZ + 0.18), 0.045, pipeMat, 18);
  const pipeB = cylinderBetween(new THREE.Vector3(-halfW + 0.26, pipeY - 0.28, halfD - 0.28), new THREE.Vector3(-halfW + 0.26, pipeY - 0.28, backZ + 0.34), 0.038, pipeMat, 18);
  group.add(pipeA, pipeB);
  for (let i = 0; i < 4; i++) {
    const x = lerp(-halfW + 1.0, halfW - 1.0, i / 3);
    const clamp = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, 0.06), accentMat.clone());
    clamp.position.set(x, pipeY, backZ + 0.24);
    group.add(clamp);
  }

  for (const [x, z, rot] of [[-halfW + 0.08, 0.2, Math.PI / 2], [halfW - 0.08, -0.85, -Math.PI / 2]]) {
    const grate = createVentGrate(width > 13 ? 1.25 : 0.82, width > 13 ? 0.72 : 0.52, accent);
    grate.position.set(x, height * 0.42, z);
    grate.rotation.y = rot;
    group.add(grate);
  }

  const cableCount = width > 13 ? 5 : 3;
  for (let i = 0; i < cableCount; i++) {
    const startX = lerp(-halfW + 0.65, halfW - 0.65, Math.random());
    const startZ = lerp(backZ + 0.65, halfD - 0.65, Math.random());
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(startX, 0.045, startZ),
      new THREE.Vector3(startX + (Math.random() - 0.5) * 1.1, 0.05, startZ + (Math.random() - 0.5) * 1.1),
      new THREE.Vector3(startX + (Math.random() - 0.5) * 1.9, 0.045, startZ + (Math.random() - 0.5) * 1.9)
    ]);
    const cable = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, 0.014, 8, false), cableMat);
    cable.receiveShadow = true;
    group.add(cable);
  }
}

function createHumanoid(color = 0xffd166) {
  const root = new THREE.Group();
  const mat = makeMat(color, {
    roughness: 0.56,
    metalness: 0.02,
    emissive: color,
    emissiveIntensity: 0.08,
    transparent: true,
    opacity: 0.08,
    envMapIntensity: 0.18
  });
  mat.userData.noDepthWrite = true;
  mat.depthWrite = false;
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.58, 5, 10), mat);
  body.position.y = 0.55;
  body.castShadow = false;
  root.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 8), mat);
  head.position.y = 1.04;
  head.castShadow = false;
  root.add(head);
  root.userData.reveal = 0;
  return root;
}

function makeWingGeometry(side = 1) {
  const geo = new THREE.BufferGeometry();
  const verts = new Float32Array([
    0, 0.12, 0,
    side * 0.72, 0.38, -0.1,
    side * 0.42, -0.24, 0.04,
    0, 0.12, 0,
    side * 0.42, -0.24, 0.04,
    side * 0.9, -0.52, -0.12
  ]);
  geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  geo.computeVertexNormals();
  return geo;
}

function createFlyingMonster(color = 0xff4d8f, accent = 0x65e6ff) {
  return createHumanoid(color);
}

function createHandgun(color = 0x222b36, accent = 0x8fb4ff) {
  const root = new THREE.Group();
  const gunMat = makeMat(color, { roughness: 0.34, metalness: 0.42 });
  const slideMat = makeMat(0x46566a, { roughness: 0.28, metalness: 0.55 });
  const glowMat = makeMat(accent, { emissive: accent, emissiveIntensity: 0.32, roughness: 0.35 });

  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.34, 0.12), gunMat);
  grip.position.set(0, -0.18, 0.08);
  grip.rotation.x = rad(-12);
  grip.castShadow = true;
  root.add(grip);

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.38), gunMat);
  body.position.set(0, 0.01, -0.08);
  body.castShadow = true;
  root.add(body);

  const slide = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.46), slideMat);
  slide.position.set(0, 0.12, -0.14);
  slide.castShadow = true;
  root.add(slide);

  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.34, 16), slideMat);
  barrel.rotation.x = Math.PI / 2;
  barrel.position.set(0, 0.1, -0.43);
  barrel.castShadow = true;
  root.add(barrel);

  const sight = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.035, 0.05), glowMat);
  sight.position.set(0, 0.19, -0.28);
  root.add(sight);

  const flash = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 14, 8),
    new THREE.MeshBasicMaterial({ color: 0xfff1a8, transparent: true, opacity: 0, depthWrite: false })
  );
  flash.position.set(0, 0.1, -0.62);
  flash.renderOrder = 1200;
  root.add(flash);
  root.userData.flash = flash;
  return root;
}

function setObjectOpacity(root, opacity) {
  root.traverse((obj) => {
    if (obj.isLight && obj.userData.baseIntensity !== undefined) {
      obj.intensity = obj.userData.baseIntensity * opacity;
    }
    if (obj.isMesh) {
      obj.visible = opacity > 0.001;
      obj.castShadow = obj.userData.noCastShadow ? false : opacity > 0.08;
    }
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const mat of mats) {
        mat.transparent = opacity < 0.98;
        mat.opacity = opacity;
        mat.depthWrite = mat.userData?.noDepthWrite ? false : opacity > 0.3;
        if (mat.emissive) mat.emissiveIntensity = opacity * 0.24;
      }
    }
  });
}

function setVisualsVisible(root, visible) {
  root.traverse((obj) => {
    if (obj.isMesh || obj.isLine || obj.isSprite) obj.visible = visible;
  });
}

class UIManager {
  constructor() {
    this.title = getEl('roomTitle');
    this.goal = getEl('roomGoal');
    this.controls = getEl('controls');
    this.scoreRows = getEl('scoreRows');
    this.toast = getEl('toast');
    this.progress = getEl('progress');
  }

  setProgress(index, total) {
    this.progress.textContent = `방 ${index + 1} / ${total}`;
  }

  setRoom(title, goal) {
    this.title.textContent = title;
    this.goal.innerHTML = goal;
    this.toast.textContent = '';
  }

  setControls(html) {
    this.controls.innerHTML = html;
  }

  showToast(message) {
    this.toast.textContent = message;
  }

  updateScores(rows) {
    this.scoreRows.innerHTML = rows.map((row) => {
      const v = clamp01(row.value);
      const pct = Math.round(v * 100);
      const bad = row.bad ? 'bad' : '';
      const label = row.label;
      const text = row.text ?? `${pct}%`;
      return `<div class="score-row">
        <div class="score-label">${label}</div>
        <div class="score-bar"><div class="score-fill ${bad}" style="width:${pct}%"></div></div>
        <div class="score-value">${text}</div>
      </div>`;
    }).join('');
  }
}

class RoomBase {
  constructor(game) {
    this.game = game;
    this.group = new THREE.Group();
    this.listeners = [];
    this.interactables = [];
    this.solved = false;
    this.door = null;
    this.score = 0;
    this.player = null;
    this.carried = null;
    this.cameraTarget = null;
    this.playerCanFly = false;
    this.bounds = ROOM_LIMITS;
  }

  enter() {
    this.game.scene.add(this.group);
  }

  listen(target, type, handler, options) {
    if (!target) return;
    target.addEventListener(type, handler, options);
    this.listeners.push([target, type, handler, options]);
  }

  setupPlayer(position = new THREE.Vector3(0, 0, 2.7), options = {}) {
    this.playerCanFly = !!options.fly;
    this.player = createPlayerAvatar(options.color ?? 0x46f0c8);
    this.player.traverse((obj) => {
      if (obj.isMesh) obj.visible = false;
    });
    this.player.position.copy(position);
    this.player.position.y = this.playerCanFly ? Math.max(position.y, 0.4) : 0;
    this.group.add(this.player);
    this.cameraTarget = this.player;
    return this.player;
  }

  addInteractable(object, radius, getMessage, onUse) {
    this.interactables.push({ object, radius, getMessage, onUse });
  }

  nearestInteractable() {
    if (!this.player) return null;
    let best = null;
    let bestDist = Infinity;
    for (const item of this.interactables) {
      if (!item.object.visible) continue;
      if (item.object.userData.carried) continue;
      const dist = this.player.position.distanceTo(item.object.position);
      if (dist <= item.radius && dist < bestDist) {
        best = item;
        bestDist = dist;
      }
    }
    return best;
  }

  onKeyDown(code) {
    if (code !== 'KeyE') return;
    const item = this.nearestInteractable();
    if (item) item.onUse?.();
  }

  movementVector(fly = false) {
    return this.game.movementVector(fly);
  }

  moveObjectWithKeys(object, dt, options = {}) {
    const fly = !!options.fly;
    const dir = this.movementVector(fly);
    if (dir.lengthSq() <= 0.0001) return;
    object.position.addScaledVector(dir, (options.speed ?? (fly ? 2.4 : 2.2)) * dt);
    clampToBounds(object.position, options.bounds ?? this.bounds, fly);
    if (!fly && dir.lengthSq() > 0.001) {
      object.rotation.y = Math.atan2(dir.x, dir.z);
    }
  }

  updatePlayer(dt) {
    if (!this.player) return;
    this.moveObjectWithKeys(this.player, dt, { fly: this.playerCanFly, speed: this.playerCanFly ? 2.15 : 2.35 });
    if (this.carried) {
      const forward = this.game.lookDirection(false);
      this.carried.position.copy(this.player.position).add(forward.multiplyScalar(0.58));
      this.carried.position.y = this.player.position.y + 0.65;
    }
  }

  updateFollowCamera(dt, target = this.cameraTarget, options = {}) {
    if (!target) return;
    const targetPos = target.getWorldPosition(new THREE.Vector3());
    const eyeHeight = options.eyeHeight ?? options.height ?? (target === this.player ? 1.18 : 0.28);
    const eye = targetPos.add(new THREE.Vector3(0, eyeHeight, 0));
    const bounds = options.bounds ?? this.bounds;
    eye.x = THREE.MathUtils.clamp(eye.x, bounds.minX + 0.12, bounds.maxX - 0.12);
    eye.z = THREE.MathUtils.clamp(eye.z, bounds.minZ + 0.12, bounds.maxZ - 0.12);
    eye.y = THREE.MathUtils.clamp(eye.y, 0.35, bounds.maxY + 0.9);
    this.game.camera.position.copy(eye);
    this.game.applyMouseLook();
    if (target === this.player) target.rotation.y = this.game.lookYaw;
  }

  updateInteractPrompt() {
    const item = this.nearestInteractable();
    if (item) {
      const message = typeof item.getMessage === 'function' ? item.getMessage() : item.getMessage;
      this.game.ui.showToast(`E: ${message}`);
    } else if (!this.solved) {
      this.game.ui.showToast('');
    }
  }

  complete(message = '문이 열렸습니다. 다음 방으로 이동합니다.') {
    if (this.solved) return;
    this.solved = true;
    this.game.ui.showToast(message);
    this.game.roomSolved();
  }

  update(dt) {
    this.updateInteractPrompt();
    if (this.door) {
      const target = this.solved ? 1 : 0;
      const now = this.door.userData.openAmount ?? 0;
      setDoorOpen(this.door, lerp(now, target, 1 - Math.pow(0.001, dt)));
    }
  }

  dispose() {
    for (const [target, type, handler, options] of this.listeners) {
      target.removeEventListener(type, handler, options);
    }
    this.listeners = [];
    this.game.scene.remove(this.group);
    disposeObject(this.group);
  }
}

class LightingRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.lightPos = new THREE.Vector3(0.7, 1.5, 1.1);
    this.samples = [];
  }

  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 3.1, 6.8), new THREE.Vector3(0, 0.85, -0.2));
    const shell = buildRoomShell(this.group, 0xffd166, { floorColor: 0x151718, wallColor: 0x17151d });
    this.door = shell.door;

    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    this.group.add(ambient);

    const tableMat = makeMat(0x303846, { roughness: 0.65 });
    const table = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.18, 3.2), tableMat);
    table.position.set(0, 0.08, 0.05);
    table.receiveShadow = true;
    table.castShadow = true;
    this.group.add(table);

    const hemiGeo = new THREE.SphereGeometry(1.12, 48, 20, 0, Math.PI * 2, 0, Math.PI / 2);
    const hemiMat = makeMat(0xe7ebf5, { roughness: 0.44, metalness: 0.02, side: THREE.DoubleSide });
    this.hemi = new THREE.Mesh(hemiGeo, hemiMat);
    this.hemi.position.set(0, 0.18, 0);
    this.hemi.castShadow = true;
    this.hemi.receiveShadow = true;
    this.group.add(this.hemi);

    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.12, 0.025, 10, 64), makeMat(0xffd166, { emissive: 0xffd166, emissiveIntensity: 0.25 }));
    rim.position.set(0, 0.18, 0);
    rim.rotation.x = Math.PI / 2;
    this.group.add(rim);

    this.light = new THREE.PointLight(0xfff1c5, 1.55, 9, 2);
    this.light.position.copy(this.lightPos);
    this.light.castShadow = true;
    this.group.add(this.light);
    this.lightBall = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 12), makeMat(0xffd166, { emissive: 0xffd166, emissiveIntensity: 0.58 }));
    this.group.add(this.lightBall);

    const guide = createCanvasLabel('렌더링 방정식 직접광 항\nLᵢ · max(n·l, 0) / r² 를 크게 만들기', { scale: 0.78, fontSize: 30 });
    guide.position.set(0, 2.75, -2.85);
    this.group.add(guide);

    this.generateSamples();
    this.addSampleMarkers();

    this.game.ui.setRoom(
      '1. Lighting Room',
      '표면 위 반구의 렌더링 이퀘이션 직접광 값을 최대화하세요. 광원 위치를 움직여 평균 <b>n·l / r²</b> 점수를 90% 이상으로 만들면 탈출합니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Point Light Position</h3>
        ${this.slider('lightX', 'Light X', -3.5, 3.5, 0.01, this.lightPos.x)}
        ${this.slider('lightY', 'Light Y', 0.35, 4.2, 0.01, this.lightPos.y)}
        ${this.slider('lightZ', 'Light Z', -2.8, 2.8, 0.01, this.lightPos.z)}
        <p class="small-text">힌트: 반구의 평균 법선 방향과 광원 방향이 잘 맞고 거리가 너무 멀지 않아야 합니다.</p>
      </div>
    `);
    for (const axis of ['X', 'Y', 'Z']) {
      this.listen(getEl(`light${axis}`), 'input', () => this.readSliders());
    }
    this.readSliders();
  }

  slider(id, label, min, max, step, value) {
    return `<div class="control-row">
      <label for="${id}">${label}</label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
      <span id="${id}Val">${fmt(value)}</span>
    </div>`;
  }

  readSliders() {
    this.lightPos.set(
      Number(getEl('lightX').value),
      Number(getEl('lightY').value),
      Number(getEl('lightZ').value)
    );
    for (const axis of ['X', 'Y', 'Z']) getEl(`light${axis}Val`).textContent = fmt(this.lightPos[axis.toLowerCase()]);
  }

  generateSamples() {
    this.samples = [];
    for (let i = 0; i < 90; i++) {
      const u = (i + 0.5) / 90;
      const theta = Math.acos(1 - u); // top hemisphere bias
      const phi = (i * 2.399963229728653) % (Math.PI * 2);
      const n = new THREE.Vector3(
        Math.sin(theta) * Math.cos(phi),
        Math.cos(theta),
        Math.sin(theta) * Math.sin(phi)
      );
      if (n.y < 0) n.y *= -1;
      const p = n.clone().multiplyScalar(1.12).add(new THREE.Vector3(0, 0.18, 0));
      this.samples.push({ p, n });
    }
  }

  addSampleMarkers() {
    const geo = new THREE.SphereGeometry(0.018, 8, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
    const inst = new THREE.InstancedMesh(geo, mat, this.samples.length);
    const m = new THREE.Matrix4();
    for (let i = 0; i < this.samples.length; i++) {
      m.makeTranslation(this.samples[i].p.x, this.samples[i].p.y, this.samples[i].p.z);
      inst.setMatrixAt(i, m);
    }
    this.group.add(inst);
  }

  computeRenderingScore() {
    let sum = 0;
    let best = 0;
    const idealLight = new THREE.Vector3(0, 2.05, 0);
    for (const sample of this.samples) {
      const toLight = lightPos.clone().sub(sample.p);
      const distSq = Math.max(0.22, toLight.lengthSq());
      const l = toLight.normalize();
      sum += Math.max(0, sample.n.dot(l)) / distSq;
      const ideal = idealLight.clone().sub(sample.p);
      const idealDistSq = Math.max(0.22, ideal.lengthSq());
      best += Math.max(0, sample.n.dot(ideal.normalize())) / idealDistSq;
    }
    const energyScore = clamp01(sum / best);
    const alignment = clamp01(1 - Math.sqrt(this.lightPos.x ** 2 + this.lightPos.z ** 2) / 2.8);
    const height = clamp01(1 - Math.abs(this.lightPos.y - 2.05) / 2.1);
    return clamp01(energyScore * 0.66 + alignment * 0.2 + height * 0.14);
  }

  update(dt) {
    super.update(dt);
    updateLightEmitterVisual(this.lightBall);
    this.light.position.copy(this.lightPos);
    this.lightBall.position.copy(this.lightPos);
    this.score = this.computeRenderingScore();
    this.hemi.material.emissive.setHex(0xffd166);
    this.hemi.material.emissiveIntensity = 0.03 + this.score * 0.16;
    this.game.ui.updateScores([
      { label: 'Direct term', value: this.score, text: `${Math.round(this.score * 100)}%` },
      { label: 'Alignment', value: clamp01(1 - Math.sqrt(this.lightPos.x ** 2 + this.lightPos.z ** 2) / 2.8) },
      { label: '문 잠금', value: 0, text: this.score >= 0.9 ? '좌클릭 필요' : '잠김' }
    ]);
  }
}

class InteractiveLightingRoom extends RoomBase {
  constructor(game) {
    super(game);
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.15 + Math.random() * 1.65;
    this.lightPos = new THREE.Vector3(Math.cos(angle) * radius, 1.65 + Math.random() * 1.15, Math.sin(angle) * radius - 0.25);
    this.renderCamPos = new THREE.Vector3(3.35, 1.25, 2.6);
    this.samples = [];
    this.objectCenter = new THREE.Vector3(0, 1.18, -0.05);
    this.targetRadiance = 0.5;
    this.puzzleObject = null;
    this.sampleMarkers = null;
    this.componentModels = [];
    this.aimRaycaster = new THREE.Raycaster();
    this.lightInstalled = true;
    this.cameraInstalled = true;
    this.activeControl = 'camera';
    this.cameraMoved = false;
    this.requiredScore = 0.96;
    this.submittedRadiance = false;
    this.equationDebug = null;
  }

  enter() {
    super.enter();
    const roomPlaneColor = 0x9fa6ad;
    this.game.scene.background = new THREE.Color(roomPlaneColor);
    this.game.scene.fog = new THREE.Fog(roomPlaneColor, 18, 50);
    this.setupPlayer(new THREE.Vector3(0, 0, 2.95), { color: 0xffd166 });
    this.game.setCamera(new THREE.Vector3(0, 1.9, 5.2), this.objectCenter);
    const shell = buildRoomShell(this.group, 0xffd166, { floorColor: roomPlaneColor, wallColor: roomPlaneColor });
    this.door = shell.door;
    const planeMat = makeMat(roomPlaneColor, { roughness: 0.84 });
    const ceiling = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.08, 8.2), planeMat);
    ceiling.position.set(0, 3.4, 0);
    ceiling.receiveShadow = true;
    this.group.add(ceiling);
    const frontWall = new THREE.Mesh(new THREE.BoxGeometry(9.5, 3.4, 0.12), planeMat.clone());
    frontWall.position.set(0, 1.7, 4.1);
    frontWall.receiveShadow = true;
    this.group.add(frontWall);
    this.group.add(new THREE.AmbientLight(0xf2f4f6, 0.32));
    this.group.add(new THREE.HemisphereLight(0xdfe4e8, 0x8f98a2, 0.34));
    const fillLight = new THREE.DirectionalLight(0xf3f5f7, 0.16);
    fillLight.position.set(-3.5, 6.2, 4.6);
    this.group.add(fillLight);

    const table = new THREE.Mesh(new THREE.BoxGeometry(4.1, 0.18, 3.2), makeMat(0x8f98a2, { roughness: 0.65 }));
    table.position.set(0, 0.08, 0.05);
    table.receiveShadow = true;
    table.castShadow = true;
    this.group.add(table);

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(0.54, 0.68, 0.34, 48),
      makeMat(0x929aa4, { roughness: 0.62, metalness: 0.05 })
    );
    pedestal.position.set(this.objectCenter.x, 0.29, this.objectCenter.z);
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    this.group.add(pedestal);

    const glossyGeo = new THREE.TorusKnotGeometry(0.62, 0.23, 220, 36, 3, 5);
    glossyGeo.computeVertexNormals();
    this.puzzleObject = new THREE.Mesh(
      glossyGeo,
      makeGlossyTermMaterial(0)
    );
    this.puzzleObject.position.copy(this.objectCenter);
    this.puzzleObject.rotation.set(rad(18), rad(-32), rad(8));
    this.puzzleObject.scale.set(1.18, 1.0, 1.08);
    this.puzzleObject.castShadow = true;
    this.puzzleObject.receiveShadow = true;
    this.group.add(this.puzzleObject);
    this.puzzleObject.updateMatrixWorld(true);

    const crateMat = makeMat(0x8b949d, { roughness: 0.74 });
    for (const [x, z] of [[-3.65, 2.75], [3.65, 2.55]]) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.52, 0.72), crateMat);
      crate.position.set(x, 0.26, z);
      crate.castShadow = true;
      crate.receiveShadow = true;
      this.group.add(crate);
    }

    this.lightRig = createDeviceProp('light', 0xffd166);
    this.lightRig.position.copy(this.lightPos);
    this.group.add(this.lightRig);
    this.light = new THREE.PointLight(0xfff1c5, 1.55, 9, 2);
    this.light.castShadow = true;
    this.light.shadow.mapSize.set(1024, 1024);
    this.light.shadow.camera.near = 0.1;
    this.light.shadow.camera.far = 9;
    this.light.shadow.bias = -0.0015;
    this.lightRig.add(this.light);

    this.cameraRig = createDeviceProp('camera', 0x8fb4ff);
    this.cameraRig.position.copy(this.renderCamPos);
    this.group.add(this.cameraRig);
    this.cameraTarget = this.cameraRig;

    const guide = createCanvasPlaneLabel('매끈한 glossy 3D 물체의 표면 radiance를 계산합니다.\n렌더 카메라로 가장 강한 반사 방향을 찾고 좌클릭으로 제출하세요.', {
      scale: 0.48,
      fontSize: 26,
      background: 'rgba(5, 9, 18, 0.82)'
    });
    guide.position.set(-1.75, 2.55, -4.02);
    this.group.add(guide);
    this.listen(this.game.renderer.domElement, 'pointerdown', (event) => {
      if (document.pointerLockElement !== this.game.renderer.domElement) return;
      if (event.button === 0) this.submitRadianceAtAim();
    });

    this.generateSamples();
    this.targetRadiance = this.estimateTargetRadiance();
    this.createEquationDebug();
    this.game.ui.setRoom(
      '1. Lighting Room',
      '광원은 방 안의 랜덤한 3D 위치에 고정되어 있습니다. <b>렌더 카메라</b>를 WASD와 Space/Shift로 움직여, 화면 중앙 에임이 닿는 glossy 표면점 x의 직접광 outgoing radiance Lo(x, wo)를 최대화하세요. 가장 강한 위치를 찾은 뒤 <b>좌클릭으로 제출해야</b> 문이 열립니다. x, 법선 n, 입사광 Li, 시선 v, 반사 방향 r이 표시됩니다.'
    );
    this.updateControlPanel();
  }

  setupInteractables() {
    this.addInteractable(this.lightRig, 0.82, '광원 모듈 줍기', () => this.pickUpDevice(this.lightRig));
    this.addInteractable(this.cameraRig, 0.82, '렌더 카메라 줍기', () => this.pickUpDevice(this.cameraRig));
  }

  pickUpDevice(device) {
    if (device.userData.installed) return;
    if (this.carried && this.carried !== device) {
      this.game.ui.showToast('장비는 한 번에 하나만 들 수 있습니다.');
      return;
    }
    this.carried = device;
    device.userData.carried = true;
  }

  installDevice(type) {
    const device = type === 'light' ? this.lightRig : this.cameraRig;
    if (this.carried !== device) {
      this.game.ui.showToast(`${type === 'light' ? '광원 모듈' : '렌더 카메라'}를 먼저 이 위치로 가져오세요.`);
      return;
    }
    const pad = type === 'light' ? this.lightPad : this.cameraPad;
    device.userData.carried = false;
    device.userData.installed = true;
    device.position.copy(pad.position).add(new THREE.Vector3(0, 0.65, 0));
    this.carried = null;
    if (type === 'light') this.lightInstalled = true;
    if (type === 'camera') this.cameraInstalled = true;
    if (this.lightInstalled && this.cameraInstalled) {
      this.activeControl = 'light';
      this.cameraTarget = this.lightRig;
      this.game.ui.showToast('두 장비가 모두 도킹되었습니다. 1: 광원, 2: 카메라');
    } else {
      this.activeControl = 'player';
      this.cameraTarget = this.player;
    }
    this.updateControlPanel();
  }

  updateControlPanel() {
    const ready = this.lightInstalled && this.cameraInstalled;
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>조작</h3>
        <p class="small-text">광원은 랜덤 위치에 고정되어 움직일 수 없습니다. 렌더 카메라는 WASD로 수평 이동하고 Space/Shift로 위아래 이동합니다.</p>
        <p class="small-text"><b>중요:</b> 에임을 표면에 맞춘 뒤 좌클릭해야 현재 위치의 radiance가 제출됩니다. 바라보기만 하면 통과되지 않습니다.</p>
      </div>
      <div class="control-card">
        <h3>렌더링 이퀘이션</h3>
        <div class="button-grid">
          <button disabled>광원 고정</button>
          <button class="active">카메라 조종</button>
          <button disabled>P 스킵</button>
        </div>
        <p class="small-text">에임이 닿은 실제 mesh 표면점 x에서 Phong: Lo = Li * nDotL * (diffuse + specular * pow(R·V, shininess))를 계산합니다.</p>
        <p class="small-text">메인 물체에는 광원이 만드는 diffuse, Phong highlight, shadow terminator가 함께 표시됩니다. 에임이 닿은 x에서는 Li, n, v, r 벡터가 갱신되고, 좌클릭 시점의 radiance만 제출됩니다.</p>
      </div>
    `);
  }

  setActiveControl(mode) {
    if (mode !== 'camera') return;
    this.activeControl = 'camera';
    this.cameraTarget = this.cameraRig;
    this.updateControlPanel();
  }

  onKeyDown(code) {
    if (code === 'Digit1' || code === 'Digit2') this.setActiveControl('camera');
    super.onKeyDown(code);
  }

  submitRadianceAtAim() {
    const score = this.computeRenderingScore();
    this.score = score.total;
    this.updateEquationDebug(score);
    if (!this.cameraMoved) {
      this.game.ui.showToast('카메라를 움직인 뒤, 목표 표면을 조준하고 좌클릭으로 radiance를 제출하세요.');
      return;
    }
    if (!score.aimHit) {
      this.game.ui.showToast('에임이 glossy 물체 표면을 가리키지 않습니다.');
      return;
    }
    this.submittedRadiance = true;
    if (score.total >= this.requiredScore) {
      this.complete('좌클릭으로 제출한 표면 반응이 기준을 넘었습니다. 다음 방으로 이동합니다.');
    } else {
      this.game.ui.showToast('아직 통과 기준에 부족합니다. 하이라이트 방향을 더 강하게 맞춰보세요.');
    }
  }

  generateSamples() {
    this.samples = [];
    if (!this.puzzleObject) return;
    this.puzzleObject.updateMatrixWorld(true);
    const positions = this.puzzleObject.geometry.attributes.position;
    const normals = this.puzzleObject.geometry.attributes.normal;
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(this.puzzleObject.matrixWorld);
    const sampleCount = 150;
    for (let i = 0; i < sampleCount; i++) {
      const index = Math.floor((i + 0.5) * positions.count / sampleCount);
      const p = new THREE.Vector3().fromBufferAttribute(positions, index).applyMatrix4(this.puzzleObject.matrixWorld);
      const n = new THREE.Vector3().fromBufferAttribute(normals, index).applyMatrix3(normalMatrix).normalize();
      this.samples.push({ p, n });
    }
  }

  addSampleMarkers() {
    const geo = new THREE.SphereGeometry(0.014, 8, 4);
    const mat = new THREE.MeshBasicMaterial({ color: 0xff8c42, transparent: true, opacity: 0.72, depthTest: false });
    const inst = new THREE.InstancedMesh(geo, mat, this.samples.length);
    inst.renderOrder = 850;
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < this.samples.length; i++) {
      const markerPos = this.samples[i].p.clone().add(this.samples[i].n.clone().multiplyScalar(0.018));
      matrix.makeTranslation(markerPos.x, markerPos.y, markerPos.z);
      inst.setMatrixAt(i, matrix);
    }
    this.sampleMarkers = inst;
    this.group.add(inst);
  }

  createLightingTermViews() {}

  createEquationDebug() {
    const root = new THREE.Group();
    this.group.add(root);
    const point = new THREE.Object3D();
    root.add(point);

    const makeArrow = (color) => {
      const arrow = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(), 0.5, color, 0.12, 0.06);
      arrow.traverse((obj) => {
        if (obj.material) {
          obj.material.depthTest = false;
          obj.renderOrder = 900;
        }
      });
      root.add(arrow);
      return arrow;
    };

    const labels = {
      x: createCanvasLabel('x', { scale: 0.18, fontSize: 34, color: '#ffb15c', background: 'rgba(0,0,0,0.62)' }),
      li: createCanvasLabel('Li', { scale: 0.2, fontSize: 32, color: '#ffd166', background: 'rgba(0,0,0,0.62)' }),
      n: createCanvasLabel('n', { scale: 0.18, fontSize: 34, color: '#46f0c8', background: 'rgba(0,0,0,0.62)' }),
      v: createCanvasLabel('v', { scale: 0.18, fontSize: 34, color: '#8fb4ff', background: 'rgba(0,0,0,0.62)' }),
      r: createCanvasLabel('r', { scale: 0.18, fontSize: 34, color: '#d7a5ff', background: 'rgba(0,0,0,0.62)' })
    };
    for (const label of Object.values(labels)) root.add(label);

    const readout = createDynamicLabel('x=(0,0,0)\nn=(0,1,0)', {
      scale: 0.42,
      fontSize: 24,
      color: '#f7fbff',
      background: 'rgba(5, 9, 18, 0.72)'
    });
    root.add(readout);

    this.equationDebug = {
      root,
      point,
      lightRay: makeArrow(0xffd166),
      normal: makeArrow(0x46f0c8),
      view: makeArrow(0x8fb4ff),
      reflect: makeArrow(0xd7a5ff),
      labels,
      readout
    };
  }

  setDebugArrow(arrow, origin, direction, length, headLength = 0.12, headWidth = 0.06) {
    if (!arrow) return;
    const dir = direction.clone();
    if (dir.lengthSq() < 0.000001) {
      arrow.visible = false;
      return;
    }
    arrow.visible = true;
    dir.normalize();
    arrow.position.copy(origin);
    arrow.setDirection(dir);
    arrow.setLength(length, headLength, headWidth);
  }

  vectorText(v) {
    return `(${fmt(v.x, 2)}, ${fmt(v.y, 2)}, ${fmt(v.z, 2)})`;
  }

  updateGlossyUniforms(cameraPos) {
    const meshes = [this.puzzleObject, ...this.componentModels].filter(Boolean);
    for (const mesh of meshes) {
      const uniforms = mesh.material?.uniforms;
      if (!uniforms) continue;
      uniforms.uLightPos.value.copy(this.lightPos);
      uniforms.uCameraPos.value.copy(cameraPos);
      uniforms.uLightPower.value = 5.2;
      uniforms.uShininess.value = 42;
    }
  }

  aimSurfaceSample() {
    if (!this.puzzleObject) return null;
    const origin = this.game.camera.position.clone();
    const dir = this.game.lookDirection(true);
    this.aimRaycaster.set(origin, dir);
    this.aimRaycaster.near = 0.05;
    this.aimRaycaster.far = 8;
    const hits = this.aimRaycaster.intersectObject(this.puzzleObject, false);
    if (!hits.length) return null;
    const hit = hits[0];
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(this.puzzleObject.matrixWorld);
    const n = (hit.face?.normal ?? new THREE.Vector3(0, 1, 0)).clone().applyMatrix3(normalMatrix).normalize();
    if (n.dot(origin.clone().sub(hit.point)) < 0) n.negate();
    return { p: hit.point.clone(), n };
  }

  debugLightingForSample(sample, lightPos, cameraPos) {
    const diffuseAlbedo = 0.52;
    const specularStrength = 1.9;
    const shininess = 42;
    const lightPower = 5.2;
    const toCamera = cameraPos.clone().sub(sample.p);
    if (toCamera.lengthSq() < 0.000001) return null;
    const v = toCamera.normalize();
    const nDotV = Math.max(0, sample.n.dot(v));
    const toLight = lightPos.clone().sub(sample.p);
    const distSq = Math.max(0.18, toLight.lengthSq());
    const l = toLight.normalize();
    const nDotL = Math.max(0, sample.n.dot(l));
    const incomingRadiance = lightPower / distSq;
    const reflectDir = l.clone().negate().reflect(sample.n).normalize();
    const rDotV = Math.max(0, reflectDir.dot(v));
    const phongSpec = nDotL > 0 ? Math.pow(rDotV, shininess) : 0;
    const diffuse = diffuseAlbedo * incomingRadiance * nDotL;
    const specular = specularStrength * incomingRadiance * phongSpec;
    const radiance = diffuse + specular;
    return {
      p: sample.p.clone(),
      n: sample.n.clone(),
      l,
      v,
      r: reflectDir,
      nDotL,
      nDotV,
      rDotV,
      incomingRadiance,
      diffuseTerm: nDotL,
      specularTerm: phongSpec,
      brdf: diffuseAlbedo + specularStrength * phongSpec,
      diffuse,
      specular,
      radiance,
      distance: Math.sqrt(distSq),
      contribution: radiance
    };
  }

  updateEquationDebug(metrics) {
    if (!this.equationDebug) return;
    const info = metrics.debug;
    this.equationDebug.root.visible = !!info;
    if (!info) return;

    const x = info.p;
    const lightToX = x.clone().sub(this.lightPos);
    this.equationDebug.point.position.copy(x);
    this.setDebugArrow(this.equationDebug.lightRay, this.lightPos, lightToX, lightToX.length(), 0.17, 0.09);
    this.setDebugArrow(this.equationDebug.normal, x, info.n, 0.68, 0.13, 0.07);
    this.setDebugArrow(this.equationDebug.view, x, info.v, 0.78, 0.13, 0.07);
    this.setDebugArrow(this.equationDebug.reflect, x, info.r, 0.7, 0.13, 0.07);

    const labels = this.equationDebug.labels;
    labels.x.position.copy(x).add(new THREE.Vector3(0, 0.18, 0));
    labels.li.position.copy(this.lightPos).lerp(x, 0.54).add(new THREE.Vector3(0, 0.16, 0));
    labels.n.position.copy(x).add(info.n.clone().multiplyScalar(0.82));
    labels.v.position.copy(x).add(info.v.clone().multiplyScalar(0.94));
    labels.r.position.copy(x).add(info.r.clone().multiplyScalar(0.86));

    this.equationDebug.readout.position.copy(x).add(new THREE.Vector3(0, 1.05, 0));
    this.equationDebug.readout.userData.setText(
      `x=${this.vectorText(info.p)}\n` +
      `n=${this.vectorText(info.n)}\n` +
      `Li=${fmt(info.incomingRadiance, 3)}  N dot L=${fmt(info.nDotL, 3)}\n` +
      `R dot V=${fmt(info.rDotV, 3)}`
    );
  }

  evaluateRenderingEquation(lightPos, cameraPos) {
    const center = this.objectCenter;
    const cameraForward = center.clone().sub(cameraPos).normalize();
    const cosHalfFov = Math.cos(rad(38));
    let weightedRadiance = 0;
    let diffuseRadiance = 0;
    let specularRadiance = 0;
    let visibleWeight = 0;
    let visibleSamples = 0;
    let debug = null;

    for (const sample of this.samples) {
      const toCamera = cameraPos.clone().sub(sample.p);
      const v = toCamera.normalize();
      const nDotV = Math.max(0, sample.n.dot(v));
      if (nDotV <= 0) continue;

      const cameraToSample = sample.p.clone().sub(cameraPos).normalize();
      const fovDot = cameraForward.dot(cameraToSample);
      if (fovDot <= cosHalfFov) continue;
      const fovWeight = (fovDot - cosHalfFov) / (1 - cosHalfFov);
      visibleSamples++;

      const metrics = this.debugLightingForSample(sample, lightPos, cameraPos);
      if (!metrics || metrics.nDotL <= 0) continue;
      const diffuse = metrics.diffuse;
      const specular = metrics.specular;
      const weight = nDotV * fovWeight;
      const contribution = (diffuse + specular) * weight;
      if (!debug || contribution > debug.contribution) debug = { ...metrics, contribution };
      weightedRadiance += contribution;
      diffuseRadiance += diffuse * weight;
      specularRadiance += specular * weight;
      visibleWeight += weight;
    }
    const radiance = visibleWeight > 0 ? weightedRadiance / visibleWeight : 0;
    return {
      radiance,
      diffuse: visibleWeight > 0 ? diffuseRadiance / visibleWeight : 0,
      specular: visibleWeight > 0 ? specularRadiance / visibleWeight : 0,
      visible: clamp01(visibleSamples / Math.max(1, this.samples.length * 0.28)),
      visibleCount: visibleSamples,
      debug
    };
  }

  estimateTargetRadiance() {
    let best = 0;
    const center = this.objectCenter;
    for (const radius of [2.0, 2.6, 3.15]) {
      for (const y of [0.62, 1.05, 1.55, 2.05, 2.55]) {
        for (let i = 0; i < 28; i++) {
          const angle = (i / 28) * Math.PI * 2;
          const pos = new THREE.Vector3(
            center.x + Math.cos(angle) * radius,
            y,
            center.z + Math.sin(angle) * radius
          );
          if (pos.x < ROOM_LIMITS.minX || pos.x > ROOM_LIMITS.maxX || pos.z < ROOM_LIMITS.minZ || pos.z > ROOM_LIMITS.maxZ) continue;
          for (const sample of this.samples) {
            const metrics = this.debugLightingForSample(sample, this.lightPos, pos);
            if (metrics && metrics.nDotV > 0.03) best = Math.max(best, metrics.radiance);
          }
        }
      }
    }
    return Math.max(0.12, best * 0.94);
  }

  computeRenderingScore() {
    if (!this.lightInstalled || !this.cameraInstalled) return { total: 0, radiance: 0, diffuse: 0, specular: 0, visible: 0 };
    this.lightRig.getWorldPosition(this.lightPos);
    this.cameraRig.getWorldPosition(this.renderCamPos);
    const cameraPos = this.game.camera.position.clone();
    const aimSample = this.aimSurfaceSample();
    const targetRadiance = this.targetRadiance;
    const debug = aimSample ? this.debugLightingForSample(aimSample, this.lightPos, cameraPos) : null;
    const radiance = debug?.radiance ?? 0;
    const normalizedRadiance = clamp01(radiance / targetRadiance);
    return {
      total: normalizedRadiance,
      targetRadiance,
      radiance,
      diffuse: debug?.diffuse ?? 0,
      specular: debug?.specular ?? 0,
      visible: debug ? 1 : 0,
      visibleCount: debug ? 1 : 0,
      debug,
      aimHit: !!debug
    };
  }

  update(dt) {
    super.update(dt);
    updateLightEmitterVisual(this.lightRig);
    const cameraBefore = this.cameraRig.position.clone();
    this.moveObjectWithKeys(this.cameraRig, dt, { fly: true, speed: 2.1 });
    if (cameraBefore.distanceToSquared(this.cameraRig.position) > 0.000001) this.cameraMoved = true;
    this.cameraRig.lookAt(this.objectCenter);
    const ready = this.lightInstalled && this.cameraInstalled;
    setVisualsVisible(this.lightRig, true);
    setVisualsVisible(this.cameraRig, false);
    this.updateFollowCamera(dt, this.cameraRig, { fly: true, eyeHeight: 0.2 });
    const score = this.computeRenderingScore();
    this.score = score.total;
    this.updateGlossyUniforms(this.game.camera.position);
    this.updateEquationDebug(score);
    const debug = score.debug;
    this.game.ui.updateScores([
      { label: '광원 상태', value: 1, text: '랜덤 고정' },
      { label: '카메라 이동', value: this.cameraMoved ? 1 : 0, text: this.cameraMoved ? '완료' : '필요' },
      { label: '조준 x', value: debug ? 1 : 0, text: debug ? this.vectorText(debug.p) : '빗나감' },
      { label: 'N dot L', value: debug?.nDotL ?? 0, text: debug ? fmt(debug.nDotL, 3) : '-' },
      { label: 'R dot V', value: debug?.rDotV ?? 0, text: debug ? fmt(debug.rDotV, 3) : '-' },
      { label: 'Li', value: clamp01((debug?.incomingRadiance ?? 0) / 7), text: debug ? fmt(debug.incomingRadiance, 3) : '-' },
      { label: 'Phong spec', value: debug?.specularTerm ?? 0, text: debug ? fmt(debug.specularTerm, 3) : '-' },
      { label: 'Diffuse', value: clamp01(score.diffuse * 2.2), text: fmt(score.diffuse, 3) },
      { label: 'Specular', value: clamp01(score.specular * 8), text: fmt(score.specular, 3) },
      { label: '조준 표면', value: score.aimHit ? 1 : 0, text: score.aimHit ? '표면' : '빗나감' },
      { label: '문 잠금', value: this.submittedRadiance ? this.score / this.requiredScore : 0, text: this.submittedRadiance && this.score >= this.requiredScore ? '열림' : '좌클릭' }
    ]);
  }
}

const SHADING_ROOM_LIGHT_POS = new THREE.Vector3(2.5, 3.2, 2.8);
const SHADING_ROOM_SPHERE_COLOR = new THREE.Color(0.82, 0.88, 1.0);

function makeShadingMaterial(mode, color = SHADING_ROOM_SPHERE_COLOR) {
  const baseColor = color instanceof THREE.Color ? color.clone() : new THREE.Color(color);
  if (mode === 'flat') {
    return new THREE.MeshPhongMaterial({
      color: baseColor,
      shininess: 34,
      flatShading: true,
      specular: 0xffffff
    });
  }
  const uniforms = {
    uLightPos: { value: SHADING_ROOM_LIGHT_POS.clone() },
    uCameraPos: { value: new THREE.Vector3() },
    uColor: { value: baseColor },
    uShininess: { value: 45 }
  };
  const shadeFn = `
    vec3 shade(vec3 worldPos, vec3 n) {
      vec3 N = normalize(n);
      vec3 L = normalize(uLightPos - worldPos);
      vec3 V = normalize(uCameraPos - worldPos);
      vec3 R = reflect(-L, N);
      float diff = max(dot(N, L), 0.0);
      float spec = pow(max(dot(R, V), 0.0), uShininess) * 0.55;
      vec3 ambient = vec3(0.08, 0.10, 0.16);
      return ambient + uColor * diff + vec3(spec);
    }
  `;
  if (mode === 'gouraud') {
    return new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec3 vCol;
        uniform vec3 uLightPos;
        uniform vec3 uCameraPos;
        uniform vec3 uColor;
        uniform float uShininess;
        ${shadeFn}
        void main() {
          vec3 worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vec3 n = normalize(mat3(modelMatrix) * normal);
          vCol = shade(worldPos, n);
          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vCol;
        void main() {
          gl_FragColor = vec4(vCol, 1.0);
        }
      `
    });
  }
  return new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      void main() {
        vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vWorldPos;
      varying vec3 vNormal;
      uniform vec3 uLightPos;
      uniform vec3 uCameraPos;
      uniform vec3 uColor;
      uniform float uShininess;
      ${shadeFn}
      void main() {
        gl_FragColor = vec4(shade(vWorldPos, vNormal), 1.0);
      }
    `
  });
}

function makeTrickySphereGeometry() {
  const geo = new THREE.IcosahedronGeometry(1.13, 3).toNonIndexed();
  geo.computeVertexNormals();
  return geo;
}

class ShadingRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.targetMode = 'phong';
    this.currentMode = 'flat';
    this.keypadInput = '';
    this.keypadWrong = false;
    this.keypadKeys = [];
    this.keypadRaycaster = new THREE.Raycaster();
    this.keypadDisplay = null;
  }

  useWorldDepthForSprites(root) {
    root?.traverse((obj) => {
      if (!obj.isSprite || !obj.material) return;
      obj.material.depthTest = true;
      obj.material.depthWrite = false;
      obj.renderOrder = 0;
    });
  }

  enter() {
    super.enter();
    this.game.setRenderProfile({
      exposure: 0.72,
      bloomStrength: 0.0,
      bloomRadius: 0.12,
      bloomThreshold: 1.0,
      ssao: false,
      pixelRatio: 1.35
    });
    this.setupPlayer(new THREE.Vector3(0, 0, 2.95), { color: 0x8fb4ff });
    this.game.setCamera(new THREE.Vector3(0, 2.7, 7.1), new THREE.Vector3(0, 1.1, -0.35));
    const shell = buildLegacyShadingRoomShell(this.group, 0x8fb4ff, { floorColor: 0x121622, wallColor: 0x0f1523 });
    this.door = shell.door;
    addLegacyShadingRoomLights(this.group, 0x8fb4ff);
    const shadingPointLight = new THREE.PointLight(0xffffff, 0.85, 7.5, 2);
    shadingPointLight.position.copy(SHADING_ROOM_LIGHT_POS);
    this.group.add(shadingPointLight);
    this.buildDoorKeypad();
    this.listen(this.game.renderer.domElement, 'pointerdown', (event) => {
      if (event.button === 0) this.clickKeypad(event);
    });

    const lightMarker = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 8), makeMat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.65, envMapIntensity: 0 }));
    lightMarker.position.copy(SHADING_ROOM_LIGHT_POS);
    this.group.add(lightMarker);

    const baseMat = makeMat(0x273144, { roughness: 0.8, envMapIntensity: 0 });
    const leftBase = new THREE.Mesh(new THREE.BoxGeometry(2.9, 0.12, 2.9), baseMat);
    leftBase.position.set(-2.2, 0.06, 0);
    const rightBase = leftBase.clone();
    rightBase.position.x = 2.2;
    this.group.add(leftBase, rightBase);

    const labelA = createCanvasLabel('TARGET\nmatch the shading', { scale: 0.5, fontSize: 32 });
    labelA.position.set(-2.2, 2.65, -0.4);
    const labelB = createCanvasLabel('내 물체\n기법을 선택해 일치시키기', { scale: 0.5, fontSize: 32 });
    labelB.position.set(2.2, 2.65, -0.4);
    this.group.add(labelA, labelB);
    this.useWorldDepthForSprites(this.group);

    const targetGeo = makeTrickySphereGeometry();
    this.targetMesh = new THREE.Mesh(targetGeo, makeShadingMaterial(this.targetMode));
    this.targetMesh.position.set(-2.2, 1.24, 0);
    this.targetMesh.castShadow = true;
    this.group.add(this.targetMesh);

    const edgeMat = new THREE.LineBasicMaterial({ color: 0x0c1220, transparent: true, opacity: 0.35 });
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(targetGeo, 12), edgeMat);
    edges.position.copy(this.targetMesh.position);
    this.targetEdges = edges;
    this.group.add(edges);

    this.playerGeo = makeTrickySphereGeometry();
    this.playerMesh = new THREE.Mesh(this.playerGeo, makeShadingMaterial(this.currentMode));
    this.playerMesh.position.set(2.2, 1.24, 0);
    this.playerMesh.castShadow = true;
    this.group.add(this.playerMesh);

    this.playerEdges = new THREE.LineSegments(new THREE.EdgesGeometry(this.playerGeo, 12), edgeMat.clone());
    this.playerEdges.position.copy(this.playerMesh.position);
    this.group.add(this.playerEdges);

    this.game.ui.setRoom(
      '2. Shading Room',
      '같은 삼각형 mesh 위에서 Flat, Gouraud, Phong shading이 어떻게 다르게 계산되는지 비교하고 왼쪽 물체와 같은 technique을 적용하세요.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Shading Technique</h3>
        <div class="button-grid">
          <button id="shadeFlat" class="active">1 Flat</button>
          <button id="shadeGouraud">2 Gouraud</button>
          <button id="shadePhong">3 Phong</button>
        </div>
        <p class="small-text">숫자키로 전환합니다. 1: Flat, 2: Gouraud, 3: Phong.</p>
        <p class="small-text">선택 즉시 오른쪽 물체에 적용됩니다. Flat은 triangle마다 한 번, Gouraud는 vertex마다 한 번, Phong은 pixel마다 lighting 값을 계산합니다.</p>
      </div>
    `);
    this.listen(getEl('shadeFlat'), 'click', () => this.setMode('flat'));
    this.listen(getEl('shadeGouraud'), 'click', () => this.setMode('gouraud'));
    this.listen(getEl('shadePhong'), 'click', () => this.setMode('phong'));
    this.buildKeypadPanel();
    this.updateKeypadDisplays();
  }

  onKeyDown(code) {
    if (code === 'Digit1') this.setMode('flat');
    if (code === 'Digit2') this.setMode('gouraud');
    if (code === 'Digit3') this.setMode('phong');
    if (code === 'Backspace') this.deleteKeypadChar();
    if (code === 'Enter') this.submitKeypadAnswer();
    if (code === 'KeyR') this.resetKeypadInput();
    super.onKeyDown(code);
  }

  setMode(mode) {
    this.currentMode = mode;
    const old = this.playerMesh.material;
    this.playerMesh.material = makeShadingMaterial(mode);
    old.dispose();
    for (const id of ['shadeFlat', 'shadeGouraud', 'shadePhong']) getEl(id)?.classList.remove('active');
    getEl(`shade${mode[0].toUpperCase()}${mode.slice(1)}`)?.classList.add('active');
  }

  keypadText() {
    return this.keypadInput;
  }

  buildKeypadPanel() {
    getEl('controls')?.insertAdjacentHTML('beforeend', `
      <div class="control-card">
        <h3>문 키패드</h3>
        <div id="keypadInputStatus" class="keypad-readout">${this.keypadText()}</div>
        <div class="button-grid">
          <button id="keypadDelete">지우기</button>
          <button id="keypadReset" class="danger">초기화</button>
          <button id="keypadSubmit">제출</button>
        </div>
        <p class="small-text">문 옆 키패드를 에임으로 보고 좌클릭해서 입력합니다. Backspace는 한 글자 지우기, R은 전체 초기화입니다.</p>
      </div>
    `);
    this.listen(getEl('keypadDelete'), 'click', () => this.deleteKeypadChar());
    this.listen(getEl('keypadReset'), 'click', () => this.resetKeypadInput());
    this.listen(getEl('keypadSubmit'), 'click', () => this.submitKeypadAnswer());
  }

  updateKeypadDisplays() {
    const text = this.keypadText();
    if (this.keypadDisplay) this.keypadDisplay.userData.setText(text, this.keypadWrong ? 'wrong' : '');
    const status = getEl('keypadInputStatus');
    if (status) {
      status.textContent = this.keypadWrong ? `${text}  -  틀렸습니다` : text;
      status.classList.toggle('wrong', this.keypadWrong);
    }
  }

  appendKeypadLetter(letter) {
    this.keypadInput += letter;
    this.keypadWrong = false;
    this.updateKeypadDisplays();
    if (false && this.keypadInput === 'PHONG') {
      this.complete('문 잠금장치에 PHONG을 입력했습니다. 다음 방으로 이동합니다.');
    } else if (false && this.keypadInput.length >= 5) {
      this.game.ui.showToast(`${this.keypadInput} 입력됨. 틀렸으면 DEL 또는 RESET으로 다시 입력하세요.`);
    }
  }

  submitKeypadAnswer() {
    const answer = this.keypadInput.trim().toUpperCase();
    if (answer === 'PHONG') {
      this.keypadWrong = false;
      this.updateKeypadDisplays();
      this.complete('문 잠금장치의 답안을 맞혔습니다. 다음 방으로 이동합니다.');
      return;
    }
    this.keypadWrong = true;
    this.updateKeypadDisplays();
    this.game.ui.showToast(answer ? '틀렸습니다. 지우거나 초기화한 뒤 다시 제출하세요.' : '답안을 입력한 뒤 Enter로 제출하세요.');
  }

  deleteKeypadChar() {
    this.keypadInput = this.keypadInput.slice(0, -1);
    this.keypadWrong = false;
    this.updateKeypadDisplays();
    this.game.ui.showToast('마지막 글자를 지웠습니다.');
  }

  resetKeypadInput() {
    this.keypadInput = '';
    this.keypadWrong = false;
    this.updateKeypadDisplays();
    this.game.ui.showToast('키패드 입력을 처음부터 다시 시작합니다.');
  }

  buildDoorKeypad() {
    const root = new THREE.Group();
    root.position.set(2.9, 1.42, -4.02);
    this.group.add(root);

    const board = new THREE.Mesh(
      new THREE.BoxGeometry(1.72, 1.48, 0.08),
      makeMat(0x151d2d, { roughness: 0.65, emissive: 0x1b3d72, emissiveIntensity: 0.18 })
    );
    root.add(board);

    this.keypadDisplay = createFixedInputLabel(this.keypadText(), {
      worldWidth: 1.58,
      worldHeight: 0.38,
      fontSize: 48,
      background: 'rgba(0,0,0,0.88)'
    });
    this.keypadDisplay.position.set(0, 0.55, 0.08);
    root.add(this.keypadDisplay);

    const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];
    const keyMat = makeMat(0x22314a, { roughness: 0.5, emissive: 0x1b4fa3, emissiveIntensity: 0.15 });
    const keyGeo = new THREE.BoxGeometry(0.13, 0.13, 0.055);
    rows.forEach((row, rowIndex) => {
      const y = 0.31 - rowIndex * 0.23;
      const startX = -(row.length - 1) * 0.085;
      [...row].forEach((letter, index) => {
        const key = new THREE.Mesh(keyGeo, keyMat.clone());
        key.position.set(startX + index * 0.17, y, 0.07);
        key.userData.keyLetter = letter;
        root.add(key);
        this.keypadKeys.push(key);
        const label = createCanvasPlaneLabel(letter, { scale: 0.095, fontSize: 34, color: '#ffffff', background: 'rgba(0,0,0,0)' });
        label.position.copy(key.position).add(new THREE.Vector3(0, 0, 0.055));
        root.add(label);
      });
    });

    const specialGeo = new THREE.BoxGeometry(0.36, 0.14, 0.055);
    const specialMat = makeMat(0x4a2737, { roughness: 0.52, emissive: 0x8f1d2d, emissiveIntensity: 0.2 });
    const addSpecialKey = (label, action, x) => {
      const key = new THREE.Mesh(specialGeo, specialMat.clone());
      key.position.set(x, -0.39, 0.07);
      key.userData.keyAction = action;
      root.add(key);
      this.keypadKeys.push(key);
      const keyLabel = createCanvasPlaneLabel(label, { scale: 0.105, fontSize: 30, color: '#ffffff', background: 'rgba(0,0,0,0)' });
      keyLabel.position.copy(key.position).add(new THREE.Vector3(0, 0, 0.055));
      root.add(keyLabel);
    };
    addSpecialKey('지움', 'delete', -0.48);
    addSpecialKey('초기화', 'reset', 0);
    addSpecialKey('제출', 'submit', 0.48);

    const hint = createCanvasPlaneLabel('문 비밀번호', { scale: 0.22, fontSize: 26, color: '#d7e6ff', background: 'rgba(0,0,0,0.58)' });
    hint.position.set(0, -0.63, 0.08);
    root.add(hint);
    this.useWorldDepthForSprites(root);
  }

  clickKeypad(event) {
    if (event && document.pointerLockElement !== this.game.renderer.domElement) {
      const rect = this.game.renderer.domElement.getBoundingClientRect();
      const pointer = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
      this.keypadRaycaster.setFromCamera(pointer, this.game.camera);
    } else {
      this.keypadRaycaster.set(this.game.camera.position, this.game.lookDirection(true));
    }
    this.keypadRaycaster.near = 0.05;
    this.keypadRaycaster.far = 8;
    const hit = this.keypadRaycaster.intersectObjects(this.keypadKeys, false)[0];
    if (!hit) return;
    const blockerHit = this.keypadRaycaster.intersectObjects([this.targetMesh, this.playerMesh].filter(Boolean), true)[0];
    if (blockerHit && blockerHit.distance < hit.distance) return;
    if (hit.object.userData.keyAction === 'delete') {
      this.deleteKeypadChar();
      return;
    }
    if (hit.object.userData.keyAction === 'reset') {
      this.resetKeypadInput();
      return;
    }
    if (hit.object.userData.keyAction === 'submit') {
      this.submitKeypadAnswer();
      return;
    }
    const letter = hit.object.userData.keyLetter;
    if (letter) this.appendKeypadLetter(letter);
  }

  updateShaderUniforms(mesh) {
    const mat = mesh.material;
    if (mat.uniforms) {
      mat.uniforms.uCameraPos.value.copy(this.game.camera.position);
      mat.uniforms.uLightPos.value.copy(SHADING_ROOM_LIGHT_POS);
    }
  }

  update(dt) {
    super.update(dt);
    this.useWorldDepthForSprites(this.group);
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { distance: 3.0 });
    this.targetMesh.rotation.y += dt * 0.38;
    this.playerMesh.rotation.y = this.targetMesh.rotation.y;
    this.targetEdges.rotation.copy(this.targetMesh.rotation);
    this.playerEdges.rotation.copy(this.playerMesh.rotation);
    this.updateShaderUniforms(this.targetMesh);
    this.updateShaderUniforms(this.playerMesh);
    const modeScore = this.currentMode === this.targetMode ? 1 : this.currentMode === 'flat' ? 0.48 : 0.64;
    this.score = modeScore;
    this.game.ui.updateScores([
      { label: '문 잠금', value: this.solved ? 1 : 0, text: this.solved ? '열림' : '잠김' }
    ]);
  }
}

class TextureRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.settings = {
      wrapName: 'ClampToEdgeWrapping',
      repeatX: 1,
      repeatY: 1,
      offsetX: 0,
      offsetY: 0
    };
    this.target = {
      wrapName: 'MirroredRepeatWrapping',
      repeatX: 2.6,
      repeatY: 1.8,
      offsetX: 0.18,
      offsetY: -0.12
    };
  }

  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 2.75, 6.9), new THREE.Vector3(0, 1.15, -0.3));
    const shell = buildRoomShell(this.group, 0xef476f, { floorColor: 0x151822, wallColor: 0x111521 });
    this.door = shell.door;
    addDefaultLights(this.group, 0xef476f);

    this.baseTexture = createCheckerTexture(512);
    const targetTexture = this.makeTexture(this.target);
    const playerTexture = this.makeTexture(this.settings);
    const originalTexture = this.makeTexture({ wrapName: 'ClampToEdgeWrapping', repeatX: 1, repeatY: 1, offsetX: 0, offsetY: 0 });

    const planeGeo = new THREE.PlaneGeometry(2.25, 2.25, 1, 1);
    this.targetPlane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: targetTexture, side: THREE.DoubleSide }));
    this.targetPlane.position.set(-2.45, 1.3, -0.25);
    this.playerPlane = new THREE.Mesh(planeGeo.clone(), new THREE.MeshBasicMaterial({ map: playerTexture, side: THREE.DoubleSide }));
    this.playerPlane.position.set(2.45, 1.3, -0.25);
    const originalPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 1.15), new THREE.MeshBasicMaterial({ map: originalTexture, side: THREE.DoubleSide }));
    originalPlane.position.set(0, 0.75, 0.45);
    originalPlane.rotation.x = -0.08;
    this.group.add(this.targetPlane, this.playerPlane, originalPlane);

    const leftLabel = createCanvasLabel('TARGET TEXTURE', { scale: 0.45, fontSize: 34 });
    leftLabel.position.set(-2.45, 2.78, -0.35);
    const rightLabel = createCanvasLabel('YOUR TEXTURE', { scale: 0.45, fontSize: 34 });
    rightLabel.position.set(2.45, 2.78, -0.35);
    const originLabel = createCanvasLabel('ORIGINAL', { scale: 0.34, fontSize: 34 });
    originLabel.position.set(0, 1.55, 0.35);
    this.textureLabels = [leftLabel, rightLabel, originLabel];
    this.textureLabels.forEach((label) => { label.visible = false; });
    this.group.add(leftLabel, rightLabel, originLabel);

    this.game.ui.setRoom(
      '3. Texture Room',
      '원본 UV 이미지를 이용해 오른쪽을 왼쪽과 동일하게 만드세요. wrapping, repeat, offset이 모두 비슷해야 문이 열립니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Texture Wrapping</h3>
        <div class="button-grid">
          <button id="wrapClamp" class="active">Clamp</button>
          <button id="wrapRepeat">Repeat</button>
          <button id="wrapMirror">Mirror</button>
        </div>
      </div>
      <div class="control-card">
        <h3>UV Transform</h3>
        ${this.slider('repeatX', 'Repeat X', 0.5, 4, 0.01, this.settings.repeatX)}
        ${this.slider('repeatY', 'Repeat Y', 0.5, 4, 0.01, this.settings.repeatY)}
        ${this.slider('offsetX', 'Offset X', -0.5, 0.5, 0.01, this.settings.offsetX)}
        ${this.slider('offsetY', 'Offset Y', -0.5, 0.5, 0.01, this.settings.offsetY)}
        <p class="small-text">목표는 Mirror wrapping, Repeat X≈2.6, Repeat Y≈1.8, Offset X≈0.18, Offset Y≈-0.12 근처입니다.</p>
      </div>
    `);
    this.listen(getEl('wrapClamp'), 'click', () => this.setWrap('ClampToEdgeWrapping'));
    this.listen(getEl('wrapRepeat'), 'click', () => this.setWrap('RepeatWrapping'));
    this.listen(getEl('wrapMirror'), 'click', () => this.setWrap('MirroredRepeatWrapping'));
    for (const id of ['repeatX', 'repeatY', 'offsetX', 'offsetY']) {
      this.listen(getEl(id), 'input', () => this.readSliders());
    }
    this.readSliders();
  }

  slider(id, label, min, max, step, value) {
    return `<div class="control-row">
      <label for="${id}">${label}</label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
      <span id="${id}Val">${fmt(value)}</span>
    </div>`;
  }

  makeTexture(settings) {
    const texture = this.baseTexture.clone();
    texture.wrapS = texture.wrapT = wrapConstantFromName(settings.wrapName);
    texture.repeat.set(settings.repeatX, settings.repeatY);
    texture.offset.set(settings.offsetX, settings.offsetY);
    texture.needsUpdate = true;
    return texture;
  }

  setWrap(name) {
    this.settings.wrapName = name;
    getEl('wrapClamp')?.classList.toggle('active', name === 'ClampToEdgeWrapping');
    getEl('wrapRepeat')?.classList.toggle('active', name === 'RepeatWrapping');
    getEl('wrapMirror')?.classList.toggle('active', name === 'MirroredRepeatWrapping');
    this.applyTexture();
  }

  readSliders() {
    for (const id of ['repeatX', 'repeatY', 'offsetX', 'offsetY']) {
      this.settings[id] = Number(getEl(id).value);
      getEl(`${id}Val`).textContent = fmt(this.settings[id]);
    }
    this.applyTexture();
  }

  applyTexture() {
    if (!this.playerPlane) return;
    const texture = this.playerPlane.material.map;
    texture.wrapS = texture.wrapT = wrapConstantFromName(this.settings.wrapName);
    texture.repeat.set(this.settings.repeatX, this.settings.repeatY);
    texture.offset.set(this.settings.offsetX, this.settings.offsetY);
    texture.needsUpdate = true;
  }

  computeScore() {
    const wrapScore = this.settings.wrapName === this.target.wrapName ? 1 : 0;
    const repeatError = Math.abs(this.settings.repeatX - this.target.repeatX) / 1.4 + Math.abs(this.settings.repeatY - this.target.repeatY) / 1.4;
    const repeatScore = clamp01(1 - repeatError / 2);
    const offsetError = Math.abs(this.settings.offsetX - this.target.offsetX) / 0.45 + Math.abs(this.settings.offsetY - this.target.offsetY) / 0.45;
    const offsetScore = clamp01(1 - offsetError / 2);
    return { wrapScore, repeatScore, offsetScore, total: wrapScore * 0.45 + repeatScore * 0.35 + offsetScore * 0.2 };
  }

  update(dt) {
    super.update(dt);
    const s = this.computeScore();
    this.score = s.total;
    this.game.ui.updateScores([
      { label: 'Wrapping', value: s.wrapScore, text: this.settings.wrapName.replace('Wrapping', '') },
      { label: '선택 항목', value: 1, text: this.selectedTextureControl },
      { label: 'Repeat', value: s.repeatScore },
      { label: 'Offset', value: s.offsetScore },
      { label: '문 잠금', value: this.score / 0.88, text: this.score >= 0.88 ? '열림' : '잠김' }
    ]);
    if (this.score >= 0.88) this.complete('Texture transform이 목표와 일치했습니다. 다음 방으로 이동합니다.');
  }
}

class InteractiveTextureRoom extends TextureRoom {
  constructor(game) {
    super(game);
    this.originalInstalled = false;
    this.selectedTextureControl = 'repeatX';
    this.escapeThreshold = 0.92;
  }

  enter() {
    RoomBase.prototype.enter.call(this);
    this.setupPlayer(new THREE.Vector3(0, 0, 2.95), { color: 0xef476f });
    this.game.setCamera(new THREE.Vector3(0, 2.3, 6.2), new THREE.Vector3(0, 1.05, 1.1));
    const shell = buildRoomShell(this.group, 0xef476f, { floorColor: 0x151822, wallColor: 0x111521 });
    this.door = shell.door;
    addDefaultLights(this.group, 0xef476f);

    this.baseTexture = createCheckerTexture(512);
    const targetTexture = this.makeTexture(this.target);
    const playerTexture = this.makeTexture(this.settings);
    const originalTexture = this.makeTexture({ wrapName: 'ClampToEdgeWrapping', repeatX: 1, repeatY: 1, offsetX: 0, offsetY: 0 });

    const planeGeo = new THREE.PlaneGeometry(2.25, 2.25, 1, 1);
    this.targetPlane = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: targetTexture, side: THREE.DoubleSide }));
    this.targetPlane.position.set(-2.45, 1.3, -0.25);
    this.playerPlane = new THREE.Mesh(planeGeo.clone(), new THREE.MeshBasicMaterial({ map: playerTexture, side: THREE.DoubleSide }));
    this.playerPlane.position.set(2.45, 1.3, -0.25);
    this.originalPlane = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 1.15), new THREE.MeshBasicMaterial({ map: originalTexture, side: THREE.DoubleSide }));
    this.originalPlane.position.set(0, 0.82, 0.45);
    this.originalPlane.rotation.x = -0.08;
    this.targetPlane.visible = false;
    this.playerPlane.visible = false;
    this.originalPlane.visible = false;
    this.group.add(this.targetPlane, this.playerPlane, this.originalPlane);

    const drawer = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.55, 0.72), makeMat(0x2a2332, { roughness: 0.78 }));
    drawer.position.set(-3.55, 0.28, 2.65);
    drawer.castShadow = true;
    drawer.receiveShadow = true;
    this.group.add(drawer);
    const drawerLabel = createCanvasLabel('서랍', { scale: 0.22, fontSize: 28 });
    drawerLabel.position.set(-3.55, 0.86, 2.65);
    this.group.add(drawerLabel);

    this.originalCard = new THREE.Group();
    const card = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.58), new THREE.MeshBasicMaterial({ map: originalTexture.clone(), side: THREE.DoubleSide }));
    card.rotation.x = -Math.PI / 2;
    this.originalCard.add(card);
    this.originalCard.position.set(-3.55, 0.61, 2.65);
    this.group.add(this.originalCard);

    this.textureMachine = createMachinePad('IMAGE SLOT', 0xef476f);
    this.textureMachine.position.set(0, 0.25, 1.28);
    this.group.add(this.textureMachine);

    const leftLabel = createCanvasLabel('TARGET TEXTURE', { scale: 0.45, fontSize: 34 });
    leftLabel.position.set(-2.45, 2.78, -0.35);
    const rightLabel = createCanvasLabel('YOUR TEXTURE', { scale: 0.45, fontSize: 34 });
    rightLabel.position.set(2.45, 2.78, -0.35);
    const originLabel = createCanvasLabel('ORIGINAL', { scale: 0.34, fontSize: 34 });
    originLabel.position.set(0, 1.55, 0.35);
    this.group.add(leftLabel, rightLabel, originLabel);

    this.addInteractable(this.originalCard, 0.78, '원본 이미지 줍기', () => this.pickOriginal());
    this.addInteractable(this.textureMachine, 0.9, 'image slot에 original image 올리기', () => this.installOriginal());
    this.game.ui.setRoom(
      '3. Texture Room',
      '서랍에 숨겨진 original image를 찾아 image slot 위에 올리세요. original image를 올리기 전에는 original, target texture, your texture가 보이지 않고 조작 패널도 잠겨 있습니다.'
    );
    this.showSearchControls();
  }

  showSearchControls() {
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Texture Machine</h3>
        <p class="small-text">서랍에서 original image card를 찾은 뒤 image slot에 올리면 original, target texture, your texture와 조작 패널이 나타납니다.</p>
        <p class="small-text">WASD로 서랍을 찾고 E로 original image를 줍습니다. image slot 앞에서 다시 E를 누르면 puzzle이 열립니다.</p>
      </div>
    `);
  }

  pickOriginal() {
    if (this.originalInstalled) return;
    this.carried = this.originalCard;
    this.originalCard.userData.carried = true;
  }

  installOriginal() {
    if (this.carried !== this.originalCard) {
      this.game.ui.showToast('original image card를 먼저 image slot으로 가져오세요.');
      return;
    }
    this.carried = null;
    this.originalInstalled = true;
    this.originalCard.visible = false;
    this.originalPlane.visible = true;
    this.targetPlane.visible = true;
    this.playerPlane.visible = true;
    this.textureLabels?.forEach((label) => { label.visible = true; });
    this.buildPuzzleControls();
  }

  buildPuzzleControls() {
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Texture Wrapping</h3>
        <div class="button-grid">
          <button id="wrapClamp" class="active">1 Clamp</button>
          <button id="wrapRepeat">2 Repeat</button>
          <button id="wrapMirror">3 Mirror</button>
        </div>
        <p class="small-text">숫자키로 wrapping 방식을 전환합니다. 1: Clamp, 2: Repeat, 3: Mirror.</p>
      </div>
      <div class="control-card">
        <h3>UV Transform</h3>
        ${this.slider('repeatX', 'Repeat X', 0.5, 4, 0.01, this.settings.repeatX)}
        ${this.slider('repeatY', 'Repeat Y', 0.5, 4, 0.01, this.settings.repeatY)}
        ${this.slider('offsetX', 'Offset X', -0.5, 0.5, 0.01, this.settings.offsetX)}
        ${this.slider('offsetY', 'Offset Y', -0.5, 0.5, 0.01, this.settings.offsetY)}
        <p class="small-text">키보드 조작: 4 Repeat X, 5 Repeat Y, 6 Offset X, 7 Offset Y 선택. 방향키 오른쪽/위는 증가, 왼쪽/아래는 감소.</p>
        <p class="small-text">목표와 거의 맞으면 통과됩니다. Mirror, Repeat X 2.60, Repeat Y 1.80, Offset X 0.18, Offset Y -0.12.</p>
      </div>
    `);
    this.listen(getEl('wrapClamp'), 'click', () => this.setWrap('ClampToEdgeWrapping'));
    this.listen(getEl('wrapRepeat'), 'click', () => this.setWrap('RepeatWrapping'));
    this.listen(getEl('wrapMirror'), 'click', () => this.setWrap('MirroredRepeatWrapping'));
    for (const id of ['repeatX', 'repeatY', 'offsetX', 'offsetY']) {
      this.listen(getEl(id), 'input', () => this.readSliders());
    }
    this.readSliders();
  }

  onKeyDown(code) {
    if (this.originalInstalled) {
      if (code === 'Digit1') this.setWrap('ClampToEdgeWrapping');
      if (code === 'Digit2') this.setWrap('RepeatWrapping');
      if (code === 'Digit3') this.setWrap('MirroredRepeatWrapping');
      if (code === 'Digit4') this.selectedTextureControl = 'repeatX';
      if (code === 'Digit5') this.selectedTextureControl = 'repeatY';
      if (code === 'Digit6') this.selectedTextureControl = 'offsetX';
      if (code === 'Digit7') this.selectedTextureControl = 'offsetY';
      if (code === 'ArrowUp' || code === 'ArrowRight') this.adjustTextureControl(1);
      if (code === 'ArrowDown' || code === 'ArrowLeft') this.adjustTextureControl(-1);
    }
    super.onKeyDown(code);
  }

  adjustTextureControl(direction) {
    const key = this.selectedTextureControl;
    const step = key.startsWith('repeat') ? 0.05 : 0.01;
    const limits = {
      repeatX: [0.5, 4],
      repeatY: [0.5, 4],
      offsetX: [-0.5, 0.5],
      offsetY: [-0.5, 0.5]
    };
    const [min, max] = limits[key];
    this.settings[key] = THREE.MathUtils.clamp(this.settings[key] + direction * step, min, max);
    const input = getEl(key);
    if (input) input.value = this.settings[key];
    const label = getEl(`${key}Val`);
    if (label) label.textContent = fmt(this.settings[key]);
    this.applyTexture();
  }

  computeScore() {
    const wrapScore = this.settings.wrapName === this.target.wrapName ? 1 : 0;
    const repeatError = Math.abs(this.settings.repeatX - this.target.repeatX) / 0.55 + Math.abs(this.settings.repeatY - this.target.repeatY) / 0.55;
    const repeatScore = clamp01(1 - repeatError / 2);
    const offsetError = Math.abs(this.settings.offsetX - this.target.offsetX) / 0.18 + Math.abs(this.settings.offsetY - this.target.offsetY) / 0.18;
    const offsetScore = clamp01(1 - offsetError / 2);
    return { wrapScore, repeatScore, offsetScore, total: wrapScore * 0.42 + repeatScore * 0.34 + offsetScore * 0.24 };
  }

  update(dt) {
    RoomBase.prototype.update.call(this, dt);
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { distance: 3.0 });
    if (!this.originalInstalled) {
      this.game.ui.updateScores([
      { label: 'Original image', value: 0, text: '숨김' },
        { label: '문 잠금', value: 0, text: '잠김' }
      ]);
      return;
    }
    const s = this.computeScore();
    this.score = s.total;
    this.game.ui.updateScores([
      { label: 'Wrapping', value: s.wrapScore, text: this.settings.wrapName.replace('Wrapping', '') },
      { label: 'Repeat', value: s.repeatScore },
      { label: 'Offset', value: s.offsetScore },
      { label: '문 잠금', value: this.score / this.escapeThreshold, text: this.score >= this.escapeThreshold ? '열림' : '잠김' }
    ]);
    if (this.score >= this.escapeThreshold) this.complete('Texture source와 transform이 목표와 일치했습니다. 다음 방으로 이동합니다.');
  }
}

function buildArm(color = 0x8fb4ff, ghost = false) {
  const root = new THREE.Group();
  const mat = makeMat(color, { roughness: 0.45, transparent: ghost, opacity: ghost ? 0.42 : 1 });
  const jointMat = makeMat(0xffffff, { roughness: 0.3, transparent: ghost, opacity: ghost ? 0.48 : 1 });

  const shoulder = new THREE.Group();
  root.add(shoulder);
  const shoulderJoint = new THREE.Mesh(new THREE.SphereGeometry(0.16, 18, 10), jointMat);
  shoulder.add(shoulderJoint);

  const upper = new THREE.Mesh(new THREE.BoxGeometry(0.32, 1.16, 0.32), mat);
  upper.position.y = 0.58;
  upper.castShadow = true;
  shoulder.add(upper);

  const elbow = new THREE.Group();
  elbow.position.y = 1.16;
  shoulder.add(elbow);
  const elbowJoint = new THREE.Mesh(new THREE.SphereGeometry(0.14, 18, 10), jointMat);
  elbow.add(elbowJoint);

  const lower = new THREE.Mesh(new THREE.BoxGeometry(0.28, 1.02, 0.28), mat);
  lower.position.y = 0.51;
  lower.castShadow = true;
  elbow.add(lower);

  const wrist = new THREE.Group();
  wrist.position.y = 1.02;
  elbow.add(wrist);
  const wristJoint = new THREE.Mesh(new THREE.SphereGeometry(0.12, 18, 10), jointMat);
  wrist.add(wristJoint);

  const hand = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.18, 0.42), mat);
  hand.position.y = 0.18;
  hand.castShadow = true;
  wrist.add(hand);

  return { root, shoulder, elbow, wrist };
}

function quatFromEulerDeg(x, y, z) {
  return new THREE.Quaternion().setFromEuler(new THREE.Euler(rad(x), rad(y), rad(z), 'XYZ')).normalize();
}

class AnimationRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.targetQ = {
      shoulder: quatFromEulerDeg(0, 0, -48),
      elbow: quatFromEulerDeg(0, 0, 76),
      wrist: quatFromEulerDeg(28, 0, -18)
    };
    this.playerQ = {
      shoulder: new THREE.Quaternion(),
      elbow: new THREE.Quaternion(),
      wrist: new THREE.Quaternion()
    };
  }

  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 2.8, 7.3), new THREE.Vector3(0, 1.2, -0.2));
    const shell = buildRoomShell(this.group, 0x46f0c8, { floorColor: 0x12191a, wallColor: 0x0f1718 });
    this.door = shell.door;
    addDefaultLights(this.group, 0x46f0c8);

    const target = buildArm(0xffd166, true);
    target.root.position.set(-2.1, 0.11, 0);
    target.shoulder.quaternion.copy(this.targetQ.shoulder);
    target.elbow.quaternion.copy(this.targetQ.elbow);
    target.wrist.quaternion.copy(this.targetQ.wrist);
    this.group.add(target.root);
    this.targetArm = target;

    const player = buildArm(0x46f0c8, false);
    player.root.position.set(2.1, 0.11, 0);
    this.group.add(player.root);
    this.playerArm = player;

    const baseMat = makeMat(0x24303b, { roughness: 0.7 });
    for (const x of [-2.1, 2.1]) {
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.62, 0.16, 32), baseMat);
      base.position.set(x, 0.04, 0);
      base.receiveShadow = true;
      this.group.add(base);
    }

    const l1 = createCanvasLabel('목표 자세', { scale: 0.43, fontSize: 34 });
    l1.position.set(-2.1, 2.95, -0.2);
    const l2 = createCanvasLabel('내 쿼터니언', { scale: 0.43, fontSize: 34 });
    l2.position.set(2.1, 2.95, -0.2);
    this.group.add(l1, l2);

    this.game.ui.setRoom(
      '4. Animation Room',
      '관절형 물체의 shoulder, elbow, wrist quaternion을 입력해 왼쪽 목표 포즈와 같게 만드세요. 입력값은 자동 normalize됩니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Quaternion Inputs: x, y, z, w</h3>
        ${this.quatInputs('shoulder')}
        ${this.quatInputs('elbow')}
        ${this.quatInputs('wrist')}
        <button id="applyQuat">Normalize & Apply</button>
      </div>
      <div class="control-card">
        <h3>Axis/Euler Helper</h3>
        <select id="jointSelect">
          <option value="shoulder">Shoulder</option>
          <option value="elbow">Elbow</option>
          <option value="wrist">Wrist</option>
        </select>
        ${this.slider('eulerX', 'Euler X°', -100, 100, 1, 0)}
        ${this.slider('eulerY', 'Euler Y°', -100, 100, 1, 0)}
        ${this.slider('eulerZ', 'Euler Z°', -120, 120, 1, 0)}
        <button id="writeEuler">Write helper quaternion to selected joint</button>
        <p class="small-text">왼쪽 포즈를 보고 Euler helper로 조정한 뒤 quaternion 칸에 써 넣는 방식으로 풀 수 있습니다.</p>
      </div>
    `);
    this.listen(getEl('applyQuat'), 'click', () => this.applyQuaternionInputs());
    this.listen(getEl('writeEuler'), 'click', () => this.writeEulerToJoint());
    for (const id of ['eulerX', 'eulerY', 'eulerZ']) {
      this.listen(getEl(id), 'input', () => getEl(`${id}Val`).textContent = getEl(id).value);
    }
    this.populateInputs();
    this.applyPlayerPose();
  }

  slider(id, label, min, max, step, value) {
    return `<div class="control-row">
      <label for="${id}">${label}</label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
      <span id="${id}Val">${value}</span>
    </div>`;
  }

  quatInputs(joint) {
    return `<div class="quat-grid">
      <label>${joint}</label>
      <input id="${joint}X" type="number" step="0.01" value="0" title="x">
      <input id="${joint}Y" type="number" step="0.01" value="0" title="y">
      <input id="${joint}Z" type="number" step="0.01" value="0" title="z">
      <input id="${joint}W" type="number" step="0.01" value="1" title="w">
    </div>`;
  }

  populateInputs() {
    for (const joint of ['shoulder', 'elbow', 'wrist']) {
      const q = this.playerQ[joint];
      getEl(`${joint}X`).value = fmt(q.x, 3);
      getEl(`${joint}Y`).value = fmt(q.y, 3);
      getEl(`${joint}Z`).value = fmt(q.z, 3);
      getEl(`${joint}W`).value = fmt(q.w, 3);
    }
  }

  applyQuaternionInputs() {
    for (const joint of ['shoulder', 'elbow', 'wrist']) {
      const q = new THREE.Quaternion(
        Number(getEl(`${joint}X`).value),
        Number(getEl(`${joint}Y`).value),
        Number(getEl(`${joint}Z`).value),
        Number(getEl(`${joint}W`).value)
      );
      if (q.lengthSq() < 0.00001) q.identity(); else q.normalize();
      this.playerQ[joint].copy(q);
    }
    this.populateInputs();
    this.applyPlayerPose();
  }

  writeEulerToJoint() {
    const joint = getEl('jointSelect').value;
    const q = quatFromEulerDeg(Number(getEl('eulerX').value), Number(getEl('eulerY').value), Number(getEl('eulerZ').value));
    this.playerQ[joint].copy(q);
    this.populateInputs();
    this.applyPlayerPose();
  }

  applyPlayerPose() {
    this.playerArm.shoulder.quaternion.copy(this.playerQ.shoulder);
    this.playerArm.elbow.quaternion.copy(this.playerQ.elbow);
    this.playerArm.wrist.quaternion.copy(this.playerQ.wrist);
  }

  computeScore() {
    const shoulder = this.playerQ.shoulder.angleTo(this.targetQ.shoulder);
    const elbow = this.playerQ.elbow.angleTo(this.targetQ.elbow);
    const wrist = this.playerQ.wrist.angleTo(this.targetQ.wrist);
    const avg = (shoulder + elbow + wrist) / 3;
    const score = clamp01(1 - avg / 1.15);
    return { shoulder, elbow, wrist, avg, score };
  }

  update(dt) {
    super.update(dt);
    const s = this.computeScore();
    this.score = s.score;
    this.targetArm.root.rotation.y = Math.sin(performance.now() * 0.00045) * 0.05;
    this.playerArm.root.rotation.y = this.targetArm.root.rotation.y;
    this.game.ui.updateScores([
      { label: 'Shoulder', value: clamp01(1 - s.shoulder / 1.2), text: `${fmt(THREE.MathUtils.radToDeg(s.shoulder), 1)}°` },
      { label: 'Elbow', value: clamp01(1 - s.elbow / 1.2), text: `${fmt(THREE.MathUtils.radToDeg(s.elbow), 1)}°` },
      { label: 'Wrist', value: clamp01(1 - s.wrist / 1.2), text: `${fmt(THREE.MathUtils.radToDeg(s.wrist), 1)}°` },
      { label: '문 잠금', value: s.score / 0.88, text: s.avg < 0.14 ? '열림' : '잠김' }
    ]);
    if (s.avg < 0.14) this.complete('Quaternion pose가 목표와 일치했습니다. GI 구역으로 이동합니다.');
  }
}

function buildClawCrane(color = 0x46f0c8) {
  const root = new THREE.Group();
  const armMat = makeMat(color, {
    roughness: 0.58,
    metalness: 0.06,
    emissive: color,
    emissiveIntensity: 0.015,
    envMapIntensity: 0.28
  });
  const jointMat = makeMat(0x9aa8b8, { roughness: 0.48, metalness: 0.1, envMapIntensity: 0.3 });
  const base = new THREE.Group();
  root.add(base);

  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.52, 0.22, 32), makeMat(0x273144, { roughness: 0.72 }));
  pedestal.position.y = 0.11;
  pedestal.castShadow = true;
  pedestal.receiveShadow = true;
  root.add(pedestal);

  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.82, 18), armMat);
  pillar.position.y = 0.55;
  base.add(pillar);

  const shoulder = new THREE.Group();
  shoulder.position.y = 0.98;
  base.add(shoulder);
  shoulder.add(new THREE.Mesh(new THREE.SphereGeometry(0.15, 18, 10), jointMat));
  const upper = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 1.22), armMat);
  upper.position.z = -0.61;
  upper.castShadow = true;
  shoulder.add(upper);

  const elbow = new THREE.Group();
  elbow.position.z = -1.22;
  shoulder.add(elbow);
  elbow.add(new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 10), jointMat));
  const lower = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 1.04), armMat);
  lower.position.z = -0.52;
  lower.castShadow = true;
  elbow.add(lower);

  const wrist = new THREE.Group();
  wrist.position.z = -1.04;
  elbow.add(wrist);
  const wristBall = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 14), jointMat);
  wristBall.castShadow = true;
  wrist.add(wristBall);
  const socketMat = makeMat(0x7f91a8, { roughness: 0.45, metalness: 0.14, envMapIntensity: 0.28 });
  const socketA = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.012, 8, 28), socketMat);
  const socketB = socketA.clone();
  socketB.rotation.y = Math.PI / 2;
  wrist.add(socketA, socketB);
  const hanger = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.06, 0.42, 14), armMat);
  hanger.rotation.x = Math.PI / 2;
  hanger.position.z = -0.24;
  hanger.castShadow = true;
  wrist.add(hanger);

  const claw = new THREE.Group();
  claw.position.z = -0.46;
  wrist.add(claw);
  const clawCore = new THREE.Mesh(new THREE.SphereGeometry(0.13, 18, 10), armMat);
  clawCore.position.y = -0.03;
  clawCore.castShadow = true;
  claw.add(clawCore);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 24), armMat);
  hub.position.y = -0.08;
  hub.castShadow = true;
  claw.add(hub);

  const hookPivots = [];
  const hookMat = makeMat(0x8fa0b4, { roughness: 0.42, metalness: 0.24, envMapIntensity: 0.3 });
  const makeRod = (from, to, radius = 0.028) => {
    const dir = to.clone().sub(from);
    const len = dir.length();
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, len, 12), hookMat);
    mesh.position.copy(from).add(to).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    mesh.castShadow = true;
    return mesh;
  };
  for (let i = 0; i < 4; i++) {
    const angle = i * Math.PI / 2;
    const mount = new THREE.Group();
    mount.position.set(Math.cos(angle) * 0.17, -0.08, Math.sin(angle) * 0.17);
    mount.rotation.y = -angle;
    claw.add(mount);

    const pivot = new THREE.Group();
    mount.add(pivot);

    const p0 = new THREE.Vector3(0, 0, 0);
    const p1 = new THREE.Vector3(0.22, -0.31, 0);
    const p2 = new THREE.Vector3(0.07, -0.58, 0);
    const p3 = new THREE.Vector3(-0.06, -0.52, 0);
    pivot.userData.collisionPoints = [p0, p1, p2, p3];
    pivot.add(makeRod(p0, p1, 0.03));
    pivot.add(makeRod(p1, p2, 0.03));
    pivot.add(makeRod(p2, p3, 0.026));

    const knuckle = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8), jointMat);
    knuckle.castShadow = true;
    pivot.add(knuckle);
    const toe = new THREE.Mesh(new THREE.SphereGeometry(0.035, 12, 8), hookMat);
    toe.position.copy(p3);
    toe.castShadow = true;
    pivot.add(toe);
    hookPivots.push(pivot);
  }

  return { root, base, shoulder, elbow, wrist, claw, clawCore, hookPivots };
}

function createDoll() {
  const root = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.34, 6, 12), makeMat(0xffd166, { roughness: 0.5 }));
  body.position.y = 0.28;
  body.castShadow = true;
  root.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 8), makeMat(0xf6c9a8, { roughness: 0.5 }));
  head.position.y = 0.58;
  head.castShadow = true;
  root.add(head);
  return root;
}

const DOLL_RADIUS = 0.17;
const DOLL_HEIGHT = 0.72;
const DOLL_GRIP_Y = 0.58;
const CLAW_GRIP_LOCAL = new THREE.Vector3(0, -0.52, 0);

function closestPointOnSegment3(point, a, b) {
  const ab = b.clone().sub(a);
  const lenSq = ab.lengthSq();
  if (lenSq < 1e-8) return a.clone();
  const t = THREE.MathUtils.clamp(point.clone().sub(a).dot(ab) / lenSq, 0, 1);
  return a.clone().addScaledVector(ab, t);
}

function segmentToVerticalCapsuleDistance(a, b, capsuleBase, height, radius = DOLL_RADIUS) {
  const capsuleA = capsuleBase.clone().add(new THREE.Vector3(0, radius, 0));
  const capsuleB = capsuleBase.clone().add(new THREE.Vector3(0, height - radius, 0));
  let best = Infinity;
  for (let i = 0; i <= 10; i++) {
    const p = a.clone().lerp(b, i / 10);
    best = Math.min(best, p.distanceTo(closestPointOnSegment3(p, capsuleA, capsuleB)));
  }
  return best;
}

function segmentIntersectsVerticalCylinder(a, b, center, radius, minY, maxY, extraRadius = 0) {
  return segmentVerticalCylinderPenetration(a, b, center, radius, minY, maxY, extraRadius) > 0;
}

function segmentVerticalCylinderPenetration(a, b, center, radius, minY, maxY, extraRadius = 0) {
  const hitRadius = radius + extraRadius;
  let penetration = 0;
  for (let i = 0; i <= 12; i++) {
    const p = a.clone().lerp(b, i / 12);
    if (p.y < minY - extraRadius || p.y > maxY + extraRadius) continue;
    penetration = Math.max(penetration, hitRadius - Math.hypot(p.x - center.x, p.z - center.z));
  }
  return penetration;
}

class CraneAnimationRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.selectedJoint = 'base';
    this.timer = 50;
    this.holdingDoll = false;
    this.dollVelocity = new THREE.Vector3();
    this.dropHeight = 1.16;
    this.joints = {
      base: -0.62,
      shoulder: 0.34,
      elbow: -0.56,
      wrist: 0.18,
      wristYaw: 0,
      claw: 0
    };
    this.dropRadius = 0.52;
    this.dropTopRadius = 0.42;
    this.dropSuccessRadius = 0.4;
  }

  enter() {
    super.enter();
    this.game.setRenderProfile({
      exposure: 0.68,
      bloomStrength: 0,
      bloomRadius: 0.08,
      bloomThreshold: 1,
      ssao: true
    });
    const craneAccent = 0x2fb09f;
    this.setupPlayer(new THREE.Vector3(0, 0, 2.9), { color: craneAccent });
    this.game.setCamera(new THREE.Vector3(0, 2.25, 5.4), new THREE.Vector3(0, 0.85, -0.5));
    const shell = buildRoomShell(this.group, craneAccent, { floorColor: 0x12191a, wallColor: 0x0f1718 });
    this.door = shell.door;
    addDefaultLights(this.group, craneAccent);

    this.arm = buildClawCrane(craneAccent);
    this.arm.root.position.set(0, 0, 1.05);
    this.group.add(this.arm.root);
    this.cameraTarget = this.player;

    this.dollStart = new THREE.Vector3(-1.45, 0, -0.7);
    this.doll = createDoll();
    this.doll.position.copy(this.dollStart);
    this.group.add(this.doll);

    const targetStand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 0.52, this.dropHeight, 30),
      makeMat(0x273144, { roughness: 0.72 })
    );
    targetStand.position.set(2.45, this.dropHeight / 2, 0.4);
    targetStand.castShadow = true;
    targetStand.receiveShadow = true;
    this.group.add(targetStand);
    this.targetPad = createMachinePad('목표 지점', 0xffd166);
    this.targetPad.position.set(2.45, this.dropHeight + 0.08, 0.4);
    this.group.add(this.targetPad);
    const title = createCanvasLabel('시간 안에 인형을 목표 지점으로 옮기세요', { scale: 0.56, fontSize: 32 });
    title.position.set(0, 2.86, -2.75);
    this.group.add(title);

    this.game.ui.setRoom(
      '4. Animation Room',
      '플레이어 시점으로 방 안을 이동하면서 로봇팔을 조종합니다. 숫자키로 관절 하나를 선택한 뒤 방향키로 선택된 관절만 움직여 인형을 목표 지점으로 옮기세요.'
    );
    this.buildJointControls();
    this.applyJointPose();
  }

  buildJointControls() {
    const names = [
      ['base', '베이스'],
      ['shoulder', '어깨'],
      ['elbow', '팔꿈치'],
      ['wrist', '손목'],
      ['claw', '집게']
    ];
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>선택 관절</h3>
        <div class="button-grid">
          ${names.map(([id, label], index) => `<button id="joint${label}" class="${this.selectedJoint === id ? 'active' : ''}">${index + 1} ${label}</button>`).join('')}
        </div>
        <p class="small-text">WASD는 플레이어 이동입니다. 1: 베이스, 2: 어깨, 3: 팔꿈치, 4: 손목 볼 관절, 5: 네 갈고리 집게. 선택한 관절만 움직입니다. 손목은 ←/→ 회전, ↑/↓ 기울이기이고 집게는 ↑로 닫고 ↓로 엽니다.</p>
      </div>
    `);
    for (const [id, label] of names) {
      this.listen(getEl(`joint${label}`), 'click', () => this.setSelectedJoint(id));
    }
  }

  setSelectedJoint(joint) {
    this.selectedJoint = joint;
    this.buildJointControls();
  }

  jointLabel(joint) {
    return {
      base: '베이스',
      shoulder: '어깨',
      elbow: '팔꿈치',
      wrist: '손목',
      claw: '집게'
    }[joint] ?? joint;
  }

  onKeyDown(code) {
    const map = { Digit1: 'base', Digit2: 'shoulder', Digit3: 'elbow', Digit4: 'wrist', Digit5: 'claw' };
    if (map[code]) this.setSelectedJoint(map[code]);
    super.onKeyDown(code);
  }

  applyJointPose() {
    this.arm.base.rotation.y = this.joints.base;
    this.arm.shoulder.rotation.x = this.joints.shoulder;
    this.arm.elbow.rotation.x = this.joints.elbow;
    this.arm.wrist.rotation.set(this.joints.wrist, this.joints.wristYaw, 0);
    const open = 1 - this.joints.claw;
    for (const pivot of this.arm.hookPivots ?? []) {
      pivot.rotation.z = lerp(-0.36, 0.32, open);
    }
  }

  updateSelectedJoint(dt) {
    const previous = { ...this.joints };
    const previousCollision = this.poseCollisionScore();
    const speed = 1.25 * dt;
    if (this.selectedJoint === 'base') {
      if (this.game.keys.has('ArrowLeft')) this.joints.base += speed;
      if (this.game.keys.has('ArrowRight')) this.joints.base -= speed;
      this.joints.base = THREE.MathUtils.clamp(this.joints.base, -1.65, 1.65);
    } else if (this.selectedJoint === 'claw') {
      if (this.game.keys.has('ArrowUp')) this.joints.claw += speed * 1.2;
      if (this.game.keys.has('ArrowDown')) this.joints.claw -= speed * 1.2;
      this.joints.claw = clamp01(this.joints.claw);
    } else if (this.selectedJoint === 'wrist') {
      const pitch = (this.game.keys.has('ArrowUp') ? 1 : 0) - (this.game.keys.has('ArrowDown') ? 1 : 0);
      const yaw = (this.game.keys.has('ArrowLeft') ? 1 : 0) - (this.game.keys.has('ArrowRight') ? 1 : 0);
      this.joints.wrist += pitch * speed;
      this.joints.wristYaw += yaw * speed;
      this.joints.wrist = THREE.MathUtils.clamp(this.joints.wrist, -0.85, 0.85);
      this.joints.wristYaw = THREE.MathUtils.clamp(this.joints.wristYaw, -0.72, 0.72);
    } else {
      const dir = (this.game.keys.has('ArrowUp') ? 1 : 0) - (this.game.keys.has('ArrowDown') ? 1 : 0);
      this.joints[this.selectedJoint] += dir * speed;
      this.joints.shoulder = THREE.MathUtils.clamp(this.joints.shoulder, -0.45, 0.85);
      this.joints.elbow = THREE.MathUtils.clamp(this.joints.elbow, -1.1, 0.65);
    }
    this.applyJointPose();
    if (!this.holdingDoll) this.tryGrabDoll({ forgiving: true });
    const nextCollision = this.poseCollisionScore();
    if (nextCollision > 0.001 && nextCollision >= previousCollision - 0.002) {
      Object.assign(this.joints, previous);
      this.applyJointPose();
    }
  }

  worldPoint(object, local = new THREE.Vector3()) {
    object.updateWorldMatrix(true, false);
    return object.localToWorld(local.clone());
  }

  clawWorldPosition() {
    this.arm.claw.updateWorldMatrix(true, false);
    return this.arm.claw.getWorldPosition(new THREE.Vector3());
  }

  clawGripWorldPosition() {
    return this.worldPoint(this.arm.claw, CLAW_GRIP_LOCAL);
  }

  dollGripWorldPosition() {
    return this.doll.position.clone().add(new THREE.Vector3(0, DOLL_GRIP_Y, 0));
  }

  targetSurfaceY() {
    return this.targetPad.position.y + 0.105;
  }

  heldDollTargetPosition() {
    const grip = this.clawGripWorldPosition();
    return new THREE.Vector3(grip.x, Math.max(0, grip.y - DOLL_GRIP_Y), grip.z);
  }

  armCollisionSegments() {
    const shoulder = this.worldPoint(this.arm.shoulder);
    const elbow = this.worldPoint(this.arm.elbow);
    const wrist = this.worldPoint(this.arm.wrist);
    const claw = this.clawWorldPosition();
    const grip = this.clawGripWorldPosition();
    const segments = [
      { a: shoulder, b: elbow, radius: 0.13, kind: 'arm' },
      { a: elbow, b: wrist, radius: 0.12, kind: 'arm' },
      { a: wrist, b: claw, radius: 0.11, kind: 'wrist' },
      { a: claw, b: grip, radius: 0.08, kind: 'clawCenter' }
    ];
    for (const pivot of this.arm.hookPivots ?? []) {
      const points = pivot.userData.collisionPoints ?? [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.22, -0.31, 0),
        new THREE.Vector3(0.07, -0.58, 0),
        new THREE.Vector3(-0.06, -0.52, 0)
      ];
      for (let i = 0; i < points.length - 1; i++) {
        segments.push({
          a: this.worldPoint(pivot, points[i]),
          b: this.worldPoint(pivot, points[i + 1]),
          radius: i === 2 ? 0.028 : 0.032,
          kind: 'claw'
        });
      }
    }
    return segments;
  }

  dollInClawCage(options = {}) {
    this.arm.claw.updateWorldMatrix(true, false);
    const localGrip = this.arm.claw.worldToLocal(this.dollGripWorldPosition().clone());
    const radial = Math.hypot(localGrip.x, localGrip.z);
    const forgiving = !!options.forgiving;
    return radial < (forgiving ? 0.64 : 0.3)
      && localGrip.y < (forgiving ? 0.16 : -0.2)
      && localGrip.y > (forgiving ? -1.08 : -0.78);
  }

  clawDollContactInfo(options = {}) {
    const forgiving = !!options.forgiving;
    const margin = forgiving ? 0.2 : 0.08;
    let nearSegments = 0;
    let minDistance = Infinity;
    let sideContact = false;
    for (const segment of this.armCollisionSegments()) {
      if (segment.kind !== 'claw') continue;
      const distance = segmentToVerticalCapsuleDistance(segment.a, segment.b, this.doll.position, DOLL_HEIGHT, DOLL_RADIUS);
      minDistance = Math.min(minDistance, distance);
      const threshold = DOLL_RADIUS + segment.radius + margin;
      if (distance < threshold) {
        nearSegments += 1;
        const mid = segment.a.clone().add(segment.b).multiplyScalar(0.5);
        const bodyY = this.doll.position.y + DOLL_HEIGHT * 0.5;
        if (Math.abs(mid.y - bodyY) < 0.52) sideContact = true;
      }
    }
    return { nearSegments, minDistance, sideContact };
  }

  armHitsDoll() {
    return this.armDollCollisionScore() > 0;
  }

  armDollCollisionScore() {
    if (this.holdingDoll) return 0;
    const cage = this.dollInClawCage();
    let score = 0;
    for (const segment of this.armCollisionSegments()) {
      if (segment.kind === 'clawCenter' && cage) continue;
      const isClaw = segment.kind === 'claw';
      const dollRadius = isClaw ? lerp(0.105, 0.135, this.joints.claw) : DOLL_RADIUS;
      const contactSlop = isClaw ? 0.012 : 0;
      const distance = segmentToVerticalCapsuleDistance(segment.a, segment.b, this.doll.position, DOLL_HEIGHT, dollRadius);
      score = Math.max(score, dollRadius + segment.radius - distance - contactSlop);
    }
    return score;
  }

  armHitsDropZone() {
    return this.armDropZoneCollisionScore() > 0;
  }

  armDropZoneCollisionScore() {
    const center = this.targetPad.position;
    const top = this.targetSurfaceY();
    let score = 0;
    for (const segment of this.armCollisionSegments()) {
      score = Math.max(score, segmentVerticalCylinderPenetration(segment.a, segment.b, center, this.dropRadius, 0, top, segment.radius));
    }
    return score;
  }

  wouldDollPenetrateEnvironment(pos) {
    if (pos.y < -0.001) return true;
    if (pos.x < ROOM_LIMITS.minX + DOLL_RADIUS || pos.x > ROOM_LIMITS.maxX - DOLL_RADIUS) return true;
    if (pos.z < ROOM_LIMITS.minZ + DOLL_RADIUS || pos.z > ROOM_LIMITS.maxZ - DOLL_RADIUS) return true;
    const center = this.targetPad.position;
    const top = this.targetSurfaceY();
    const horizontal = Math.hypot(pos.x - center.x, pos.z - center.z);
    return horizontal < this.dropRadius + DOLL_RADIUS && pos.y < top - 0.025;
  }

  poseBlockedByCollision() {
    return this.poseCollisionScore() > 0.001;
  }

  poseCollisionScore() {
    const grip = this.clawGripWorldPosition();
    let score = Math.max(0, 0.46 - grip.y) * 4;
    score += this.armDropZoneCollisionScore() * 2;
    score += this.armDollCollisionScore() * 2;
    if (this.holdingDoll && this.wouldDollPenetrateEnvironment(this.heldDollTargetPosition())) score += 1;
    return score;
  }

  failAndReset() {
    this.timer = 50;
    this.holdingDoll = false;
    this.dollVelocity.set(0, 0, 0);
    Object.assign(this.joints, { base: -0.62, shoulder: 0.34, elbow: -0.56, wrist: 0.18, wristYaw: 0, claw: 0 });
    this.doll.position.copy(this.dollStart);
    this.applyJointPose();
    this.game.ui.showToast('시간이 끝났습니다. 로봇팔을 초기화합니다.');
  }

  resolveDollEnvironment() {
    const pos = this.doll.position;
    const center = this.targetPad.position;
    const top = this.targetSurfaceY();
    let dx = pos.x - center.x;
    let dz = pos.z - center.z;
    let dist = Math.hypot(dx, dz);

    const fallingOntoPad = dist < this.dropTopRadius
      && pos.y <= top
      && pos.y > top - 0.46
      && this.dollVelocity.y <= 0;
    if (fallingOntoPad) {
      pos.y = top;
      this.dollVelocity.y = 0;
    } else if (dist < this.dropRadius + DOLL_RADIUS && pos.y < top - 0.025) {
      if (dist < 1e-4) {
        dx = 1;
        dz = 0;
        dist = 1;
      }
      const push = (this.dropRadius + DOLL_RADIUS - dist) + 0.006;
      pos.x += (dx / dist) * push;
      pos.z += (dz / dist) * push;
      this.dollVelocity.x = 0;
      this.dollVelocity.z = 0;
    }

    if (pos.y < 0) {
      pos.y = 0;
      this.dollVelocity.y = 0;
    }

    pos.x = THREE.MathUtils.clamp(pos.x, ROOM_LIMITS.minX + DOLL_RADIUS, ROOM_LIMITS.maxX - DOLL_RADIUS);
    pos.z = THREE.MathUtils.clamp(pos.z, ROOM_LIMITS.minZ + DOLL_RADIUS, ROOM_LIMITS.maxZ - DOLL_RADIUS);
  }

  tryGrabDoll(options = {}) {
    if (this.holdingDoll) return true;
    const forgiving = !!options.forgiving;
    if (this.joints.claw < (forgiving ? 0.04 : 0.42)) return false;
    const gripDistance = this.clawGripWorldPosition().distanceTo(this.dollGripWorldPosition());
    const inCage = this.dollInClawCage({ forgiving });
    const contact = this.clawDollContactInfo({ forgiving });
    const closeEnough = gripDistance < (forgiving ? 1.02 : 0.42);
    const diagonalGrab = forgiving
      && contact.sideContact
      && contact.nearSegments >= 1
      && contact.minDistance < DOLL_RADIUS + 0.24;
    const surroundedGrab = forgiving
      && contact.nearSegments >= 2
      && gripDistance < 1.24;
    if (!inCage && !closeEnough && !diagonalGrab && !surroundedGrab) return false;
    const snapped = this.heldDollTargetPosition();
    if (this.wouldDollPenetrateEnvironment(snapped)) return false;
    this.holdingDoll = true;
    this.dollVelocity.set(0, 0, 0);
    this.doll.position.copy(snapped);
    return true;
  }

  dollOnDropZone() {
    const center = this.targetPad.position;
    const top = this.targetSurfaceY();
    const horizontal = Math.hypot(this.doll.position.x - center.x, this.doll.position.z - center.z);
    return horizontal < this.dropSuccessRadius && Math.abs(this.doll.position.y - top) < 0.08;
  }

  dollCrossedDropZone(previousPos, currentPos) {
    const center = this.targetPad.position;
    const top = this.targetSurfaceY();
    if (previousPos.y < top || currentPos.y > top) return false;
    const dy = currentPos.y - previousPos.y;
    const t = Math.abs(dy) < 0.00001 ? 0 : THREE.MathUtils.clamp((top - previousPos.y) / dy, 0, 1);
    const x = lerp(previousPos.x, currentPos.x, t);
    const z = lerp(previousPos.z, currentPos.z, t);
    return Math.hypot(x - center.x, z - center.z) < this.dropSuccessRadius;
  }

  completeDollDrop() {
    this.doll.position.set(this.targetPad.position.x, this.targetSurfaceY(), this.targetPad.position.z);
    this.dollVelocity.set(0, 0, 0);
    this.complete('claw가 시간 안에 인형을 옮겼습니다. GI room으로 이동합니다.');
  }

  updateDoll(dt) {
    this.tryGrabDoll({ forgiving: true });
    if (this.holdingDoll) {
      const targetPos = this.heldDollTargetPosition();
      if (!this.wouldDollPenetrateEnvironment(targetPos)) this.doll.position.copy(targetPos);
      if (this.joints.claw < 0.08) {
        this.holdingDoll = false;
        this.dollVelocity.set(0, 0, 0);
        this.resolveDollEnvironment();
        if (this.dollOnDropZone()) {
          this.completeDollDrop();
        }
      }
    } else {
      const previousPos = this.doll.position.clone();
      this.dollVelocity.y -= 5.8 * dt;
      this.doll.position.addScaledVector(this.dollVelocity, dt);
      this.resolveDollEnvironment();
      if (this.dollOnDropZone() || this.dollCrossedDropZone(previousPos, this.doll.position)) {
        this.completeDollDrop();
      }
    }
  }

  update(dt) {
    super.update(dt);
    this.updatePlayer(dt);
    if (!this.solved) {
      this.timer -= dt;
      if (this.timer <= 0) this.failAndReset();
    }
    this.updateSelectedJoint(dt);
    this.updateDoll(dt);
    this.updateFollowCamera(dt, this.player, { eyeHeight: 1.18 });
    const clawPos = this.clawGripWorldPosition();
    const dollDist = clawPos.distanceTo(this.dollGripWorldPosition());
    const targetCenter = new THREE.Vector3(this.targetPad.position.x, this.targetSurfaceY(), this.targetPad.position.z);
    const targetDist = this.doll.position.distanceTo(targetCenter);
    this.game.ui.updateScores([
      { label: '남은 시간', value: this.timer / 50, text: `${Math.ceil(this.timer)}초`, bad: this.timer < 12 },
      { label: '선택 관절', value: 1, text: this.jointLabel(this.selectedJoint) },
      { label: '집게', value: this.joints.claw, text: this.holdingDoll ? '잡음' : `${Math.round(this.joints.claw * 100)}%` },
      { label: '인형 거리', value: clamp01(1 - dollDist / 1.4), text: `${fmt(dollDist, 2)}m` },
      { label: '목표 거리', value: clamp01(1 - targetDist / 2.1), text: `${fmt(targetDist, 2)}m` }
    ]);
  }
}

function segmentIntersectsAabb(a, b, box) {
  const dir = b.clone().sub(a);
  let tMin = 0;
  let tMax = 1;
  const axes = [
    ['x', box.minX, box.maxX],
    ['y', box.minY, box.maxY],
    ['z', box.minZ, box.maxZ]
  ];
  for (const [axis, min, max] of axes) {
    const start = a[axis];
    const d = dir[axis];
    if (Math.abs(d) < 1e-6) {
      if (start < min || start > max) return false;
    } else {
      const ood = 1 / d;
      let t1 = (min - start) * ood;
      let t2 = (max - start) * ood;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tMin = Math.max(tMin, t1);
      tMax = Math.min(tMax, t2);
      if (tMin > tMax) return false;
    }
  }
  return true;
}

function segmentIntersectsThinWall(a, b) {
  const boxes = [
    // Large GI hide-and-seek occluder.
    { minX: -0.18, maxX: 1.08, minY: 0, maxY: 4.35, minZ: -4.6, maxZ: 2.95 }
  ];
  return boxes.some((box) => segmentIntersectsAabb(a, b, box));
}

function goldenSphereDirections(count) {
  const directions = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(1, count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    directions.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).normalize());
  }
  return directions;
}

function shBasis9(dir) {
  const x = dir.x;
  const y = dir.y;
  const z = dir.z;
  return [
    0.282095,
    0.488603 * y,
    0.488603 * z,
    0.488603 * x,
    1.092548 * x * y,
    1.092548 * y * z,
    0.315392 * (3 * z * z - 1),
    1.092548 * x * z,
    0.546274 * (x * x - y * y)
  ];
}

function createScalarSH() {
  return new Array(9).fill(0);
}

function addScalarSH(coeffs, dir, value, weight = 1) {
  const basis = shBasis9(dir);
  for (let i = 0; i < coeffs.length; i++) coeffs[i] += value * basis[i] * weight;
}

function sampleScalarSH(coeffs, dir) {
  const basis = shBasis9(dir);
  let value = 0;
  for (let i = 0; i < coeffs.length; i++) value += coeffs[i] * basis[i];
  return Math.max(0, value);
}

function addCinematicGISetDressing(group, bounds, accent = 0x46f0c8) {
  const fx = { strips: [], particles: null, rings: [], static: true };
  const accentMat = makeMat(accent, {
    roughness: 0.28,
    metalness: 0.18,
    emissive: accent,
    emissiveIntensity: 0.28
  });
  const darkMetal = makeMat(0x1a2330, { roughness: 0.38, metalness: 0.32 });
  const glassMat = makeMat(0x91a6bd, {
    roughness: 0.12,
    metalness: 0.08,
    transparent: true,
    opacity: 0.28,
    emissive: accent,
    emissiveIntensity: 0.05
  });

  for (const z of [-10.8, -5.4, 0, 5.4, 10.8]) {
    const strip = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.045, 0.09), accentMat.clone());
    strip.position.set(-6.0, bounds.maxY - 0.28, z);
    strip.castShadow = false;
    strip.receiveShadow = false;
    group.add(strip);
    fx.strips.push(strip);

    const stripB = strip.clone();
    stripB.material = accentMat.clone();
    stripB.position.x = 6.0;
    group.add(stripB);
    fx.strips.push(stripB);
  }

  for (const x of [-13.2, -8.8, -4.4, 4.4, 8.8, 13.2]) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(2.1, 1.1, 0.05), glassMat.clone());
    panel.position.set(x, 3.2, bounds.minZ + 0.33);
    panel.castShadow = false;
    group.add(panel);
    fx.strips.push(panel);

    const back = panel.clone();
    back.material = glassMat.clone();
    back.position.z = bounds.maxZ - 0.2;
    back.rotation.y = Math.PI;
    group.add(back);
    fx.strips.push(back);
  }

  for (const x of [-11.5, 0, 11.5]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.56, 0.018, 10, 44), accentMat.clone());
    ring.position.set(x, bounds.maxY - 0.7, -0.2);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    fx.rings.push(ring);
    const core = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.34, 18), darkMetal);
    core.position.copy(ring.position);
    core.rotation.x = Math.PI / 2;
    core.castShadow = true;
    group.add(core);
  }

  const particleCount = 80;
  if (particleCount > 0) {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = lerp(bounds.minX + 1.0, bounds.maxX - 1.0, Math.random());
      positions[i * 3 + 1] = lerp(0.55, bounds.maxY - 0.45, Math.random());
      positions[i * 3 + 2] = lerp(bounds.minZ + 1.0, bounds.maxZ - 1.0, Math.random());
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeo,
      new THREE.PointsMaterial({
        color: accent,
        size: 0.035,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    particles.renderOrder = 12;
    group.add(particles);
    fx.particles = particles;
  }

  return fx;
}

function animateFlyingMonster(enemy, dt, time) {
  const visual = enemy.userData.monsterVisual;
  if (!visual) {
    const reveal = enemy.userData.reveal ?? 0;
    enemy.rotation.y += dt * (0.5 + reveal * 0.8);
    enemy.position.y += Math.sin(time * 2.2 + (enemy.userData.enemyPhase ?? 0)) * dt * 0.08;
    return;
  }
  const reveal = enemy.userData.reveal ?? 0;
  const phase = time * 5.2 + visual.seed;
  visual.body.rotation.y = Math.sin(time * 1.6 + visual.seed) * 0.18;
  visual.chest.rotation.z = Math.sin(time * 2.3 + visual.seed) * 0.08;
  visual.head.rotation.x = Math.sin(time * 2.8 + visual.seed) * 0.1;
  visual.head.rotation.y = Math.sin(time * 2.1 + visual.seed) * 0.16;
  visual.wings.forEach((wing, index) => {
    const side = index === 0 ? -1 : 1;
    wing.rotation.z = side * (0.32 + Math.sin(phase) * 0.48);
    wing.rotation.y = side * (0.18 + Math.cos(phase * 0.7) * 0.12);
  });
  visual.tentacles.forEach((tentacle, index) => {
    tentacle.rotation.x = Math.sin(time * 2.0 + visual.seed + index) * 0.18;
    tentacle.rotation.z = Math.cos(time * 1.7 + visual.seed + index) * 0.14;
  });
  enemy.position.y += Math.sin(time * 3.1 + visual.seed) * dt * 0.18;
  enemy.scale.setScalar(0.92 + reveal * 0.18 + Math.sin(time * 4.5 + visual.seed) * 0.015);
}

function buildGIChamber(group, accent = 0x46f0c8) {
  const shell = buildRoomShell(group, accent, { floorColor: 0x141821, wallColor: 0x121622 });
  addDefaultLights(group, accent);

  const redWall = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.7, 5.8), makeMat(0x8f1d2d, { roughness: 0.8 }));
  redWall.position.set(-3.85, 1.35, -0.15);
  redWall.receiveShadow = true;
  group.add(redWall);
  const blueWall = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.7, 5.8), makeMat(0x1b4fa3, { roughness: 0.8 }));
  blueWall.position.set(3.85, 1.35, -0.15);
  blueWall.receiveShadow = true;
  group.add(blueWall);
  const thinWall = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.3, 2.7), makeMat(0xdbe4f6, { roughness: 0.7 }));
  thinWall.position.set(0.18, 1.15, -0.55);
  thinWall.castShadow = true;
  thinWall.receiveShadow = true;
  group.add(thinWall);

  const lightSphere = new THREE.Mesh(new THREE.SphereGeometry(0.16, 18, 12), makeMat(0xff5c5c, { emissive: 0xff2a2a, emissiveIntensity: 0.42 }));
  lightSphere.position.set(-3.15, 2.1, 1.15);
  group.add(lightSphere);
  const redLight = new THREE.PointLight(0xff5555, 0.82, 7, 2);
  redLight.position.copy(lightSphere.position);
  group.add(redLight);

  const testA = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 10), makeMat(0xffffff, { roughness: 0.35 }));
  testA.position.set(-2.35, 0.28, 0.2);
  testA.userData.label = 'colorBleedSample';
  group.add(testA);
  const testB = new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 10), makeMat(0xffffff, { roughness: 0.35 }));
  testB.position.set(1.45, 0.28, -1.28);
  testB.userData.label = 'leakSample';
  group.add(testB);

  const labels = [
    ['red color bleed sample', -2.35, 0.74, 0.2],
    ['dark leak test', 1.45, 0.74, -1.28]
  ];
  for (const [txt, x, y, z] of labels) {
    const label = createCanvasLabel(txt, { scale: 0.25, fontSize: 30 });
    label.position.set(x, y, z);
    group.add(label);
  }

  return { ...shell, redWall, blueWall, thinWall, lightSphere, redLight, testA, testB };
}

class DDGIRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.settings = {
      spacing: 1.75,
      visibilityBias: 0.3,
      normalBias: 0.16,
      hysteresis: 0.72,
      intensity: 1.05
    };
    this.probes = [];
    this.probeMesh = null;
    this.lastSpacing = null;
  }

  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 3.4, 7.8), new THREE.Vector3(0, 1.1, -0.7));
    const chamber = buildGIChamber(this.group, 0xff8fab);
    this.door = chamber.door;
    this.testA = chamber.testA;
    this.testB = chamber.testB;

    const title = createCanvasLabel('DDGI LOCK\nprobe grid + visibility bias', { scale: 0.7, fontSize: 32 });
    title.position.set(0, 3.0, -2.75);
    this.group.add(title);

    this.game.ui.setRoom(
      '5. DDGI Room',
      'Dynamic Diffuse GI 느낌의 probe grid를 조절하세요. 빨간 벽의 color bleeding은 살리고, 얇은 벽 뒤 dark sample로 빛이 새면 안 됩니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>DDGI Probe Settings</h3>
        ${this.slider('ddgiSpacing', 'Probe spacing', 1.05, 2.8, 0.05, this.settings.spacing)}
        ${this.slider('ddgiVis', 'Visibility bias', 0.05, 0.8, 0.01, this.settings.visibilityBias)}
        ${this.slider('ddgiNormal', 'Normal bias', 0, 0.45, 0.01, this.settings.normalBias)}
        ${this.slider('ddgiHys', 'Hysteresis', 0.2, 0.95, 0.01, this.settings.hysteresis)}
        ${this.slider('ddgiInt', 'Indirect power', 0.4, 1.8, 0.01, this.settings.intensity)}
        <p class="small-text">너무 넓은 spacing이나 큰 visibility bias는 벽 너머 leak을 만듭니다. 너무 촘촘하면 probe budget이 초과됩니다.</p>
      </div>
    `);
    for (const id of ['ddgiSpacing', 'ddgiVis', 'ddgiNormal', 'ddgiHys', 'ddgiInt']) {
      this.listen(getEl(id), 'input', () => this.readSliders());
    }
    this.readSliders();
    this.rebuildProbes();
  }

  slider(id, label, min, max, step, value) {
    return `<div class="control-row">
      <label for="${id}">${label}</label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
      <span id="${id}Val">${fmt(value)}</span>
    </div>`;
  }

  readSliders() {
    this.settings.spacing = Number(getEl('ddgiSpacing').value);
    this.settings.visibilityBias = Number(getEl('ddgiVis').value);
    this.settings.normalBias = Number(getEl('ddgiNormal').value);
    this.settings.hysteresis = Number(getEl('ddgiHys').value);
    this.settings.intensity = Number(getEl('ddgiInt').value);
    const map = { ddgiSpacing: 'spacing', ddgiVis: 'visibilityBias', ddgiNormal: 'normalBias', ddgiHys: 'hysteresis', ddgiInt: 'intensity' };
    for (const [id, key] of Object.entries(map)) getEl(`${id}Val`).textContent = fmt(this.settings[key]);
    if (Math.abs((this.lastSpacing ?? 999) - this.settings.spacing) > 0.035) this.rebuildProbes();
  }

  computeProbeColor(pos) {
    const redSource = new THREE.Vector3(-3.65, 1.25, 1.15);
    const blueSource = new THREE.Vector3(3.65, 1.2, 1.35);
    const redBlocked = segmentIntersectsThinWall(redSource, pos);
    const blueBlocked = segmentIntersectsThinWall(blueSource, pos);
    const redAmount = redBlocked ? 0.08 : clamp01(1 - redSource.distanceTo(pos) / 6.8);
    const blueAmount = blueBlocked ? 0.04 : clamp01(1 - blueSource.distanceTo(pos) / 7.2) * 0.45;
    return new THREE.Color(redAmount * 0.9, 0.08 + blueAmount * 0.1, blueAmount * 0.9);
  }

  rebuildProbes() {
    if (!this.group) return;
    if (this.probeMesh) {
      this.group.remove(this.probeMesh);
      disposeObject(this.probeMesh);
      this.probeMesh = null;
    }
    this.lastSpacing = this.settings.spacing;
    this.probes = [];
    const xs = [];
    const ys = [];
    const zs = [];
    for (let x = -3.2; x <= 3.21; x += this.settings.spacing) xs.push(x);
    for (let y = 0.55; y <= 2.35; y += this.settings.spacing) ys.push(y);
    for (let z = -2.45; z <= 2.36; z += this.settings.spacing) zs.push(z);
    for (const x of xs) for (const y of ys) for (const z of zs) {
      const pos = new THREE.Vector3(x, y, z);
      this.probes.push({ pos, color: this.computeProbeColor(pos) });
    }
    const geo = new THREE.SphereGeometry(0.065, 10, 6);
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.92 });
    this.probeMesh = new THREE.InstancedMesh(geo, mat, this.probes.length);
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < this.probes.length; i++) {
      matrix.makeTranslation(this.probes[i].pos.x, this.probes[i].pos.y, this.probes[i].pos.z);
      this.probeMesh.setMatrixAt(i, matrix);
      this.probeMesh.setColorAt(i, this.probes[i].color);
    }
    this.probeMesh.instanceMatrix.needsUpdate = true;
    if (this.probeMesh.instanceColor) this.probeMesh.instanceColor.needsUpdate = true;
    this.group.add(this.probeMesh);
  }

  sampleIndirect(point) {
    const nearest = [...this.probes]
      .sort((a, b) => a.pos.distanceToSquared(point) - b.pos.distanceToSquared(point))
      .slice(0, 6);
    const result = new THREE.Color(0, 0, 0);
    let total = 0;
    for (const probe of nearest) {
      const blocked = segmentIntersectsThinWall(point, probe.pos);
      const leakAllowance = clamp01((this.settings.visibilityBias - 0.42) / 0.35 + this.settings.normalBias * 0.45);
      if (blocked && leakAllowance < 0.18) continue;
      const distSq = Math.max(0.08, point.distanceToSquared(probe.pos));
      let weight = 1 / distSq;
      if (blocked) weight *= leakAllowance;
      result.add(probe.color.clone().multiplyScalar(weight));
      total += weight;
    }
    if (total > 0) result.multiplyScalar(1 / total);
    return result.multiplyScalar(this.settings.intensity);
  }

  metrics() {
    const redSample = this.sampleIndirect(new THREE.Vector3(-2.35, 0.28, 0.2));
    const leakSample = this.sampleIndirect(new THREE.Vector3(1.45, 0.28, -1.28));
    const redBleedScore = clamp01(1 - Math.abs(redSample.r - 0.42) / 0.42);
    const leakRaw = clamp01(leakSample.r / 0.28);
    const leakScore = 1 - leakRaw;
    const probeBudget = clamp01(1 - this.probes.length / 95);
    const stability = clamp01(1 - Math.abs(this.settings.hysteresis - 0.72) / 0.45);
    const total = redBleedScore * 0.34 + leakScore * 0.34 + probeBudget * 0.2 + stability * 0.12;
    return { redSample, leakSample, redBleedScore, leakScore, probeBudget, stability, total, leakRaw };
  }

  update(dt) {
    super.update(dt);
    const m = this.metrics();
    this.score = m.total;
    this.testA.material.emissive.copy(m.redSample);
    this.testA.material.emissiveIntensity = 0.28;
    this.testB.material.emissive.setRGB(m.leakSample.r, 0.02, 0.02);
    this.testB.material.emissiveIntensity = 0.32;
    this.game.ui.updateScores([
      { label: 'Color bleeding', value: m.redBleedScore },
      { label: 'Leak blocked', value: m.leakScore, text: `${Math.round(m.leakRaw * 100)}% leak`, bad: m.leakRaw > 0.45 },
      { label: 'Probe budget', value: m.probeBudget, text: `${this.probes.length} probes` },
      { label: 'Stability', value: m.stability },
      { label: '문 잠금', value: this.score / 0.82, text: this.score >= 0.82 ? '열림' : '잠김' }
    ]);
    if (this.score >= 0.82) this.complete('DDGI probe lock이 해제되었습니다. Surfel GI 방으로 이동합니다.');
  }
}

class SurfelGIRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.radius = 0.62;
    this.flipNormal = false;
    this.attachDynamic = true;
    this.surfels = [];
    this.clickable = [];
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
  }

  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 3.2, 7.5), new THREE.Vector3(0, 1.1, -0.55));
    const shell = buildRoomShell(this.group, 0x46f0c8, { floorColor: 0x11191a, wallColor: 0x0f1517 });
    this.door = shell.door;
    addDefaultLights(this.group, 0x46f0c8);

    this.buildSurfelScene();
    const title = createCanvasLabel('SURFEL GI LOCK\nclick surfaces to cache indirect light', { scale: 0.66, fontSize: 32 });
    title.position.set(0, 3.05, -2.85);
    this.group.add(title);

    this.game.ui.setRoom(
      '6. Surfel GI Room',
      '표면에 surfel을 배치해 간접광 캐시를 만드세요. red wall, blue wall, moving arm, floor zone을 모두 커버해야 하며 radius가 너무 크면 leak, 동적 물체에 attach하지 않으면 ghosting이 발생합니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Surfel Brush</h3>
        ${this.slider('surfelRadius', 'Radius', 0.2, 1.35, 0.01, this.radius)}
        <label class="checkbox-row"><input id="normalFlip" type="checkbox"> Normal Flip</label>
        <label class="checkbox-row"><input id="attachDyn" type="checkbox" checked> Attach to dynamic object</label>
        <div class="button-grid">
          <button id="clearSurfels" class="danger">초기화</button>
          <button id="autoBad">Bad demo</button>
          <button id="autoGood">Good pattern</button>
        </div>
        <p class="small-text">3D 화면에서 색 벽, 바닥 zone, 움직이는 팔을 클릭하면 surfel이 붙습니다. Good pattern은 시연/테스트용 자동 배치입니다.</p>
      </div>
    `);
    this.listen(getEl('surfelRadius'), 'input', () => {
      this.radius = Number(getEl('surfelRadius').value);
      getEl('surfelRadiusVal').textContent = fmt(this.radius);
    });
    this.listen(getEl('normalFlip'), 'change', () => this.flipNormal = getEl('normalFlip').checked);
    this.listen(getEl('attachDyn'), 'change', () => this.attachDynamic = getEl('attachDyn').checked);
    this.listen(getEl('clearSurfels'), 'click', () => this.clearSurfels());
    this.listen(getEl('autoBad'), 'click', () => this.autoBad());
    this.listen(getEl('autoGood'), 'click', () => this.autoGood());
    this.listen(this.game.renderer.domElement, 'pointerdown', (e) => this.onPointerDown(e));
  }

  slider(id, label, min, max, step, value) {
    return `<div class="control-row">
      <label for="${id}">${label}</label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
      <span id="${id}Val">${fmt(value)}</span>
    </div>`;
  }

  buildSurfelScene() {
    const redMat = makeMat(0x9d1f2c, { roughness: 0.8 });
    const blueMat = makeMat(0x1c58b6, { roughness: 0.8 });
    const floorMat = makeMat(0xd5dfef, { roughness: 0.76 });

    const red = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.45, 2.7), redMat);
    red.position.set(-3.0, 1.25, -0.35);
    red.userData.surfelZone = 'redWall';
    red.userData.surfelColor = new THREE.Color(0.85, 0.1, 0.08);
    this.group.add(red);
    const blue = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.45, 2.7), blueMat);
    blue.position.set(3.0, 1.25, -0.35);
    blue.userData.surfelZone = 'blueWall';
    blue.userData.surfelColor = new THREE.Color(0.08, 0.18, 0.88);
    this.group.add(blue);
    const floorZone = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.045, 2.1), floorMat);
    floorZone.position.set(0, 0.03, 0.55);
    floorZone.userData.surfelZone = 'floorZone';
    floorZone.userData.surfelColor = new THREE.Color(0.45, 0.44, 0.37);
    this.group.add(floorZone);

    this.dynamicRoot = new THREE.Group();
    this.dynamicRoot.position.set(0, 1.1, -0.35);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.35, 0.35), makeMat(0xf2f5ff, { roughness: 0.46 }));
    arm.position.y = 0.65;
    arm.userData.surfelZone = 'movingArm';
    arm.userData.surfelColor = new THREE.Color(0.65, 0.24, 0.22);
    arm.userData.dynamic = true;
    this.dynamicRoot.add(arm);
    this.group.add(this.dynamicRoot);
    this.dynamicMesh = arm;

    this.clickable = [red, blue, floorZone, arm];
    for (const [txt, x, y, z] of [
      ['red wall', -3, 2.75, -0.35],
      ['blue wall', 3, 2.75, -0.35],
      ['floor zone', 0, 0.45, 1.7],
      ['moving arm', 0, 2.65, -0.35]
    ]) {
      const label = createCanvasLabel(txt, { scale: 0.25, fontSize: 30 });
      label.position.set(x, y, z);
      this.group.add(label);
    }
  }

  onPointerDown(event) {
    if (event.target !== this.game.renderer.domElement) return;
    const rect = this.game.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.game.camera);
    const hits = this.raycaster.intersectObjects(this.clickable, false);
    if (hits.length === 0) return;
    const hit = hits[0];
    const zone = hit.object.userData.surfelZone;
    if (!zone) return;
    const worldNormal = hit.face.normal.clone().transformDirection(hit.object.matrixWorld).normalize();
    const normal = this.flipNormal ? worldNormal.clone().negate() : worldNormal;
    this.addSurfel(hit.point, normal, this.radius, hit.object.userData.surfelColor, hit.object, zone, this.attachDynamic && hit.object.userData.dynamic, this.flipNormal);
  }

  addSurfel(point, normal, radius, color, object, zone, attached, flipped = false) {
    if (this.surfels.length >= 90) return;
    const geo = new THREE.CircleGeometry(1, 24);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.64, side: THREE.DoubleSide, depthWrite: false });
    const disc = new THREE.Mesh(geo, mat);
    disc.scale.set(radius, radius, radius);
    disc.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal.clone().normalize());
    disc.position.copy(point).add(normal.clone().multiplyScalar(0.025));
    disc.renderOrder = 4;
    const surfel = { point: point.clone(), normal: normal.clone(), radius, color: color.clone(), object, zone, attached, flipped, disc };
    if (attached) {
      object.updateMatrixWorld(true);
      object.attach(disc);
      surfel.localPoint = object.worldToLocal(point.clone());
    } else {
      this.group.add(disc);
    }
    this.surfels.push(surfel);
  }

  clearSurfels() {
    for (const surfel of this.surfels) {
      surfel.disc.parent?.remove(surfel.disc);
      disposeObject(surfel.disc);
    }
    this.surfels = [];
  }

  autoBad() {
    this.clearSurfels();
    const oldRadius = this.radius;
    this.radius = 1.25;
    this.addSurfel(new THREE.Vector3(-2.94, 1.2, -0.35), new THREE.Vector3(1, 0, 0).negate(), this.radius, new THREE.Color(0.85, 0.1, 0.08), this.clickable[0], 'redWall', false, true);
    this.addSurfel(new THREE.Vector3(3.0, 1.2, -0.35), new THREE.Vector3(-1, 0, 0), this.radius, new THREE.Color(0.08, 0.18, 0.88), this.clickable[1], 'blueWall', false, false);
    this.radius = oldRadius;
  }

  autoGood() {
    this.clearSurfels();
    const r = 0.62;
    this.addSurfel(new THREE.Vector3(-2.94, 1.15, -0.35), new THREE.Vector3(1, 0, 0), r, new THREE.Color(0.85, 0.1, 0.08), this.clickable[0], 'redWall', false, false);
    this.addSurfel(new THREE.Vector3(2.94, 1.15, -0.35), new THREE.Vector3(-1, 0, 0), r, new THREE.Color(0.08, 0.18, 0.88), this.clickable[1], 'blueWall', false, false);
    this.addSurfel(new THREE.Vector3(0, 0.075, 0.55), new THREE.Vector3(0, 1, 0), r, new THREE.Color(0.45, 0.44, 0.37), this.clickable[2], 'floorZone', false, false);
    this.addSurfel(this.dynamicMesh.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0.35, 0.18)), new THREE.Vector3(0, 0, 1), r, new THREE.Color(0.65, 0.24, 0.22), this.dynamicMesh, 'movingArm', true, false);
  }

  metrics() {
    const required = ['redWall', 'blueWall', 'floorZone', 'movingArm'];
    let covered = 0;
    for (const zone of required) {
      const ok = this.surfels.some((s) => s.zone === zone && !s.flipped && s.radius >= 0.36 && s.radius <= 0.95);
      if (ok) covered++;
    }
    const coverage = covered / required.length;
    const flippedPenalty = this.surfels.length === 0 ? 0.3 : this.surfels.filter((s) => s.flipped).length / Math.max(1, this.surfels.length);
    const leakRaw = clamp01(this.surfels.reduce((acc, s) => acc + Math.max(0, s.radius - 0.9), 0) / 1.2 + flippedPenalty * 0.3);
    const movingSurfels = this.surfels.filter((s) => s.zone === 'movingArm');
    const ghostRaw = movingSurfels.length === 0 ? 0.55 : movingSurfels.some((s) => s.attached) ? 0 : 0.9;
    const budget = clamp01(1 - this.surfels.length / 90);
    const countQuality = clamp01(this.surfels.length / 4);
    const total = coverage * 0.36 + (1 - leakRaw) * 0.22 + (1 - ghostRaw) * 0.24 + budget * 0.08 + countQuality * 0.1;
    return { coverage, leakRaw, ghostRaw, budget, countQuality, total, covered };
  }

  update(dt) {
    super.update(dt);
    this.dynamicRoot.rotation.z = Math.sin(performance.now() * 0.0012) * 0.55;
    const m = this.metrics();
    this.score = m.total;
    this.game.ui.updateScores([
      { label: 'Coverage', value: m.coverage, text: `${m.covered}/4 zones` },
      { label: 'Leak safe', value: 1 - m.leakRaw, text: `${Math.round(m.leakRaw * 100)}% leak`, bad: m.leakRaw > 0.45 },
      { label: 'Ghosting', value: 1 - m.ghostRaw, text: `${Math.round(m.ghostRaw * 100)}% ghost`, bad: m.ghostRaw > 0.45 },
      { label: 'Budget', value: m.budget, text: `${this.surfels.length}/90` },
      { label: '문 잠금', value: this.score / 0.82, text: this.score >= 0.82 ? '열림' : '잠김' }
    ]);
    if (this.score >= 0.82) this.complete('Surfel GI lock이 해제되었습니다. 모든 GI 방을 통과했습니다.');
  }

  dispose() {
    this.clearSurfels();
    super.dispose();
  }
}

class VoxelGIRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.settings = {
      resolution: 16,
      coneAperture: 0.66,
      wallThickness: 1,
      iterations: 2,
      intensity: 1.0
    };
    this.voxelMesh = null;
  }

  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 4.1, 7.9), new THREE.Vector3(0, 1.0, -0.8));
    const chamber = buildGIChamber(this.group, 0xb388ff);
    this.door = chamber.door;
    const title = createCanvasLabel('VOXEL GI LOCK\nresolution + cone tracing budget', { scale: 0.68, fontSize: 32 });
    title.position.set(0, 3.05, -2.75);
    this.group.add(title);

    this.game.ui.setRoom(
      '7. Voxel GI Room',
      '장면을 voxel field로 근사하고 cone tracing 파라미터를 맞추세요. 낮은 resolution은 얇은 벽을 놓쳐 leak이 생기고, 너무 높은 resolution은 memory budget을 초과합니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Voxel Resolution</h3>
        <div class="button-grid">
          <button id="res16" class="active">16³</button>
          <button id="res32">32³</button>
          <button id="res64">64³</button>
        </div>
      </div>
      <div class="control-card">
        <h3>Cone / Propagation</h3>
        ${this.slider('coneAperture', 'Cone aperture', 0.16, 0.9, 0.01, this.settings.coneAperture)}
        ${this.slider('wallThickness', 'Wall thickness', 1, 3, 1, this.settings.wallThickness)}
        ${this.slider('iterations', 'Iterations', 1, 5, 1, this.settings.iterations)}
        ${this.slider('voxelIntensity', 'Indirect power', 0.5, 1.5, 0.01, this.settings.intensity)}
        <p class="small-text">권장 타협점: 32³, cone≈0.45, thickness=2, iterations=3 근처.</p>
      </div>
    `);
    this.listen(getEl('res16'), 'click', () => this.setResolution(16));
    this.listen(getEl('res32'), 'click', () => this.setResolution(32));
    this.listen(getEl('res64'), 'click', () => this.setResolution(64));
    for (const id of ['coneAperture', 'wallThickness', 'iterations', 'voxelIntensity']) {
      this.listen(getEl(id), 'input', () => this.readSliders());
    }
    this.rebuildVoxelView();
    this.readSliders();
  }

  slider(id, label, min, max, step, value) {
    return `<div class="control-row">
      <label for="${id}">${label}</label>
      <input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${value}">
      <span id="${id}Val">${fmt(value)}</span>
    </div>`;
  }

  setResolution(res) {
    this.settings.resolution = res;
    for (const r of [16, 32, 64]) getEl(`res${r}`)?.classList.toggle('active', r === res);
    this.rebuildVoxelView();
  }

  readSliders() {
    this.settings.coneAperture = Number(getEl('coneAperture').value);
    this.settings.wallThickness = Number(getEl('wallThickness').value);
    this.settings.iterations = Number(getEl('iterations').value);
    this.settings.intensity = Number(getEl('voxelIntensity').value);
    const map = { coneAperture: 'coneAperture', wallThickness: 'wallThickness', iterations: 'iterations', voxelIntensity: 'intensity' };
    for (const [id, key] of Object.entries(map)) getEl(`${id}Val`).textContent = fmt(this.settings[key]);
    this.updateVoxelColors();
  }

  voxelMetrics() {
    const res = this.settings.resolution;
    const wallCapture = clamp01((res / 32) * (this.settings.wallThickness / 1.45));
    const leakRaw = clamp01((1 - wallCapture) * 0.68 + Math.max(0, this.settings.coneAperture - 0.42) * 0.62 - (this.settings.wallThickness - 1) * 0.1);
    const brightness = clamp01((0.34 + this.settings.coneAperture * 0.58 + this.settings.iterations * 0.08) * this.settings.intensity);
    const smoothness = clamp01(1 - Math.abs(this.settings.coneAperture - 0.45) / 0.55 - Math.abs(this.settings.iterations - 3) * 0.11);
    const memoryCost = Math.pow(res / 32, 3) * 45;
    const budget = clamp01(1 - memoryCost / 100);
    const total = brightness * 0.25 + (1 - leakRaw) * 0.35 + smoothness * 0.2 + budget * 0.2;
    return { wallCapture, leakRaw, brightness, smoothness, memoryCost, budget, total };
  }

  rebuildVoxelView() {
    if (this.voxelMesh) {
      this.group.remove(this.voxelMesh);
      disposeObject(this.voxelMesh);
      this.voxelMesh = null;
    }
    const display = 18;
    const count = display * display;
    const geo = new THREE.BoxGeometry(0.17, 0.17, 0.17);
    const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.46 });
    this.voxelMesh = new THREE.InstancedMesh(geo, mat, count);
    const matrix = new THREE.Matrix4();
    let i = 0;
    for (let z = 0; z < display; z++) {
      for (let x = 0; x < display; x++) {
        const worldX = lerp(-3.7, 3.7, x / (display - 1));
        const worldZ = lerp(-2.6, 2.15, z / (display - 1));
        const y = 0.22 + ((x + z) % 2) * 0.02;
        matrix.makeTranslation(worldX, y, worldZ);
        this.voxelMesh.setMatrixAt(i, matrix);
        i++;
      }
    }
    this.voxelMesh.instanceMatrix.needsUpdate = true;
    this.group.add(this.voxelMesh);
    this.updateVoxelColors();
  }

  updateVoxelColors() {
    if (!this.voxelMesh) return;
    const display = 18;
    const m = this.voxelMetrics();
    const color = new THREE.Color();
    let i = 0;
    for (let z = 0; z < display; z++) {
      for (let x = 0; x < display; x++) {
        const worldX = lerp(-3.7, 3.7, x / (display - 1));
        const worldZ = lerp(-2.6, 2.15, z / (display - 1));
        const insideWall = worldX > 0.02 && worldX < 0.36 && worldZ > -1.95 && worldZ < 0.75;
        const distRed = Math.sqrt((worldX + 3.15) ** 2 + (worldZ - 1.15) ** 2);
        let red = clamp01(1 - distRed / 6.1) * m.brightness * 0.85;
        const behindWall = worldX > 0.45 && worldZ < -0.55;
        if (behindWall) red *= m.leakRaw;
        if (insideWall) color.setRGB(0.72, 0.76, 0.82);
        else color.setRGB(red, 0.08 + red * 0.12, 0.16 + (worldX > 2.3 ? 0.35 : 0.0));
        this.voxelMesh.setColorAt(i, color);
        i++;
      }
    }
    if (this.voxelMesh.instanceColor) this.voxelMesh.instanceColor.needsUpdate = true;
  }

  update(dt) {
    super.update(dt);
    const m = this.voxelMetrics();
    this.score = m.total;
    this.game.ui.updateScores([
      { label: 'Brightness', value: m.brightness },
      { label: 'Leak blocked', value: 1 - m.leakRaw, text: `${Math.round(m.leakRaw * 100)}% leak`, bad: m.leakRaw > 0.4 },
      { label: 'Smoothness', value: m.smoothness },
      { label: 'Memory', value: m.budget, text: `${Math.round(m.memoryCost)} cost`, bad: m.memoryCost > 100 },
      { label: '문 잠금', value: this.score / 0.82, text: this.score >= 0.82 ? '열림' : '잠김' }
    ]);
    if (this.score >= 0.82) this.complete('Voxel GI lock이 해제되었습니다. 모든 방을 탈출했습니다!');
  }
}

class GIHideSeekBase extends RoomBase {
  constructor(game, accent) {
    super(game);
    this.bounds = GI_ROOM_LIMITS;
    this.accent = accent;
    this.hiders = [];
    this.found = new Set();
    this.giPatches = [];
    this.cinematicGFX = null;
    this.directLightPos = new THREE.Vector3(-1.4, 4.65, 9.2);
    this.gun = null;
    this.gunRaycaster = new THREE.Raycaster();
    this.shotCooldown = 0;
    this.lastShotHit = false;
    this.enemyRevealThreshold = 0.48;
  }

  enterCommon(title, goal, hiderPositions = null) {
    super.enter();
    this.game.setRenderProfile({
      exposure: 0.66,
      bloomStrength: 0,
      bloomRadius: 0.08,
      bloomThreshold: 1,
      ssao: false,
      pixelRatio: 1.15
    });
    this.game.scene.background = new THREE.Color(0xc5cfda);
    this.game.scene.fog = new THREE.Fog(0xc5cfda, 24, 58);
    this.setupPlayer(new THREE.Vector3(0, 1.35, 9.35), { fly: true, color: this.accent });
    this.game.setCamera(new THREE.Vector3(0, 2.3, 10.8), new THREE.Vector3(0, 1.35, 6.0));
    this.createGun();
    this.listen(this.game.renderer.domElement, 'pointerdown', (event) => {
      if (event.button === 0 && document.pointerLockElement === this.game.renderer.domElement) this.fireGun();
    });
    const shell = buildRoomShell(this.group, this.accent, {
      floorColor: 0x74818d,
      wallColor: 0xc8d0db,
      width: 35.6,
      depth: 32.2,
      height: 5.4
    });
    this.door = shell.door;
    Object.assign(shell.floor.material, {
      roughness: 0.96,
      metalness: 0,
      envMapIntensity: 0.05,
      roughnessMap: null
    });
    shell.floor.material.color.setHex(0x74818d);
    shell.floor.material.needsUpdate = true;

    this.group.add(new THREE.HemisphereLight(0xffffff, 0x8d98a4, 0.42));
    const labFill = new THREE.DirectionalLight(0xffffff, 0.14);
    labFill.position.set(-4.5, 7.5, 6.5);
    labFill.castShadow = true;
    this.group.add(labFill);
    const ceiling = new THREE.Mesh(
      new THREE.BoxGeometry(35.6, 0.08, 32.2),
      makeMat(0xc9d2dc, { roughness: 0.82, envMapIntensity: 0.06 })
    );
    ceiling.position.set(0, this.bounds.maxY - 0.12, -0.15);
    ceiling.receiveShadow = true;
    this.group.add(ceiling);
    const frontWall = new THREE.Mesh(
      new THREE.BoxGeometry(35.6, 5.4, 0.12),
      makeMat(0xbec8d3, { roughness: 0.82, envMapIntensity: 0.08 })
    );
    frontWall.position.set(0, 2.7, this.bounds.maxZ - 0.08);
    frontWall.receiveShadow = true;
    this.group.add(frontWall);

    const redWall = new THREE.Mesh(new THREE.BoxGeometry(0.32, 4.8, 27.8), makeMat(0xc94b5f, { roughness: 0.82 }));
    redWall.position.set(this.bounds.minX + 0.42, 2.4, -0.6);
    const blueWall = new THREE.Mesh(new THREE.BoxGeometry(0.32, 4.8, 27.8), makeMat(0x3c74d8, { roughness: 0.82 }));
    blueWall.position.set(this.bounds.maxX - 0.42, 2.4, -0.6);
    const blocker = new THREE.Mesh(new THREE.BoxGeometry(1.26, 4.35, 7.55), makeMat(0xaab4bf, { roughness: 0.86, envMapIntensity: 0.08 }));
    blocker.position.set(0.45, 2.18, -0.82);
    this.group.add(redWall, blueWall, blocker);
    this.cinematicGFX = null;

    const trimMat = makeMat(0x65717d, { roughness: 0.82, envMapIntensity: 0.08 });
    const wallBandMat = makeMat(0x7f8a95, { roughness: 0.84, envMapIntensity: 0.08 });
    const addBox = (size, position, mat = trimMat) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), mat);
      mesh.position.copy(position);
      mesh.receiveShadow = true;
      this.group.add(mesh);
      return mesh;
    };
    addBox(new THREE.Vector3(35.0, 0.08, 0.08), new THREE.Vector3(0, 0.46, this.bounds.minZ - 0.42));
    addBox(new THREE.Vector3(35.0, 0.08, 0.08), new THREE.Vector3(0, 0.46, this.bounds.maxZ - 0.12));
    addBox(new THREE.Vector3(0.08, 0.08, 30.7), new THREE.Vector3(this.bounds.minX + 0.62, 0.46, -0.15));
    addBox(new THREE.Vector3(0.08, 0.08, 30.7), new THREE.Vector3(this.bounds.maxX - 0.62, 0.46, -0.15));
    addBox(new THREE.Vector3(34.8, 0.055, 0.06), new THREE.Vector3(0, 2.15, this.bounds.maxZ - 0.14), wallBandMat);
    addBox(new THREE.Vector3(34.8, 0.055, 0.06), new THREE.Vector3(0, 3.72, this.bounds.maxZ - 0.14), wallBandMat);
    addBox(new THREE.Vector3(34.8, 0.055, 0.06), new THREE.Vector3(0, 2.15, this.bounds.minZ - 0.42), wallBandMat);
    addBox(new THREE.Vector3(34.8, 0.055, 0.06), new THREE.Vector3(0, 3.72, this.bounds.minZ - 0.42), wallBandMat);
    addBox(new THREE.Vector3(0.07, 5.05, 0.07), new THREE.Vector3(this.bounds.minX + 0.58, 2.62, this.bounds.minZ - 0.36));
    addBox(new THREE.Vector3(0.07, 5.05, 0.07), new THREE.Vector3(this.bounds.maxX - 0.58, 2.62, this.bounds.minZ - 0.36));
    addBox(new THREE.Vector3(0.07, 5.05, 0.07), new THREE.Vector3(this.bounds.minX + 0.58, 2.62, this.bounds.maxZ - 0.14));
    addBox(new THREE.Vector3(0.07, 5.05, 0.07), new THREE.Vector3(this.bounds.maxX - 0.58, 2.62, this.bounds.maxZ - 0.14));

    const gridPoints = [];
    const gridY = 0.026;
    for (let x = -16; x <= 16; x += 4) {
      gridPoints.push(new THREE.Vector3(x, gridY, this.bounds.minZ + 0.7));
      gridPoints.push(new THREE.Vector3(x, gridY, this.bounds.maxZ - 0.7));
    }
    for (let z = -14; z <= 14; z += 4) {
      gridPoints.push(new THREE.Vector3(this.bounds.minX + 1.0, gridY, z));
      gridPoints.push(new THREE.Vector3(this.bounds.maxX - 1.0, gridY, z));
    }
    const floorGrid = new THREE.LineSegments(
      new THREE.BufferGeometry().setFromPoints(gridPoints),
      new THREE.LineBasicMaterial({ color: 0x505a64, transparent: true, opacity: 0.36, depthTest: true, depthWrite: false })
    );
    floorGrid.renderOrder = 3;
    this.group.add(floorGrid);

    const bounce = new THREE.PointLight(0xff5555, 0.28, 8.5, 2);
    bounce.position.copy(this.directLightPos);
    this.group.add(bounce);
    const bounceMesh = new THREE.Mesh(new THREE.SphereGeometry(0.14, 18, 10), makeMat(0xff5555, { emissive: 0xff2222, emissiveIntensity: 0.35 }));
    bounceMesh.position.copy(bounce.position);
    this.group.add(bounceMesh);

    this.buildGIPatches();

    const positions = hiderPositions ?? [
      new THREE.Vector3(-8.8, 0, -8.4),
      new THREE.Vector3(8.2, 0, -7.1),
      new THREE.Vector3(9.7, 2.0, 5.3),
      new THREE.Vector3(-6.4, 3.0, 7.6)
    ];
    positions.forEach((pos, index) => {
      const monsterColor = index === 0 ? 0xff4d8f : index === 1 ? 0x8fb4ff : index === 2 ? 0x46f0c8 : 0xd7a5ff;
      const hider = createFlyingMonster(monsterColor, this.accent);
      hider.position.copy(pos);
      if (hider.position.y < 0.8) hider.position.y = 1.05 + index * 0.28;
      hider.userData.id = index;
      hider.userData.enemyTarget = this.randomEnemyTarget(pos);
      hider.userData.enemySpeed = 2.05 + index * 0.34;
      hider.userData.enemyPhase = Math.random() * Math.PI * 2;
      hider.userData.eliminated = false;
      this.group.add(hider);
      setObjectOpacity(hider, 0);
      this.hiders.push(hider);
    });

    this.game.ui.setRoom(title, goal);
  }

  buildGIPatches() {
    this.giPatches = [];
    const addPatch = (pos, normal, color, area = 1) => {
      const toLight = this.directLightPos.clone().sub(pos);
      const direct = Math.max(0, normal.dot(toLight.clone().normalize())) / Math.max(0.2, toLight.lengthSq());
      const visible = segmentIntersectsThinWall(this.directLightPos, pos) ? 0 : 1;
      const irradiance = direct * area * visible * 8.0;
      this.giPatches.push({ pos, normal: normal.clone().normalize(), color: color.clone(), irradiance });
    };
    for (const y of [0.75, 2.0, 3.3, 4.45]) {
      for (const z of [-9.2, -6.2, -3.2, -0.2, 2.8, 5.8, 8.4]) {
        addPatch(new THREE.Vector3(this.bounds.minX + 0.52, y, z), new THREE.Vector3(1, 0, 0), new THREE.Color(1.0, 0.12, 0.08), 2.25);
        addPatch(new THREE.Vector3(this.bounds.maxX - 0.52, y, z), new THREE.Vector3(-1, 0, 0), new THREE.Color(0.08, 0.22, 1.0), 1.8);
      }
    }
    for (const x of [-10, -7, -4, -1, 2, 5, 8, 11]) {
      for (const z of [-10, -7, -4, -1, 2, 5, 8, 10.4]) {
        addPatch(new THREE.Vector3(x, 0.04, z), new THREE.Vector3(0, 1, 0), new THREE.Color(0.42, 0.42, 0.38), 0.95);
      }
    }
    for (const x of [-10, -7, -4, -1, 2, 5, 8, 11]) {
      for (const y of [1.0, 2.35, 3.7]) {
        addPatch(new THREE.Vector3(x, y, this.bounds.minZ + 0.24), new THREE.Vector3(0, 0, 1), new THREE.Color(0.5, 0.56, 0.72), 4.6);
        addPatch(new THREE.Vector3(x, y, this.bounds.maxZ - 0.24), new THREE.Vector3(0, 0, -1), new THREE.Color(0.38, 0.44, 0.58), 2.35);
      }
    }
    for (const x of [-10, -7, -4, -1, 2, 5, 8, 11]) {
      for (const z of [-10, -7, -4, -1, 2, 5, 8, 10.4]) {
        addPatch(new THREE.Vector3(x, this.bounds.maxY - 0.16, z), new THREE.Vector3(0, -1, 0), new THREE.Color(0.44, 0.52, 0.7), 1.9);
      }
    }
  }

  createGun() {
    this.gun = createHandgun(0x1b2028, this.accent);
    this.gun.scale.setScalar(0.86);
    this.group.add(this.gun);
  }

  updateGunVisuals(dt) {
    if (!this.gun) return;
    const camera = this.game.camera;
    const forward = this.game.lookDirection(true);
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0));
    if (right.lengthSq() < 0.001) right.set(1, 0, 0);
    right.normalize();
    const up = new THREE.Vector3(0, 1, 0);
    this.gun.position.copy(camera.position)
      .addScaledVector(right, 0.43)
      .addScaledVector(up, -0.34)
      .addScaledVector(forward, 0.62);
    this.gun.quaternion.copy(camera.quaternion);
    const flash = this.gun.userData.flash;
    if (flash) {
      flash.material.opacity = Math.max(0, flash.material.opacity - dt * 8.5);
      flash.scale.setScalar(0.75 + flash.material.opacity * 1.4);
    }
    this.shotCooldown = Math.max(0, this.shotCooldown - dt);
  }

  updatePlayer(dt) {
    if (!this.player) return;
    const previous = this.player.position.clone();
    const forward = this.game.lookDirection(false);
    if (forward.lengthSq() < 0.001) forward.set(0, 0, -1);
    forward.y = 0;
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const dir = new THREE.Vector3();
    if (this.game.keys.has('KeyW')) dir.add(forward);
    if (this.game.keys.has('KeyS')) dir.sub(forward);
    if (this.game.keys.has('KeyD')) dir.add(right);
    if (this.game.keys.has('KeyA')) dir.sub(right);
    if (this.game.keys.has('Space')) dir.y += 0.75;
    if (this.game.keys.has('KeyQ') || this.game.keys.has('ControlLeft') || this.game.keys.has('ControlRight')) dir.y -= 0.75;
    if (dir.lengthSq() > 1) dir.normalize();
    const sprint = this.game.keys.has('ShiftLeft') || this.game.keys.has('ShiftRight');
    this.player.position.addScaledVector(dir, (sprint ? 5.6 : 2.85) * dt);
    this.resolvePlayerRoomCollision(previous);
    this.player.rotation.y = this.game.lookYaw;
  }

  resolvePlayerRoomCollision(previous) {
    const pos = this.player.position;
    const radius = 0.48;
    pos.x = THREE.MathUtils.clamp(pos.x, this.bounds.minX + radius, this.bounds.maxX - radius);
    pos.z = THREE.MathUtils.clamp(pos.z, this.bounds.minZ + radius, this.bounds.maxZ - radius);
    pos.y = THREE.MathUtils.clamp(pos.y, 0.42, this.bounds.maxY - 0.62);

    const blocker = {
      minX: -0.18 - radius,
      maxX: 1.08 + radius,
      minY: 0,
      maxY: 4.35 + 0.32,
      minZ: -4.6 - radius,
      maxZ: 2.95 + radius
    };
    const insideBlocker = pos.x > blocker.minX && pos.x < blocker.maxX
      && pos.z > blocker.minZ && pos.z < blocker.maxZ
      && pos.y > blocker.minY && pos.y < blocker.maxY;
    if (!insideBlocker) return;

    const pushes = [
      { amount: pos.x - blocker.minX, apply: () => { pos.x = blocker.minX; } },
      { amount: blocker.maxX - pos.x, apply: () => { pos.x = blocker.maxX; } },
      { amount: pos.z - blocker.minZ, apply: () => { pos.z = blocker.minZ; } },
      { amount: blocker.maxZ - pos.z, apply: () => { pos.z = blocker.maxZ; } }
    ].sort((a, b) => a.amount - b.amount);
    pushes[0].apply();

    if (previous && this.enemyBlocked(pos)) pos.copy(previous);
    pos.x = THREE.MathUtils.clamp(pos.x, this.bounds.minX + radius, this.bounds.maxX - radius);
    pos.z = THREE.MathUtils.clamp(pos.z, this.bounds.minZ + radius, this.bounds.maxZ - radius);
    pos.y = THREE.MathUtils.clamp(pos.y, 0.42, this.bounds.maxY - 0.62);
  }

  enemyBlocked(pos) {
    return pos.x > -0.3 && pos.x < 1.2 && pos.y < 4.4 && pos.z > -4.75 && pos.z < 3.1;
  }

  randomEnemyTarget(from = new THREE.Vector3()) {
    for (let i = 0; i < 24; i++) {
      const pos = new THREE.Vector3(
        lerp(this.bounds.minX + 1.8, this.bounds.maxX - 1.8, Math.random()),
        lerp(0.75, 4.25, Math.random()),
        lerp(this.bounds.minZ + 2.0, this.bounds.maxZ - 2.0, Math.random())
      );
      if (!this.enemyBlocked(pos) && pos.distanceTo(from) > 3.2) return pos;
    }
    return new THREE.Vector3(-8 + Math.random() * 16, 0.4 + Math.random() * 2.6, -8 + Math.random() * 16);
  }

  updateEnemies(dt) {
    const time = performance.now() * 0.001;
    for (const enemy of this.hiders) {
      if (this.found.has(enemy.userData.id)) {
        enemy.visible = false;
        setObjectOpacity(enemy, 0);
        continue;
      }
      const target = enemy.userData.enemyTarget ?? this.randomEnemyTarget(enemy.position);
      const toTarget = target.clone().sub(enemy.position);
      if (toTarget.length() < 0.55 || this.enemyBlocked(enemy.position)) {
        enemy.userData.enemyTarget = this.randomEnemyTarget(enemy.position);
        continue;
      }
      const previous = enemy.position.clone();
      const step = toTarget.normalize().multiplyScalar((enemy.userData.enemySpeed ?? 0.9) * dt);
      enemy.position.add(step);
      enemy.position.y += Math.sin(time * 2.4 + enemy.userData.enemyPhase) * 0.006;
      clampToBounds(enemy.position, this.bounds, true);
      if (this.enemyBlocked(enemy.position)) {
        enemy.position.copy(previous);
        enemy.userData.enemyTarget = this.randomEnemyTarget(enemy.position);
      }
      if (step.lengthSq() > 0.00001) enemy.rotation.y = Math.atan2(step.x, step.z);
      animateFlyingMonster(enemy, dt, time);
    }
  }

  fireGun() {
    if (this.shotCooldown > 0 || this.solved) return;
    this.shotCooldown = 0.24;
    const flash = this.gun?.userData.flash;
    if (flash) flash.material.opacity = 0.95;
    const origin = this.game.camera.position.clone();
    const dir = this.game.lookDirection(true);
    this.gunRaycaster.set(origin, dir);
    this.gunRaycaster.near = 0.15;
    this.gunRaycaster.far = 34;

    let best = null;
    for (const enemy of this.hiders) {
      if (this.found.has(enemy.userData.id)) continue;
      if ((enemy.userData.reveal ?? 0) < this.enemyRevealThreshold) continue;
      const aimPoint = enemy.position.clone().add(new THREE.Vector3(0, 0.65, 0));
      if (segmentIntersectsThinWall(origin, aimPoint)) continue;
      const hits = this.gunRaycaster.intersectObject(enemy, true);
      if (!hits.length) continue;
      if (!best || hits[0].distance < best.distance) best = { enemy, distance: hits[0].distance };
    }

    if (best) {
      const enemy = best.enemy;
      this.found.add(enemy.userData.id);
      enemy.userData.eliminated = true;
      enemy.visible = false;
      setObjectOpacity(enemy, 0);
      this.game.ui.showToast('명중. GI로 드러난 적을 맞혔습니다.');
      if (this.found.size >= this.hiders.length) this.complete('움직이는 적을 모두 맞혔습니다. 다음 방으로 이동합니다.');
    } else {
      this.game.ui.showToast('빗나갔습니다. GI 도구로 드러난 적만 맞출 수 있습니다.');
    }
  }

  updateCombat(dt, revealAt) {
    this.updateEnemies(dt);
    this.updateGunVisuals(dt);
    this.updateHiders(revealAt);
  }

  updateCinematicGFX(dt) {
    if (!this.cinematicGFX) return;
    if (this.cinematicGFX.static) return;
    const time = performance.now() * 0.001;
    if (this.cinematicGFX.particles) {
      this.cinematicGFX.particles.rotation.y += dt * 0.015;
      this.cinematicGFX.particles.material.opacity = 0.14 + Math.sin(time * 0.7) * 0.04;
    }
    for (let i = 0; i < this.cinematicGFX.strips.length; i++) {
      const obj = this.cinematicGFX.strips[i];
      if (obj.material?.emissiveIntensity !== undefined) {
        obj.material.emissiveIntensity = 0.24 + Math.sin(time * 1.4 + i * 0.37) * 0.08;
      }
    }
    for (let i = 0; i < this.cinematicGFX.rings.length; i++) {
      const ring = this.cinematicGFX.rings[i];
      ring.rotation.z += dt * (0.18 + i * 0.04);
      if (ring.material?.emissiveIntensity !== undefined) {
        ring.material.emissiveIntensity = 0.32 + Math.sin(time * 1.9 + i) * 0.1;
      }
    }
  }

  update(dt) {
    super.update(dt);
    this.updateCinematicGFX(dt);
  }

  oneBounceGI(point, options = {}) {
    const color = new THREE.Color(0, 0, 0);
    let scalar = 0;
    for (const patch of this.giPatches) {
      const toPoint = point.clone().sub(patch.pos);
      const distSq = Math.max(0.28, toPoint.lengthSq());
      const dir = toPoint.normalize();
      const geom = Math.max(0, patch.normal.dot(dir)) / distSq;
      if (geom <= 0) continue;
      const blocked = segmentIntersectsThinWall(patch.pos, point);
      if (blocked && !options.allowLeak) continue;
      const leak = blocked ? 0.12 : 1;
      const amount = patch.irradiance * geom * leak;
      color.add(patch.color.clone().multiplyScalar(amount));
      scalar += amount * (0.2126 * patch.color.r + 0.7152 * patch.color.g + 0.0722 * patch.color.b);
    }
    return { color, scalar };
  }

  giSurfaceHit(origin, dir, maxDist = 42) {
    const candidates = [];
    const b = this.bounds;
    const blocker = { minX: -0.18, maxX: 1.08, minY: 0, maxY: 4.35, minZ: -4.6, maxZ: 2.95 };
    const addPlane = (axis, value, normal, minA, maxA, minB, maxB, color) => {
      const denom = dir[axis];
      if (Math.abs(denom) < 0.0001) return;
      const t = (value - origin[axis]) / denom;
      if (t <= 0.08 || t > maxDist) return;
      const p = origin.clone().add(dir.clone().multiplyScalar(t));
      const a = axis === 'x' ? p.y : p.x;
      const bb = axis === 'z' ? p.y : p.z;
      if (a < minA || a > maxA || bb < minB || bb > maxB) return;
      candidates.push({ t, pos: p, normal: normal.clone().normalize(), color: color.clone() });
    };
    addPlane('x', b.minX + 0.52, new THREE.Vector3(1, 0, 0), 0.08, 5.15, b.minZ + 1.2, b.maxZ - 1.1, new THREE.Color(1.0, 0.12, 0.08));
    addPlane('x', b.maxX - 0.52, new THREE.Vector3(-1, 0, 0), 0.08, 5.15, b.minZ + 1.2, b.maxZ - 1.1, new THREE.Color(0.08, 0.22, 1.0));
    addPlane('y', 0.04, new THREE.Vector3(0, 1, 0), b.minX + 0.8, b.maxX - 0.8, b.minZ + 0.8, b.maxZ - 0.8, new THREE.Color(0.42, 0.42, 0.38));
    addPlane('y', b.maxY - 0.12, new THREE.Vector3(0, -1, 0), b.minX + 0.8, b.maxX - 0.8, b.minZ + 0.8, b.maxZ - 0.8, new THREE.Color(0.44, 0.52, 0.7));
    addPlane('z', b.minZ + 0.24, new THREE.Vector3(0, 0, 1), b.minX + 0.8, b.maxX - 0.8, 0.08, 5.15, new THREE.Color(0.5, 0.56, 0.72));
    addPlane('z', b.maxZ - 0.08, new THREE.Vector3(0, 0, -1), b.minX + 0.8, b.maxX - 0.8, 0.08, 5.15, new THREE.Color(0.38, 0.44, 0.58));
    addPlane('x', blocker.minX, new THREE.Vector3(-1, 0, 0), blocker.minY + 0.05, blocker.maxY, blocker.minZ, blocker.maxZ, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('x', blocker.maxX, new THREE.Vector3(1, 0, 0), blocker.minY + 0.05, blocker.maxY, blocker.minZ, blocker.maxZ, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('y', blocker.maxY, new THREE.Vector3(0, 1, 0), blocker.minX, blocker.maxX, blocker.minZ, blocker.maxZ, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('z', blocker.minZ, new THREE.Vector3(0, 0, -1), blocker.minX, blocker.maxX, blocker.minY + 0.05, blocker.maxY, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('z', blocker.maxZ, new THREE.Vector3(0, 0, 1), blocker.minX, blocker.maxX, blocker.minY + 0.05, blocker.maxY, new THREE.Color(0.86, 0.9, 0.98));
    candidates.sort((a, b) => a.t - b.t);
    return candidates[0] ?? null;
  }

  directSurfaceRadiance(hit) {
    const toLight = this.directLightPos.clone().sub(hit.pos);
    const distSq = Math.max(0.35, toLight.lengthSq());
    const l = toLight.normalize();
    const nDotL = Math.max(0, hit.normal.dot(l));
    if (nDotL <= 0 || segmentIntersectsThinWall(this.directLightPos, hit.pos)) return { color: new THREE.Color(), scalar: 0 };
    const scalar = nDotL * 10.5 / distSq;
    return {
      color: hit.color.clone().multiplyScalar(scalar),
      scalar: scalar * (0.2126 * hit.color.r + 0.7152 * hit.color.g + 0.0722 * hit.color.b)
    };
  }

  traceIndirectRay(origin, dir) {
    const hit = this.giSurfaceHit(origin, dir);
    if (!hit) return null;
    const direct = this.directSurfaceRadiance(hit);
    return {
      ...hit,
      radiance: direct.scalar,
      color: direct.color,
      visibilityDepth: hit.t
    };
  }

  revealFromRadiance(value) {
    return clamp01((value - 0.004) / 0.04);
  }

  updateHiders(revealAt) {
    for (const hider of this.hiders) {
      const id = hider.userData.id;
      if (this.found.has(id)) {
        hider.userData.reveal = 1;
        hider.visible = false;
        setObjectOpacity(hider, 0);
        continue;
      }
      const samplePos = hider.position.clone().add(new THREE.Vector3(0, 0.68, 0));
      const reveal = clamp01(revealAt(samplePos));
      setObjectOpacity(hider, reveal * 0.96);
      hider.userData.reveal = reveal;
    }
    if (this.found.size >= this.hiders.length) this.complete('움직이는 적을 모두 맞혔습니다. 다음 방으로 이동합니다.');
  }

  foundRows(extraRows = []) {
    return [
      ...extraRows,
      { label: '맞힌 적', value: this.found.size / this.hiders.length, text: `${this.found.size}/${this.hiders.length}` },
      { label: '문 잠금', value: this.found.size / this.hiders.length, text: this.found.size >= this.hiders.length ? '열림' : '잠김' }
    ];
  }
}

class DDGIHideSeekRoom extends GIHideSeekBase {
  constructor(game) {
    super(game, 0xff8fab);
    this.probes = [];
    this.maxProbes = 128;
    this.ddgiDirections = null;
    this.activeProbeCount = 0;
    this.ddgiRaysPerProbe = 64;
    this.ddgiHysteresis = 0.18;
  }

  enter() {
    this.enterCommon(
      '5. DDGI Hide and Seek',
      '술래가 되어 매우 큰 방을 3차원으로 이동합니다. E로 DDGI probe를 설치하면 probe가 실제 one-bounce indirect irradiance를 저장합니다. 충분한 probe가 제공되므로 3~4m 간격의 규칙적인 grid로 배열하면 숨은 적을 모두 드러낼 수 있습니다.',
      [
        new THREE.Vector3(-10.0, 0, 2.0),
        new THREE.Vector3(8.0, 0, 8.0),
        new THREE.Vector3(-4.0, 3.0, 6.0),
        new THREE.Vector3(2.0, 2.0, 6.0)
      ]
    );
    this.game.ui.setRoom(
      '5. DDGI Hide and Seek',
      '방은 밝지만 움직이는 적들은 direct light나 ambient light로 보이지 않습니다. E로 DDGI probe를 설치해 indirect light로 적을 드러낸 뒤, 오른손 권총으로 보이는 적만 맞히세요. Shift로 달릴 수 있습니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>DDGI Probe Tool</h3>
        <div class="button-grid">
          <button id="placeProbe">E Probe</button>
          <button id="clearProbe" class="danger">C 초기화</button>
        </div>
        <p class="small-text">WASD 이동, Shift 달리기, Space 상승, Q/Ctrl 하강. E는 현재 위치에 64-ray SH DDGI probe를 설치합니다. C는 probe field를 초기화합니다.</p>
      </div>
    `);
    this.listen(getEl('placeProbe'), 'click', () => this.placeProbe());
    this.listen(getEl('clearProbe'), 'click', () => this.clearProbes());
  }

  onKeyDown(code) {
    if (code === 'KeyE') this.placeProbe();
    if (code === 'KeyC') this.clearProbes();
    super.onKeyDown(code);
  }

  placeProbe() {
    if (this.probes.length >= this.maxProbes) return;
    const pos = this.player.position.clone();
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.085, 14, 8),
      new THREE.MeshBasicMaterial({ color: 0x333947, transparent: true, opacity: 0.22, depthWrite: false })
    );
    mesh.position.copy(pos);
    this.group.add(mesh);
    const probe = {
      pos,
      mesh,
      blocked: false,
      active: false,
      irradiance: 0,
      color: new THREE.Color(),
      rays: [],
      sh: createScalarSH()
    };
    this.probes.push(probe);
    this.bakeDDGIProbe(probe);
    this.activeProbeCount = this.probes.length;
    this.game.ui.showToast(`DDGI probe installed: ${this.probes.length}/${this.maxProbes}`);
  }

  probeRayDirections() {
    if (this.ddgiDirections) return this.ddgiDirections;
    this.ddgiDirections = goldenSphereDirections(this.ddgiRaysPerProbe);
    return this.ddgiDirections;
  }

  bakeDDGIProbe(probe) {
    const gi = this.captureDDGIProbe(probe.pos, probe.active ? probe : null);
    probe.active = true;
    probe.irradiance = gi.scalar;
    probe.color.copy(gi.color);
    probe.rays = gi.rays;
    probe.sh = gi.sh;
    const color = gi.color.clone();
    if (color.r + color.g + color.b < 0.01) color.setHex(0x3a2b34);
    probe.mesh.material.color.copy(color);
    probe.mesh.material.opacity = 0.86;
    probe.mesh.scale.setScalar(1.32);
  }

  captureDDGIProbe(pos, previousProbe = null) {
    const color = new THREE.Color();
    const rays = [];
    const sh = createScalarSH();
    let scalar = 0;
    let hits = 0;
    const directions = this.probeRayDirections();
    const sampleBaseWeight = 4 * Math.PI / directions.length;
    for (const dir of directions) {
      const hit = this.traceIndirectRay(pos, dir);
      if (!hit) {
        rays.push({ dir: dir.clone(), depth: 24, depth2: 24 * 24, radiance: 0 });
        continue;
      }
      const normalWeight = Math.max(0.08, Math.abs(hit.normal.dot(dir.clone().negate())));
      const sampleWeight = sampleBaseWeight * normalWeight;
      const radiance = hit.radiance * normalWeight;
      addScalarSH(sh, dir, radiance, sampleWeight);
      color.add(hit.color.clone().multiplyScalar(normalWeight));
      scalar += radiance;
      hits += normalWeight;
      const depth = hit.visibilityDepth;
      rays.push({
        dir: dir.clone(),
        depth,
        depth2: depth * depth + 0.16 + radiance * 0.25,
        radiance
      });
    }
    if (hits > 0) {
      color.multiplyScalar(1 / hits);
      scalar /= hits;
    }
    if (previousProbe) {
      const h = this.ddgiHysteresis;
      for (let i = 0; i < sh.length; i++) sh[i] = previousProbe.sh[i] * h + sh[i] * (1 - h);
      scalar = previousProbe.irradiance * h + scalar * (1 - h);
      color.lerp(previousProbe.color, h);
    }
    return { color, scalar, rays, sh };
  }

  probeVisibility(probe, pos) {
    const toPoint = pos.clone().sub(probe.pos);
    const dist = toPoint.length();
    if (dist < 0.001) return 1;
    const dir = toPoint.normalize();
    let best = null;
    let bestDot = -1;
    for (const ray of probe.rays) {
      const d = ray.dir.dot(dir);
      if (d > bestDot) {
        bestDot = d;
        best = ray;
      }
    }
    if (!best) return 0;
    const variance = Math.max(0.035, (best.depth2 ?? best.depth * best.depth) - best.depth * best.depth);
    const delta = dist - best.depth;
    const depthVisibility = delta <= 0 ? 1 : variance / (variance + delta * delta);
    const angular = clamp01((bestDot - 0.38) / 0.62);
    return clamp01(depthVisibility * angular);
  }

  sampleProbeField(pos) {
    let total = 0;
    let weightSum = 0;
    for (const probe of this.probes) {
      if (!probe.active) continue;
      const toPoint = pos.clone().sub(probe.pos);
      const distSq = Math.max(0.18, toPoint.lengthSq());
      const radiusFalloff = clamp01(1 - Math.sqrt(distSq) / 7.2);
      const visibility = this.probeVisibility(probe, pos);
      const dir = toPoint.normalize();
      const weight = radiusFalloff * radiusFalloff * visibility / (1 + Math.sqrt(distSq) * 0.35);
      total += sampleScalarSH(probe.sh, dir) * weight;
      weightSum += weight;
    }
    return weightSum > 0 ? total / weightSum : 0;
  }

  clearProbes() {
    for (const probe of this.probes) {
      this.group.remove(probe.mesh);
      disposeObject(probe.mesh);
    }
    this.probes = [];
    this.activeProbeCount = 0;
  }

  update(dt) {
    super.update(dt);
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { fly: true, distance: 1.35, height: 0.35, lookHeight: 0.05 });
    for (const probe of this.probes) {
      if (probe.active) probe.mesh.scale.setScalar(1.22 + Math.sin(performance.now() * 0.004 + probe.pos.x) * 0.12);
    }
    this.updateCombat(dt, (pos) => {
      return this.revealFromRadiance(this.sampleProbeField(pos));
    });
    this.activeProbeCount = this.probes.filter((probe) => probe.active).length;
    const coverage = clamp01(this.activeProbeCount / Math.max(1, this.maxProbes));
    this.game.ui.updateScores(this.foundRows([
      { label: 'DDGI probes', value: coverage, text: `${this.activeProbeCount}/${this.maxProbes}` },
      { label: 'SH rays', value: clamp01(this.ddgiRaysPerProbe / 64), text: `L2 ${this.ddgiRaysPerProbe}r` },
      { label: 'Depth visibility', value: this.activeProbeCount ? 0.92 : 0, text: this.activeProbeCount ? 'moments' : 'empty' }
    ]));
  }

  dispose() {
    this.clearProbes();
    super.dispose();
  }
}

class SurfelHideSeekRoom extends GIHideSeekBase {
  constructor(game) {
    super(game, 0x46f0c8);
    this.surfels = [];
    this.maxSurfels = 120;
    this.surfelArea = 0.72;
    this.surfelRadius = 8.4;
    this.surfelBounceIterations = 2;
  }

  enter() {
    this.enterCommon(
      '6. Surfel GI Hide and Seek',
      '큰 방의 표면을 바라보고 E로 surfel을 설치해 indirect light cache를 만듭니다. 바닥, 모든 벽, 천장, 중앙 차폐물 표면에 붙일 수 있고 충분한 surfel이 제공됩니다.',
      [
        new THREE.Vector3(-8.0, 0, 8.0),
        new THREE.Vector3(4.0, 1.0, 10.0),
        new THREE.Vector3(-4.0, 2.0, 4.0),
        new THREE.Vector3(-10.0, 2.0, 8.0)
      ]
    );
    this.game.ui.setRoom(
      '6. Surfel GI Hide and Seek',
      '방은 밝지만 움직이는 적들은 Surfel GI로 드러난 순간에만 사격할 수 있습니다. E로 벽, 바닥, 천장, 차폐물 표면에 surfel을 설치하고 오른손 권총으로 보이는 적을 맞히세요.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Surfel Tool</h3>
        <div class="button-grid">
          <button id="placeSurfel">E Surfel</button>
          <button id="clearSurfel" class="danger">C 초기화</button>
        </div>
        <p class="small-text">WASD 이동, Shift 달리기, Space 상승, Q/Ctrl 하강. E는 에임이 닿은 표면에 surfel point를 설치하고, C는 surfel cache를 초기화합니다.</p>
      </div>
    `);
    this.listen(getEl('placeSurfel'), 'click', () => this.placeSurfel());
    this.listen(getEl('clearSurfel'), 'click', () => this.clearSurfels());
  }

  onKeyDown(code) {
    if (code === 'KeyE') this.placeSurfel();
    if (code === 'KeyC') this.clearSurfels();
    super.onKeyDown(code);
  }

  placeSurfel() {
    if (this.surfels.length >= this.maxSurfels) return;
    const hit = this.surfaceHitFromView();
    if (!hit) {
      this.game.ui.showToast('에임 안에 GI 표면이 없습니다.');
      return;
    }
    const direct = this.directSurfaceRadiance(hit);
    const bounce = this.sampleSurfels(hit.pos.clone().add(hit.normal.clone().multiplyScalar(0.08)), hit.normal, null) * 0.55;
    const irradiance = Math.min(0.34, direct.scalar + bounce);
    const pointColor = direct.color.clone();
    if (pointColor.r + pointColor.g + pointColor.b < 0.01) pointColor.copy(hit.color).multiplyScalar(0.42);
    const mat = new THREE.MeshBasicMaterial({ color: pointColor, transparent: true, opacity: 0.92, depthWrite: false });
    const point = new THREE.Mesh(new THREE.SphereGeometry(0.065, 12, 8), mat);
    point.position.copy(hit.pos).add(hit.normal.clone().multiplyScalar(0.045));
    point.renderOrder = 860;
    this.group.add(point);
    this.surfels.push({
      pos: hit.pos.clone(),
      normal: hit.normal.clone(),
      irradiance,
      direct: direct.scalar,
      color: hit.color.clone(),
      area: this.surfelArea,
      radius: this.surfelRadius,
      point
    });
    this.relightSurfels(this.surfelBounceIterations);
  }

  surfaceHitFromView() {
    const origin = this.player.position.clone().add(new THREE.Vector3(0, 0.35, 0));
    const dir = this.game.lookDirection(true);
    const candidates = [];
    const b = this.bounds;
    const blocker = { minX: -0.18, maxX: 1.08, minY: 0, maxY: 4.35, minZ: -4.6, maxZ: 2.95 };
    const addPlane = (axis, value, normal, minA, maxA, minB, maxB, color) => {
      const denom = dir[axis];
      if (Math.abs(denom) < 0.0001) return;
      const t = (value - origin[axis]) / denom;
      if (t <= 0.15 || t > 26) return;
      const p = origin.clone().add(dir.clone().multiplyScalar(t));
      const a = axis === 'x' ? p.y : p.x;
      const b = axis === 'z' ? p.y : p.z;
      if (a < minA || a > maxA || b < minB || b > maxB) return;
      candidates.push({ t, pos: p, normal: normal.clone().normalize(), color });
    };
    addPlane('x', b.minX + 0.52, new THREE.Vector3(1, 0, 0), 0.08, 5.15, b.minZ + 1.2, b.maxZ - 1.1, new THREE.Color(1.0, 0.12, 0.08));
    addPlane('x', b.maxX - 0.52, new THREE.Vector3(-1, 0, 0), 0.08, 5.15, b.minZ + 1.2, b.maxZ - 1.1, new THREE.Color(0.08, 0.22, 1.0));
    addPlane('y', 0.04, new THREE.Vector3(0, 1, 0), b.minX + 0.8, b.maxX - 0.8, b.minZ + 0.8, b.maxZ - 0.8, new THREE.Color(0.42, 0.42, 0.38));
    addPlane('y', b.maxY - 0.12, new THREE.Vector3(0, -1, 0), b.minX + 0.8, b.maxX - 0.8, b.minZ + 0.8, b.maxZ - 0.8, new THREE.Color(0.44, 0.52, 0.7));
    addPlane('z', b.minZ + 0.24, new THREE.Vector3(0, 0, 1), b.minX + 0.8, b.maxX - 0.8, 0.08, 5.15, new THREE.Color(0.5, 0.56, 0.72));
    addPlane('z', b.maxZ - 0.08, new THREE.Vector3(0, 0, -1), b.minX + 0.8, b.maxX - 0.8, 0.08, 5.15, new THREE.Color(0.38, 0.44, 0.58));
    addPlane('x', blocker.minX, new THREE.Vector3(-1, 0, 0), blocker.minY + 0.05, blocker.maxY, blocker.minZ, blocker.maxZ, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('x', blocker.maxX, new THREE.Vector3(1, 0, 0), blocker.minY + 0.05, blocker.maxY, blocker.minZ, blocker.maxZ, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('y', blocker.maxY, new THREE.Vector3(0, 1, 0), blocker.minX, blocker.maxX, blocker.minZ, blocker.maxZ, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('z', blocker.minZ, new THREE.Vector3(0, 0, -1), blocker.minX, blocker.maxX, blocker.minY + 0.05, blocker.maxY, new THREE.Color(0.86, 0.9, 0.98));
    addPlane('z', blocker.maxZ, new THREE.Vector3(0, 0, 1), blocker.minX, blocker.maxX, blocker.minY + 0.05, blocker.maxY, new THREE.Color(0.86, 0.9, 0.98));
    candidates.sort((a, b) => a.t - b.t);
    return candidates[0] ?? null;
  }

  relightSurfels(iterations = 1) {
    for (let iter = 0; iter < iterations; iter++) {
      const next = [];
      for (const surfel of this.surfels) {
        const direct = this.directSurfaceRadiance(surfel);
        const samplePos = surfel.pos.clone().add(surfel.normal.clone().multiplyScalar(0.08));
        const bounce = this.sampleSurfels(samplePos, surfel.normal, surfel) * 0.62;
        next.push({
          irradiance: Math.min(0.38, direct.scalar + bounce),
          direct: direct.scalar,
          color: direct.color
        });
      }
      for (let i = 0; i < this.surfels.length; i++) {
        const surfel = this.surfels[i];
        surfel.irradiance = surfel.irradiance * 0.22 + next[i].irradiance * 0.78;
        surfel.direct = next[i].direct;
        const display = next[i].color.clone();
        if (display.r + display.g + display.b < 0.01) display.copy(surfel.color).multiplyScalar(0.35 + clamp01(surfel.irradiance * 3));
        surfel.point.material.color.copy(display);
        surfel.point.scale.setScalar(0.82 + clamp01(surfel.irradiance / 0.08) * 0.62);
      }
    }
  }

  sampleSurfels(pos, receiverNormal = null, ignore = null) {
    let total = 0;
    for (const surfel of this.surfels) {
      if (surfel === ignore) continue;
      if (segmentIntersectsThinWall(surfel.pos, pos)) continue;
      const toPoint = pos.clone().sub(surfel.pos);
      const distSq = Math.max(0.16, toPoint.lengthSq());
      const dir = toPoint.normalize();
      const emitterCos = Math.max(0, surfel.normal.dot(dir));
      if (emitterCos <= 0) continue;
      const receiverCos = receiverNormal ? Math.max(0, receiverNormal.dot(dir.clone().negate())) : 0.78;
      if (receiverCos <= 0) continue;
      const dist = Math.sqrt(distSq);
      const radiusFalloff = clamp01(1 - dist / (surfel.radius ?? this.surfelRadius));
      const solidAngle = (surfel.area ?? this.surfelArea) / distSq;
      total += surfel.irradiance * emitterCos * receiverCos * solidAngle * radiusFalloff * 18.0 / Math.PI;
    }
    return total;
  }

  clearSurfels() {
    for (const surfel of this.surfels) {
      this.group.remove(surfel.point);
      disposeObject(surfel.point);
    }
    this.surfels = [];
  }

  update(dt) {
    super.update(dt);
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { fly: true, distance: 1.35, height: 0.35, lookHeight: 0.05 });
    this.updateCombat(dt, (pos) => {
      return this.revealFromRadiance(this.sampleSurfels(pos, null, null));
    });
    this.game.ui.updateScores(this.foundRows([
      { label: 'Surfels', value: clamp01(this.surfels.length / 72), text: `${this.surfels.length}/${this.maxSurfels}` },
      { label: 'Transport', value: this.surfels.length ? 0.9 : 0, text: this.surfels.length ? '2 bounce' : 'empty' },
      { label: 'Kernel', value: clamp01(this.surfelRadius / 9), text: `${fmt(this.surfelRadius, 1)}m` }
    ]));
  }

  dispose() {
    this.clearSurfels();
    super.dispose();
  }
}

class LegacyVoxelHideSeekRoom extends GIHideSeekBase {
  constructor(game) {
    super(game, 0xb388ff);
    this.level = 32;
    this.voxelCloud = null;
    this.voxelCache = new Map();
    this.handOffset = new THREE.Vector3(0.48, -0.34, -0.56);
    this.beamOffset = new THREE.Vector3(0.48, -0.30, -0.72);
  }

  enter() {
    this.enterCommon(
      '7. Voxel GI 숨바꼭질',
      '복셀 GI 카메라를 들고 큰 방 전체를 탐색합니다. 1/2/3으로 복셀 레벨을 바꾸면 큰 방을 나누는 복셀 크기와 간접광 정밀도가 달라집니다. 숨어있는 사람은 복셀화된 one-bounce indirect light 안에서만 드러납니다.',
      [
        new THREE.Vector3(-10.0, 0, 8.0),
        new THREE.Vector3(2.0, 0, 2.0),
        new THREE.Vector3(-6.0, 2.0, 10.0),
        new THREE.Vector3(4.0, 1.0, 8.0)
      ]
    );
    this.scanCamera = createDeviceProp('camera', 0xb388ff);
    this.scanCamera.scale.setScalar(0.68);
    this.group.add(this.scanCamera);
    setVisualsVisible(this.scanCamera, true);
    this.buildVoxelCloud();
    this.buildControls();
  }

  buildControls() {
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Voxel Camera Level</h3>
        <div class="button-grid">
          <button id="vox16" class="${this.level === 16 ? 'active' : ''}">1 16</button>
          <button id="vox32" class="${this.level === 32 ? 'active' : ''}">2 32</button>
          <button id="vox64" class="${this.level === 64 ? 'active' : ''}">3 64</button>
        </div>
        <p class="small-text">숫자키로 레벨 전환: 1은 16, 2는 32, 3은 64. 손에 든 복셀 카메라가 에임 방향으로 비추는 프러스텀 껍데기를 표시합니다.</p>
      </div>
    `);
    this.listen(getEl('vox16'), 'click', () => this.setLevel(16));
    this.listen(getEl('vox32'), 'click', () => this.setLevel(32));
    this.listen(getEl('vox64'), 'click', () => this.setLevel(64));
  }

  setLevel(level) {
    this.level = level;
    this.voxelCache.clear();
    this.buildControls();
    this.buildVoxelCloud();
  }

  onKeyDown(code) {
    if (code === 'Digit1') this.setLevel(16);
    if (code === 'Digit2') this.setLevel(32);
    if (code === 'Digit3') this.setLevel(64);
    super.onKeyDown(code);
  }

  buildVoxelCloud() {
    if (this.voxelCloud) {
      this.voxelCloud.parent?.remove(this.voxelCloud);
      disposeObject(this.voxelCloud);
    }
    const grid = this.level === 16 ? 4 : this.level === 32 ? 5 : 6;
    const layers = this.level === 16 ? 4 : this.level === 32 ? 5 : 6;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({ color: 0xb388ff, transparent: true, opacity: 0.15, wireframe: true, depthTest: true, depthWrite: false });
    const matrix = new THREE.Matrix4();
    const quat = new THREE.Quaternion();
    const range = this.voxelFrustumRange();
    const halfFov = rad(25);
    const aspect = this.game.camera.aspect || 1.6;
    const transforms = [];
    for (let layer = 0; layer < layers; layer++) {
      const depthT = (layer + 1) / layers;
      const depth = lerp(0.9, range, depthT);
      const halfH = Math.tan(halfFov) * depth;
      const halfW = halfH * aspect;
      const size = Math.max(0.12, Math.min(0.72, (halfH * 2) / (grid * 1.18)));
      for (let y = 0; y < grid; y++) {
        const ny = grid === 1 ? 0 : lerp(-1, 1, y / (grid - 1));
        for (let x = 0; x < grid; x++) {
          const onShell = x === 0 || y === 0 || x === grid - 1 || y === grid - 1 || layer === layers - 1;
          if (!onShell) continue;
          const nx = grid === 1 ? 0 : lerp(-1, 1, x / (grid - 1));
          const pos = this.beamOffset.clone().add(new THREE.Vector3(nx * halfW, ny * halfH, -depth));
          transforms.push({ pos, size });
        }
      }
    }
    this.voxelCloud = new THREE.InstancedMesh(geo, mat, transforms.length);
    transforms.forEach(({ pos, size }, i) => {
      matrix.compose(pos, quat, new THREE.Vector3(size, size, size));
      this.voxelCloud.setMatrixAt(i, matrix);
    });
    this.voxelCloud.instanceMatrix.needsUpdate = true;
    this.voxelCloud.renderOrder = 820;
    this.group.add(this.voxelCloud);
    this.updateVoxelFrustum();
  }

  voxelFrustumRange() {
    return this.level === 16 ? 5.8 : this.level === 32 ? 8.4 : 12.0;
  }

  updateVoxelFrustum() {
    const camera = this.game.camera;
    if (this.voxelCloud) {
      this.voxelCloud.position.copy(camera.position);
      this.voxelCloud.quaternion.copy(camera.quaternion);
    }
    if (this.scanCamera) {
      this.scanCamera.position.copy(this.handOffset.clone().applyQuaternion(camera.quaternion).add(camera.position));
      this.scanCamera.quaternion.copy(camera.quaternion);
    }
  }

  voxelCellSize() {
    const spanX = this.bounds.maxX - this.bounds.minX;
    const spanZ = this.bounds.maxZ - this.bounds.minZ;
    return Math.max(spanX, spanZ) / this.level;
  }

  voxelCenterFor(pos) {
    const cell = this.voxelCellSize();
    const quantize = (value, min, max) => {
      const cells = Math.max(1, Math.floor((max - min) / cell));
      const index = THREE.MathUtils.clamp(Math.floor((value - min) / cell), 0, cells - 1);
      return min + (index + 0.5) * cell;
    };
    return new THREE.Vector3(
      quantize(pos.x, this.bounds.minX, this.bounds.maxX),
      quantize(pos.y, 0, this.bounds.maxY),
      quantize(pos.z, this.bounds.minZ, this.bounds.maxZ)
    );
  }

  sampleVoxelGI(pos) {
    const cell = this.voxelCellSize();
    const cx = Math.floor((pos.x - this.bounds.minX) / cell);
    const cy = Math.floor(pos.y / cell);
    const cz = Math.floor((pos.z - this.bounds.minZ) / cell);
    const key = `${this.level}:${cx}:${cy}:${cz}`;
    if (!this.voxelCache.has(key)) {
      const center = this.voxelCenterFor(pos);
      this.voxelCache.set(key, this.oneBounceGI(center, { allowLeak: false }).scalar);
    }
    return this.voxelCache.get(key);
  }

  scanReveal(pos) {
    const camPos = this.game.camera.position.clone();
    const toTarget = pos.clone().sub(camPos);
    const dist = toTarget.length();
    if (dist < 0.001) return 1;
    if (segmentIntersectsThinWall(camPos, pos)) return 0;
    toTarget.normalize();
    const forward = new THREE.Vector3();
    this.game.camera.getWorldDirection(forward);
    const levelQuality = this.level / 64;
    const range = this.voxelFrustumRange();
    const cone = 0.92 - levelQuality * 0.36;
    const aim = forward.dot(toTarget);
    const scanWindow = clamp01((aim - cone) / (1 - cone)) * clamp01(1 - dist / range);
    const indirect = this.revealFromRadiance(this.sampleVoxelGI(pos));
    return scanWindow * indirect;
  }

  update(dt) {
    super.update(dt);
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { fly: true, distance: 1.2, height: 0.28, lookHeight: 0.05 });
    this.updateVoxelFrustum();
    this.updateHiders((pos) => this.scanReveal(pos));
    const levelQuality = this.level / 64;
    this.game.ui.updateScores(this.foundRows([
      { label: 'Voxel level', value: levelQuality, text: `${this.level}` },
      { label: 'Cell size', value: clamp01(1 - this.voxelCellSize() / 0.55), text: `${fmt(this.voxelCellSize(), 2)}m` },
      { label: 'GI cache', value: clamp01(this.voxelCache.size / 42), text: `${this.voxelCache.size} voxels` }
    ]));
  }
}

class VoxelHideSeekRoom extends RoomBase {
  constructor(game) {
    super(game);
    this.bounds = GI_ROOM_LIMITS;
    this.accent = 0xb388ff;
    this.wallX = -3.15;
    this.lightPos = new THREE.Vector3(-9.4, 4.75, 5.0);
    this.startPos = new THREE.Vector3(8.7, 1.15, 9.15);
    this.exitPos = new THREE.Vector3(8.8, 1.25, -9.55);
    this.routePoints = [
      new THREE.Vector3(8.7, 1.15, 9.15),
      new THREE.Vector3(6.5, 1.15, 5.2),
      new THREE.Vector3(7.4, 1.15, 1.0),
      new THREE.Vector3(5.4, 1.15, -2.8),
      new THREE.Vector3(8.45, 1.15, -6.3),
      new THREE.Vector3(8.8, 1.15, -9.55)
    ];
    this.settings = {
      resolution: 16,
      coneAperture: 'wide',
      wallThickness: 'thin',
      iterations: 3,
      intensity: 'high'
    };
    this.pendingSettings = { ...this.settings };
    this.revoxelizeCharges = 3;
    this.maxCaught = 1.5;
    this.dangerThreshold = 0.65;
    this.caughtMeter = 0;
    this.scanAngle = 0.35;
    this.fieldUpdateTimer = 0;
    this.debugVisible = true;
    this.voxelCells = [];
    this.voxelMesh = null;
    this.leakGhosts = [];
    this.leakVoxelCount = 99;
    this.rawLeakCells = 0;
    this.routeScore = 0;
    this.giBudget = 0;
    this.playerBrightness = 0;
    this.resetCooldown = 0;
    this.exitPortal = null;
    this.routeLine = null;
    this.scannerLight = null;
    this.scannerTarget = null;
    this.scannerLamp = null;
  }

  enter() {
    super.enter();
    this.setupPlayer(this.startPos, { fly: true, color: this.accent });
    this.game.setCamera(this.startPos.clone().add(new THREE.Vector3(0, 0.35, 1.4)), new THREE.Vector3(7.6, 1.25, 5.0));
    this.buildMazeScene();
    this.buildVoxelGrid();
    this.buildControls();
    this.game.ui.setRoom(
      '7. Voxel Shadow Route',
      '방 전체가 voxel 밝기 맵입니다. 밝은 칸에 오래 있으면 caught meter가 차고 시작 지점으로 돌아갑니다. 콘솔에서 resolution, cone, wall thickness를 정한 뒤 <b>R</b>로 Revoxelize해서 빛 누수를 줄이고, 파란 어두운 경로를 따라 출구로 가세요.'
    );
  }

  buildMazeScene() {
    const shell = buildRoomShell(this.group, this.accent, {
      floorColor: 0x0d1118,
      wallColor: 0x101521,
      width: 25.6,
      depth: 24.2,
      height: 5.4
    });
    this.door = shell.door;
    this.group.add(new THREE.HemisphereLight(0x65708b, 0x06070c, 0.38));

    const ceiling = new THREE.Mesh(
      new THREE.BoxGeometry(25.6, 0.08, 24.2),
      makeMat(0x0b1018, { roughness: 0.84 })
    );
    ceiling.position.set(0, this.bounds.maxY - 0.12, -0.15);
    ceiling.receiveShadow = true;
    this.group.add(ceiling);

    const frontWall = new THREE.Mesh(
      new THREE.BoxGeometry(25.6, 5.4, 0.12),
      makeMat(0x0f1420, { roughness: 0.8 })
    );
    frontWall.position.set(0, 2.7, this.bounds.maxZ - 0.08);
    frontWall.receiveShadow = true;
    this.group.add(frontWall);

    const lightZone = new THREE.Mesh(
      new THREE.BoxGeometry(7.1, 0.045, 17.8),
      new THREE.MeshBasicMaterial({ color: 0xff2937, transparent: true, opacity: 0.13, depthWrite: false })
    );
    lightZone.position.set(-7.8, 0.045, -0.4);
    this.group.add(lightZone);

    const wallMat = makeMat(0xdce5f7, { roughness: 0.72, transparent: true, opacity: 0.86 });
    const thinWall = new THREE.Mesh(new THREE.BoxGeometry(0.24, 5.05, 19.4), wallMat);
    thinWall.position.set(this.wallX, 2.53, -0.25);
    thinWall.castShadow = true;
    thinWall.receiveShadow = true;
    this.group.add(thinWall);

    const crackMat = makeMat(0xff4050, { emissive: 0xff1628, emissiveIntensity: 0.35, transparent: true, opacity: 0.75 });
    for (const z of [-6.8, -2.1, 2.6, 6.4]) {
      const crack = new THREE.Mesh(new THREE.BoxGeometry(0.035, 2.6, 0.08), crackMat);
      crack.position.set(this.wallX + 0.15, 1.8, z);
      this.group.add(crack);
    }

    this.scannerTarget = new THREE.Object3D();
    this.group.add(this.scannerTarget);
    this.scannerLight = new THREE.SpotLight(0xff3445, 1.15, 20, rad(24), 0.55, 1.35);
    this.scannerLight.position.copy(this.lightPos);
    this.scannerLight.target = this.scannerTarget;
    this.scannerLight.castShadow = true;
    this.group.add(this.scannerLight);
    this.scannerLamp = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 20, 12),
      makeMat(0xff3445, { emissive: 0xff2030, emissiveIntensity: 0.5 })
    );
    this.scannerLamp.position.copy(this.lightPos);
    this.group.add(this.scannerLamp);

    const exitMat = makeMat(0x4da3ff, { emissive: 0x247cff, emissiveIntensity: 0.28, transparent: true, opacity: 0.84 });
    const exitPad = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 1.1, 0.08, 36), exitMat);
    exitPad.position.set(this.exitPos.x, 0.06, this.exitPos.z);
    this.group.add(exitPad);
    const exitRing = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.035, 12, 42), exitMat);
    exitRing.position.copy(this.exitPos);
    exitRing.rotation.x = Math.PI / 2;
    this.group.add(exitRing);
    this.exitPortal = exitRing;

    const startPad = new THREE.Mesh(
      new THREE.CylinderGeometry(0.82, 0.94, 0.06, 36),
      makeMat(0x46f0c8, { emissive: 0x1bd0a8, emissiveIntensity: 0.45, transparent: true, opacity: 0.72 })
    );
    startPad.position.set(this.startPos.x, 0.04, this.startPos.z);
    this.group.add(startPad);

    const routeGeo = new THREE.BufferGeometry().setFromPoints(
      this.routePoints.map((p) => new THREE.Vector3(p.x, 0.16, p.z))
    );
    this.routeLine = new THREE.Line(
      routeGeo,
      new THREE.LineBasicMaterial({ color: 0x4da3ff, transparent: true, opacity: 0.65, depthTest: false })
    );
    this.routeLine.renderOrder = 900;
    this.group.add(this.routeLine);

    const guide = createCanvasLabel('Voxel Light Maze\n밝은 칸은 위험, 파란 칸은 탈출 경로', {
      scale: 0.72,
      fontSize: 30,
      color: '#b388ff',
      background: 'rgba(0,0,0,0.62)'
    });
    guide.position.set(0, 4.55, -8.3);
    this.group.add(guide);

    const exitLabel = createCanvasLabel('EXIT\nleak < 8 / budget <= 100', {
      scale: 0.42,
      fontSize: 28,
      color: '#4da3ff',
      background: 'rgba(0,0,0,0.62)'
    });
    exitLabel.position.set(this.exitPos.x, 2.25, this.exitPos.z);
    this.group.add(exitLabel);

    this.createLeakGhosts();
    this.updateScannerVisuals();
  }

  createLeakGhosts() {
    const ghostMat = new THREE.MeshBasicMaterial({ color: 0xff263b, transparent: true, opacity: 0.76, depthWrite: false });
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xff7685, transparent: true, opacity: 0.52, depthWrite: false });
    for (let i = 0; i < 12; i++) {
      const ghost = new THREE.Group();
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 10), ghostMat);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.012, 8, 28), ringMat);
      ring.rotation.x = Math.PI / 2;
      ghost.add(core, ring);
      ghost.visible = false;
      ghost.renderOrder = 910;
      this.group.add(ghost);
      this.leakGhosts.push(ghost);
    }
  }

  buildControls() {
    const pending = this.pendingSettings;
    const live = this.settings;
    const dirty = ['resolution', 'coneAperture', 'wallThickness', 'iterations', 'intensity']
      .some((key) => pending[key] !== live[key]);
    const label = this.settingLabels(pending);
    const liveLabel = this.settingLabels(live);
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Voxel Light Maze Console</h3>
        <p class="small-text">1/2/3: resolution, 4/5/6: cone, 7/8/9: wall thickness, Q/E: iterations, Z/X: intensity, R: Revoxelize, T: debug grid.</p>
        <p class="small-text">Live: ${live.resolution}³ / ${liveLabel.cone} / ${liveLabel.wall} / iter ${live.iterations} / ${liveLabel.intensity}<br>Pending: ${pending.resolution}³ / ${label.cone} / ${label.wall} / iter ${pending.iterations} / ${label.intensity} ${dirty ? '<b>READY</b>' : ''}</p>
      </div>
      <div class="control-card">
        <h3>Resolution</h3>
        <div class="button-grid">
          <button id="voxRes16" class="${pending.resolution === 16 ? 'active' : ''}">1 16³</button>
          <button id="voxRes32" class="${pending.resolution === 32 ? 'active' : ''}">2 32³</button>
          <button id="voxRes64" class="${pending.resolution === 64 ? 'active' : ''}">3 64³</button>
        </div>
      </div>
      <div class="control-card">
        <h3>Cone Aperture</h3>
        <div class="button-grid">
          <button id="voxConeN" class="${pending.coneAperture === 'narrow' ? 'active' : ''}">4 Narrow</button>
          <button id="voxConeM" class="${pending.coneAperture === 'medium' ? 'active' : ''}">5 Medium</button>
          <button id="voxConeW" class="${pending.coneAperture === 'wide' ? 'active' : ''}">6 Wide</button>
        </div>
      </div>
      <div class="control-card">
        <h3>Wall / Propagation</h3>
        <div class="button-grid">
          <button id="voxWallT" class="${pending.wallThickness === 'thin' ? 'active' : ''}">7 Thin</button>
          <button id="voxWallN" class="${pending.wallThickness === 'normal' ? 'active' : ''}">8 Normal</button>
          <button id="voxWallK" class="${pending.wallThickness === 'thick' ? 'active' : ''}">9 Thick</button>
        </div>
        <div class="button-grid">
          <button id="voxIterDown">Q Iter -</button>
          <button disabled>Iter ${pending.iterations}</button>
          <button id="voxIterUp">E Iter +</button>
        </div>
      </div>
      <div class="control-card">
        <h3>Intensity / Apply</h3>
        <div class="button-grid">
          <button id="voxIntLow" class="${pending.intensity === 'low' ? 'active' : ''}">Low</button>
          <button id="voxIntMed" class="${pending.intensity === 'medium' ? 'active' : ''}">Medium</button>
          <button id="voxIntHigh" class="${pending.intensity === 'high' ? 'active' : ''}">High</button>
        </div>
        <div class="button-grid">
          <button id="voxApply" ${this.revoxelizeCharges <= 0 ? 'disabled' : ''}>R Revoxelize</button>
          <button id="voxDebug" class="${this.debugVisible ? 'active' : ''}">T Debug</button>
          <button disabled>${this.revoxelizeCharges}/3 left</button>
        </div>
      </div>
    `);
    this.listen(getEl('voxRes16'), 'click', () => this.setPending('resolution', 16));
    this.listen(getEl('voxRes32'), 'click', () => this.setPending('resolution', 32));
    this.listen(getEl('voxRes64'), 'click', () => this.setPending('resolution', 64));
    this.listen(getEl('voxConeN'), 'click', () => this.setPending('coneAperture', 'narrow'));
    this.listen(getEl('voxConeM'), 'click', () => this.setPending('coneAperture', 'medium'));
    this.listen(getEl('voxConeW'), 'click', () => this.setPending('coneAperture', 'wide'));
    this.listen(getEl('voxWallT'), 'click', () => this.setPending('wallThickness', 'thin'));
    this.listen(getEl('voxWallN'), 'click', () => this.setPending('wallThickness', 'normal'));
    this.listen(getEl('voxWallK'), 'click', () => this.setPending('wallThickness', 'thick'));
    this.listen(getEl('voxIterDown'), 'click', () => this.shiftIterations(-1));
    this.listen(getEl('voxIterUp'), 'click', () => this.shiftIterations(1));
    this.listen(getEl('voxIntLow'), 'click', () => this.setPending('intensity', 'low'));
    this.listen(getEl('voxIntMed'), 'click', () => this.setPending('intensity', 'medium'));
    this.listen(getEl('voxIntHigh'), 'click', () => this.setPending('intensity', 'high'));
    this.listen(getEl('voxApply'), 'click', () => this.revoxelize());
    this.listen(getEl('voxDebug'), 'click', () => this.toggleDebug());
  }

  settingLabels(settings) {
    return {
      cone: { narrow: 'Narrow', medium: 'Medium', wide: 'Wide' }[settings.coneAperture],
      wall: { thin: 'Thin', normal: 'Normal', thick: 'Thick' }[settings.wallThickness],
      intensity: { low: 'Low', medium: 'Medium', high: 'High' }[settings.intensity]
    };
  }

  setPending(key, value) {
    this.pendingSettings = { ...this.pendingSettings, [key]: value };
    this.buildControls();
  }

  shiftIterations(delta) {
    const next = THREE.MathUtils.clamp(this.pendingSettings.iterations + delta, 1, 4);
    this.setPending('iterations', next);
  }

  shiftIntensity(delta) {
    const order = ['low', 'medium', 'high'];
    const index = order.indexOf(this.pendingSettings.intensity);
    const next = THREE.MathUtils.clamp(index + delta, 0, order.length - 1);
    this.setPending('intensity', order[next]);
  }

  toggleDebug() {
    this.debugVisible = !this.debugVisible;
    if (this.voxelMesh) this.voxelMesh.visible = this.debugVisible;
    if (this.routeLine) this.routeLine.visible = this.debugVisible;
    this.buildControls();
  }

  onKeyDown(code) {
    if (code === 'Digit1') this.setPending('resolution', 16);
    else if (code === 'Digit2') this.setPending('resolution', 32);
    else if (code === 'Digit3') this.setPending('resolution', 64);
    else if (code === 'Digit4') this.setPending('coneAperture', 'narrow');
    else if (code === 'Digit5') this.setPending('coneAperture', 'medium');
    else if (code === 'Digit6') this.setPending('coneAperture', 'wide');
    else if (code === 'Digit7') this.setPending('wallThickness', 'thin');
    else if (code === 'Digit8') this.setPending('wallThickness', 'normal');
    else if (code === 'Digit9') this.setPending('wallThickness', 'thick');
    else if (code === 'KeyQ') this.shiftIterations(-1);
    else if (code === 'KeyE') this.shiftIterations(1);
    else if (code === 'KeyZ') this.shiftIntensity(-1);
    else if (code === 'KeyX') this.shiftIntensity(1);
    else if (code === 'KeyR') this.revoxelize();
    else if (code === 'KeyT') this.toggleDebug();
    else super.onKeyDown(code);
  }

  revoxelize() {
    if (this.revoxelizeCharges <= 0) {
      this.game.ui.showToast('Revoxelize 횟수를 모두 사용했습니다. 현재 grid로 탈출해야 합니다.');
      return;
    }
    this.settings = { ...this.pendingSettings };
    this.revoxelizeCharges -= 1;
    this.buildVoxelGrid();
    this.buildControls();
    this.game.ui.showToast('Voxel field를 다시 계산했습니다. 밝은 칸과 붉은 leak ghost를 확인하세요.');
  }

  visualGridSize() {
    if (this.settings.resolution === 16) return { x: 12, y: 4, z: 12 };
    if (this.settings.resolution === 32) return { x: 18, y: 5, z: 18 };
    return { x: 24, y: 6, z: 24 };
  }

  buildVoxelGrid() {
    if (this.voxelMesh) {
      this.voxelMesh.parent?.remove(this.voxelMesh);
      disposeObject(this.voxelMesh);
      this.voxelMesh = null;
    }
    const grid = this.visualGridSize();
    const spanX = this.bounds.maxX - this.bounds.minX;
    const spanY = this.bounds.maxY - this.bounds.minY;
    const spanZ = this.bounds.maxZ - this.bounds.minZ;
    const cellX = spanX / grid.x;
    const cellY = spanY / grid.y;
    const cellZ = spanZ / grid.z;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.34,
      depthWrite: false
    });
    this.voxelCells = [];
    const count = grid.x * grid.y * grid.z;
    this.voxelMesh = new THREE.InstancedMesh(geo, mat, count);
    const matrix = new THREE.Matrix4();
    let i = 0;
    for (let y = 0; y < grid.y; y++) {
      for (let z = 0; z < grid.z; z++) {
        for (let x = 0; x < grid.x; x++) {
          const pos = new THREE.Vector3(
            this.bounds.minX + (x + 0.5) * cellX,
            this.bounds.minY + (y + 0.5) * cellY,
            this.bounds.minZ + (z + 0.5) * cellZ
          );
          const scale = new THREE.Vector3(cellX * 0.72, cellY * 0.58, cellZ * 0.72);
          matrix.compose(pos, new THREE.Quaternion(), scale);
          this.voxelMesh.setMatrixAt(i, matrix);
          this.voxelCells.push({ pos, radiance: 0, leak: false, safe: false, routeCandidate: false });
          i++;
        }
      }
    }
    this.voxelMesh.instanceMatrix.needsUpdate = true;
    this.voxelMesh.renderOrder = 720;
    this.voxelMesh.visible = this.debugVisible;
    this.group.add(this.voxelMesh);
    this.updateVoxelField(true);
  }

  intensityScalar(settings = this.settings) {
    return { low: 0.74, medium: 1.0, high: 1.28 }[settings.intensity];
  }

  apertureInfo(settings = this.settings) {
    return {
      narrow: { coneEdge: 0.72, spread: 0.72, falloff: 4.25 },
      medium: { coneEdge: 0.46, spread: 1.0, falloff: 5.8 },
      wide: { coneEdge: 0.12, spread: 1.45, falloff: 7.8 }
    }[settings.coneAperture];
  }

  computeBudget(settings = this.settings) {
    const resCost = { 16: 34, 32: 78, 64: 205 }[settings.resolution];
    const coneCost = { narrow: -4, medium: 0, wide: 7 }[settings.coneAperture];
    const wallCost = { thin: 0, normal: 6, thick: 10 }[settings.wallThickness];
    const intensityCost = { low: -2, medium: 0, high: 4 }[settings.intensity];
    return Math.round(resCost + coneCost + wallCost + intensityCost + Math.max(0, settings.iterations - 2) * 6);
  }

  leakSeverity(settings = this.settings) {
    const resolutionLeak = { 16: 1.0, 32: 0.42, 64: 0.12 }[settings.resolution];
    const wallLeak = { thin: 1.0, normal: 0.52, thick: 0.22 }[settings.wallThickness];
    const iterationLeak = 0.78 + settings.iterations * 0.14;
    return resolutionLeak * wallLeak * this.apertureInfo(settings).spread * iterationLeak * this.intensityScalar(settings);
  }

  scanDirection() {
    return new THREE.Vector3(
      0.82 + Math.cos(this.scanAngle) * 0.24,
      0,
      Math.sin(this.scanAngle) * 0.72
    ).normalize();
  }

  distancePointToSegment2D(pos, a, b) {
    const abx = b.x - a.x;
    const abz = b.z - a.z;
    const apx = pos.x - a.x;
    const apz = pos.z - a.z;
    const lenSq = abx * abx + abz * abz;
    const t = lenSq > 0 ? THREE.MathUtils.clamp((apx * abx + apz * abz) / lenSq, 0, 1) : 0;
    const px = a.x + abx * t;
    const pz = a.z + abz * t;
    return Math.hypot(pos.x - px, pos.z - pz);
  }

  distanceToRoute(pos) {
    let best = Infinity;
    for (let i = 0; i < this.routePoints.length - 1; i++) {
      best = Math.min(best, this.distancePointToSegment2D(pos, this.routePoints[i], this.routePoints[i + 1]));
    }
    return best;
  }

  computeVoxelSample(pos) {
    const settings = this.settings;
    const aperture = this.apertureInfo(settings);
    const intensity = this.intensityScalar(settings);
    const toCell = pos.clone().sub(this.lightPos);
    const flat = new THREE.Vector3(toCell.x, 0, toCell.z);
    if (flat.lengthSq() < 0.0001) flat.set(1, 0, 0);
    flat.normalize();
    const beam = clamp01((flat.dot(this.scanDirection()) - aperture.coneEdge) / (1 - aperture.coneEdge));
    const dist = Math.max(0.5, toCell.length());
    const inLightRoom = pos.x < this.wallX - 0.5;
    const behindWall = pos.x > this.wallX + 0.18;
    const direct = inLightRoom
      ? clamp01((0.28 + beam * 0.88) * clamp01(1 - dist / 18) * intensity * 1.2)
      : 0;
    const pastWall = Math.max(0, pos.x - this.wallX);
    const wallFalloff = Math.exp(-pastWall / aperture.falloff);
    const exitGate = 0.25 + 0.75 * clamp01((8.5 - pos.z) / 17.5);
    const heightBand = 0.58 + 0.42 * clamp01(1 - Math.abs(pos.y - 1.45) / 4.2);
    const leakAmount = behindWall
      ? this.leakSeverity(settings) * wallFalloff * exitGate * heightBand * (0.72 + beam * 0.88)
      : 0;
    const globalSpread = (0.02 + settings.iterations * 0.018) * aperture.spread * intensity;
    const routeMask = clamp01(1 - this.distanceToRoute(pos) / 1.25) * clamp01(1 - Math.abs(pos.y - 1.25) / 2.8);
    const routeCooling = routeMask * ({ thin: 0, normal: 0.025, thick: 0.06 }[settings.wallThickness]);
    const radiance = clamp01(direct + leakAmount + globalSpread - routeCooling);
    const routeCandidate = routeMask > 0.38;
    const leak = behindWall && leakAmount > 0.44 && radiance > 0.62 && pos.y < 4.5;
    const safe = routeCandidate && radiance < this.dangerThreshold && this.computeBudget(settings) <= 100;
    return { radiance, leak, safe, routeCandidate, beam, leakAmount };
  }

  computeRouteScore() {
    let total = 0;
    let safe = 0;
    for (let i = 0; i < this.routePoints.length - 1; i++) {
      const a = this.routePoints[i];
      const b = this.routePoints[i + 1];
      for (let j = 0; j < 7; j++) {
        const t = j / 6;
        const pos = new THREE.Vector3(
          lerp(a.x, b.x, t),
          1.2,
          lerp(a.z, b.z, t)
        );
        const sample = this.computeVoxelSample(pos);
        total++;
        if (sample.radiance < this.dangerThreshold) safe++;
      }
    }
    return total ? safe / total : 0;
  }

  colorForSample(sample, color, pulse) {
    if (sample.leak) {
      color.setRGB(1.0, 0.04 + pulse * 0.16, 0.06);
      return;
    }
    if (sample.safe) {
      color.setRGB(0.06, 0.32 + pulse * 0.24, 1.0);
      return;
    }
    const t = clamp01((sample.radiance - 0.04) / 0.78);
    if (t > 0.74) {
      color.setRGB(1.0, 0.18 + (1 - t) * 0.42, 0.05);
    } else {
      color.setRGB(0.06 + t * 0.76, 0.1 + t * 0.54, 0.24 - t * 0.08);
    }
  }

  updateVoxelField(force = false) {
    if (!this.voxelMesh) return;
    if (!force && this.fieldUpdateTimer < 0.2) return;
    this.fieldUpdateTimer = 0;
    const color = new THREE.Color();
    const pulse = 0.5 + Math.sin(performance.now() * 0.008) * 0.5;
    let rawLeakCells = 0;
    let i = 0;
    for (const cell of this.voxelCells) {
      const sample = this.computeVoxelSample(cell.pos);
      cell.radiance = sample.radiance;
      cell.leak = sample.leak;
      cell.safe = sample.safe;
      cell.routeCandidate = sample.routeCandidate;
      if (cell.leak) rawLeakCells++;
      this.colorForSample(sample, color, pulse);
      this.voxelMesh.setColorAt(i, color);
      i++;
    }
    if (this.voxelMesh.instanceColor) this.voxelMesh.instanceColor.needsUpdate = true;
    this.rawLeakCells = rawLeakCells;
    this.leakVoxelCount = Math.round(rawLeakCells / Math.max(1, this.voxelCells.length / 60));
    this.routeScore = this.computeRouteScore();
    this.giBudget = this.computeBudget();
    this.updateLeakGhosts(pulse);
  }

  updateLeakGhosts(pulse = 0.5) {
    const candidates = this.voxelCells
      .filter((cell) => cell.leak && cell.pos.y > 0.65 && cell.pos.y < 2.9)
      .sort((a, b) => b.radiance - a.radiance)
      .slice(0, this.leakGhosts.length);
    for (let i = 0; i < this.leakGhosts.length; i++) {
      const ghost = this.leakGhosts[i];
      const cell = candidates[i];
      ghost.visible = !!cell;
      if (!cell) continue;
      ghost.position.copy(cell.pos);
      ghost.scale.setScalar(0.85 + pulse * 0.25);
    }
  }

  updateScannerVisuals() {
    const dir = this.scanDirection();
    if (this.scannerTarget) {
      this.scannerTarget.position.copy(this.lightPos).add(new THREE.Vector3(dir.x * 12, -3.2, dir.z * 12));
      this.scannerTarget.updateMatrixWorld();
    }
    if (this.scannerLamp) {
      this.scannerLamp.position.copy(this.lightPos);
      this.scannerLamp.scale.setScalar(1 + Math.sin(performance.now() * 0.005) * 0.08);
    }
    if (this.exitPortal) {
      this.exitPortal.rotation.z += 0.025;
      const ready = this.exitReady();
      const mat = this.exitPortal.material;
      mat.emissiveIntensity = ready ? 0.5 : 0.22;
      mat.color.setHex(ready ? 0x46f0c8 : 0x4da3ff);
    }
  }

  exitReady() {
    return this.leakVoxelCount < 8 && this.giBudget <= 100 && this.routeScore >= 0.72 && this.caughtMeter < this.maxCaught;
  }

  resetVoxelRoom() {
    this.player.position.copy(this.startPos);
    this.caughtMeter = 0.12;
    this.resetCooldown = 0.8;
    this.game.keys.clear();
    this.game.ui.showToast('밝은 voxel에 너무 오래 노출되어 시작 지점으로 돌아왔습니다.');
  }

  updateCaughtMeter(dt, brightness) {
    if (this.resetCooldown > 0) {
      this.resetCooldown -= dt;
      return;
    }
    if (brightness > this.dangerThreshold) {
      this.caughtMeter += dt * (0.58 + (brightness - this.dangerThreshold) * 2.4);
    } else {
      this.caughtMeter -= dt * 0.5;
    }
    for (const ghost of this.leakGhosts) {
      if (!ghost.visible) continue;
      const dist = this.player.position.distanceTo(ghost.position);
      if (dist < 1.5) this.caughtMeter += dt * 2.0 * clamp01(1 - dist / 1.5);
    }
    this.caughtMeter = THREE.MathUtils.clamp(this.caughtMeter, 0, this.maxCaught + 0.25);
    if (this.caughtMeter > this.maxCaught) this.resetVoxelRoom();
  }

  update(dt) {
    super.update(dt);
    this.scanAngle += dt * 0.52;
    this.fieldUpdateTimer += dt;
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { fly: true, distance: 1.15, height: 0.35, lookHeight: 0.05 });
    this.updateScannerVisuals();
    this.updateVoxelField();

    const sample = this.computeVoxelSample(this.player.position);
    this.playerBrightness = sample.radiance;
    this.updateCaughtMeter(dt, this.playerBrightness);

    const exitDist = this.player.position.distanceTo(this.exitPos);
    const reachedExit = exitDist < 1.45;
    const ready = this.exitReady();
    if (reachedExit && ready) {
      this.complete('Voxel Shadow Route를 통과했습니다. 모든 방을 탈출했습니다!');
    } else if (reachedExit && !ready && !this.solved) {
      this.game.ui.showToast('출구는 보이지만 아직 조건이 부족합니다. leak, budget, dark route를 다시 확인하세요.');
    }

    const safety = clamp01(1 - this.playerBrightness / this.dangerThreshold);
    const leakOk = this.leakVoxelCount < 8;
    const budgetOk = this.giBudget <= 100;
    const routeOk = this.routeScore >= 0.72;
    this.score = (leakOk ? 0.28 : clamp01(1 - this.leakVoxelCount / 22) * 0.28) +
      (budgetOk ? 0.24 : clamp01(1 - (this.giBudget - 100) / 140) * 0.24) +
      this.routeScore * 0.28 +
      (1 - this.caughtMeter / this.maxCaught) * 0.2;
    this.game.ui.updateScores([
      { label: 'Safety', value: safety, text: `${fmt(this.playerBrightness, 2)} rad`, bad: this.playerBrightness > this.dangerThreshold },
      { label: 'Caught', value: this.caughtMeter / this.maxCaught, text: `${fmt(this.caughtMeter, 2)}/1.50`, bad: this.caughtMeter > 1.0 },
      { label: 'Leak voxels', value: clamp01(1 - this.leakVoxelCount / 18), text: `${this.leakVoxelCount}/8`, bad: !leakOk },
      { label: 'GI budget', value: clamp01(1 - this.giBudget / 180), text: `${this.giBudget}/100`, bad: !budgetOk },
      { label: 'Dark route', value: this.routeScore, text: `${Math.round(this.routeScore * 100)}%`, bad: !routeOk },
      { label: 'Revoxelize', value: this.revoxelizeCharges / 3, text: `${this.revoxelizeCharges}/3` },
      { label: '출구 잠금', value: ready ? clamp01(1 - exitDist / 12) : this.score, text: ready ? '진입' : '잠김' }
    ]);
  }
}

class SpecularVoxelGIRoom extends GIHideSeekBase {
  constructor(game) {
    super(game, 0xb388ff);
    this.voxelLevel = 32;
    this.voxelScans = [];
    this.maxScans = 7;
    this.specularPanels = [];
    this.capturePeak = 0;
    this.scanPulse = 0;
  }

  enter() {
    super.enter();
    this.enemyRevealThreshold = 0.5;
    this.setupPlayer(new THREE.Vector3(8.6, 1.25, 9.2), { fly: true, color: this.accent });
    this.game.setCamera(new THREE.Vector3(8.6, 1.6, 10.5), new THREE.Vector3(6.6, 1.35, 6.8));
    this.createGun();
    this.buildSpecularRoom();
    this.spawnSpecularRunners();
    this.listen(this.game.renderer.domElement, 'pointerdown', (event) => {
      if (event.button === 0 && document.pointerLockElement === this.game.renderer.domElement) this.fireGun();
    });
    this.buildControls();
    this.game.ui.setRoom(
      '7. Specular Voxel GI Hunt',
      '도망자는 diffuse나 ambient에는 보이지 않고, specular high-frequency가 voxel GI gun에 포착된 순간에만 드러납니다. E로 원하는 구역을 voxelize하고, 보이는 도망자만 좌클릭으로 맞히세요.'
    );
  }

  buildSpecularRoom() {
    this.game.scene.background = new THREE.Color(0x131827);
    this.game.scene.fog = new THREE.Fog(0x131827, 18, 48);
    const shell = buildRoomShell(this.group, this.accent, {
      floorColor: 0x202736,
      wallColor: 0x2b3342,
      width: 35.6,
      depth: 32.2,
      height: 5.4
    });
    this.door = shell.door;
    this.group.add(new THREE.HemisphereLight(0x9eb4df, 0x0a0d16, 0.42));
    const key = new THREE.DirectionalLight(0xdde7ff, 0.48);
    key.position.set(-7.5, 8.0, 8.0);
    key.castShadow = true;
    this.group.add(key);

    const ceiling = new THREE.Mesh(
      new THREE.BoxGeometry(35.6, 0.08, 32.2),
      makeMat(0x1d2431, { roughness: 0.82 })
    );
    ceiling.position.set(0, this.bounds.maxY - 0.12, -0.15);
    ceiling.receiveShadow = true;
    this.group.add(ceiling);

    const frontWall = new THREE.Mesh(
      new THREE.BoxGeometry(35.6, 5.4, 0.12),
      makeMat(0x303847, { roughness: 0.78 })
    );
    frontWall.position.set(0, 2.7, this.bounds.maxZ - 0.08);
    frontWall.receiveShadow = true;
    this.group.add(frontWall);

    const blocker = new THREE.Mesh(
      new THREE.BoxGeometry(1.26, 4.35, 7.55),
      makeMat(0x555f70, { roughness: 0.54, metalness: 0.08 })
    );
    blocker.position.set(0.45, 2.18, -0.82);
    blocker.castShadow = true;
    blocker.receiveShadow = true;
    this.group.add(blocker);

    const trimMat = makeMat(0x141b28, { roughness: 0.72 });
    const gridMat = new THREE.LineBasicMaterial({ color: 0x566272, transparent: true, opacity: 0.45 });
    const gridPoints = [];
    const y = 0.035;
    for (let x = -16; x <= 16; x += 4) {
      gridPoints.push(new THREE.Vector3(x, y, this.bounds.minZ + 0.7));
      gridPoints.push(new THREE.Vector3(x, y, this.bounds.maxZ - 0.7));
    }
    for (let z = -14; z <= 14; z += 4) {
      gridPoints.push(new THREE.Vector3(this.bounds.minX + 1.0, y, z));
      gridPoints.push(new THREE.Vector3(this.bounds.maxX - 1.0, y, z));
    }
    const grid = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(gridPoints), gridMat);
    this.group.add(grid);
    for (const z of [this.bounds.minZ + 0.4, this.bounds.maxZ - 0.15]) {
      const trim = new THREE.Mesh(new THREE.BoxGeometry(34.6, 0.08, 0.08), trimMat);
      trim.position.set(0, 0.42, z);
      this.group.add(trim);
    }

    this.addSpecularPanel({
      pos: new THREE.Vector3(this.bounds.minX + 0.65, 2.55, -6.0),
      normal: new THREE.Vector3(1, 0, 0),
      size: new THREE.Vector3(0.08, 2.25, 4.1),
      color: 0x65e6ff,
      phase: 0.2,
      strength: 1.05,
      range: 18
    });
    this.addSpecularPanel({
      pos: new THREE.Vector3(this.bounds.maxX - 0.65, 2.8, 5.1),
      normal: new THREE.Vector3(-1, 0, 0),
      size: new THREE.Vector3(0.08, 2.6, 4.6),
      color: 0xd7a5ff,
      phase: 1.35,
      strength: 1.15,
      range: 18
    });
    this.addSpecularPanel({
      pos: new THREE.Vector3(-4.2, this.bounds.maxY - 0.32, 2.0),
      normal: new THREE.Vector3(0, -1, 0),
      size: new THREE.Vector3(6.2, 0.06, 2.2),
      color: 0xffd166,
      phase: 2.2,
      strength: 0.9,
      range: 16
    });
    this.addSpecularPanel({
      pos: new THREE.Vector3(6.2, 0.09, -3.4),
      normal: new THREE.Vector3(0, 1, 0),
      size: new THREE.Vector3(4.2, 0.05, 3.1),
      color: 0x8fb4ff,
      phase: 3.0,
      strength: 1.0,
      range: 14
    });
  }

  addSpecularPanel({ pos, normal, size, color, phase, strength, range }) {
    const mat = makeMat(color, {
      roughness: 0.16,
      metalness: 0.72,
      emissive: color,
      emissiveIntensity: 0.28
    });
    const panel = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), mat);
    panel.position.copy(pos);
    panel.castShadow = true;
    panel.receiveShadow = true;
    this.group.add(panel);
    const glow = new THREE.PointLight(color, 0.45, 8.5, 2);
    glow.position.copy(pos).add(normal.clone().multiplyScalar(0.5));
    this.group.add(glow);
    this.specularPanels.push({
      pos: pos.clone(),
      normal: normal.clone().normalize(),
      phase,
      strength,
      range
    });
  }

  spawnSpecularRunners() {
    const positions = [
      new THREE.Vector3(-11.0, 0.4, -5.2),
      new THREE.Vector3(9.4, 1.0, 5.4),
      new THREE.Vector3(-3.8, 2.7, 1.8),
      new THREE.Vector3(6.6, 0.55, -4.6),
      new THREE.Vector3(12.0, 2.35, -8.0)
    ];
    positions.forEach((pos, index) => {
      const runner = createHumanoid(index % 2 ? 0xd7a5ff : 0x65e6ff);
      runner.position.copy(pos);
      runner.userData.id = index;
      runner.userData.enemyTarget = this.randomEnemyTarget(pos);
      runner.userData.enemySpeed = 1.95 + index * 0.18;
      runner.userData.enemyPhase = Math.random() * Math.PI * 2;
      runner.userData.eliminated = false;
      runner.userData.specularOnly = true;
      this.group.add(runner);
      setObjectOpacity(runner, 0);
      this.hiders.push(runner);
    });
  }

  buildControls() {
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>Voxel GI Gun</h3>
        <div class="button-grid">
          <button id="voxSpec16" class="${this.voxelLevel === 16 ? 'active' : ''}">1 16</button>
          <button id="voxSpec32" class="${this.voxelLevel === 32 ? 'active' : ''}">2 32</button>
          <button id="voxSpec64" class="${this.voxelLevel === 64 ? 'active' : ''}">3 64</button>
        </div>
        <div class="button-grid">
          <button id="voxSpecScan">E Voxelize</button>
          <button id="voxSpecClear" class="danger">C 초기화</button>
        </div>
        <p class="small-text">WASD 이동, Shift 달리기, Space 상승, Q/Ctrl 하강. 64 level은 작은 영역을 촘촘히 voxelize해서 specular high-frequency를 더 잘 잡습니다. 좌클릭은 포착된 도망자에게만 맞습니다.</p>
      </div>
    `);
    this.listen(getEl('voxSpec16'), 'click', () => this.setVoxelLevel(16));
    this.listen(getEl('voxSpec32'), 'click', () => this.setVoxelLevel(32));
    this.listen(getEl('voxSpec64'), 'click', () => this.setVoxelLevel(64));
    this.listen(getEl('voxSpecScan'), 'click', () => this.placeVoxelScan());
    this.listen(getEl('voxSpecClear'), 'click', () => this.clearVoxelScans());
  }

  setVoxelLevel(level) {
    this.voxelLevel = level;
    this.buildControls();
  }

  onKeyDown(code) {
    if (code === 'Digit1') this.setVoxelLevel(16);
    else if (code === 'Digit2') this.setVoxelLevel(32);
    else if (code === 'Digit3') this.setVoxelLevel(64);
    else if (code === 'KeyE') this.placeVoxelScan();
    else if (code === 'KeyC') this.clearVoxelScans();
    super.onKeyDown(code);
  }

  voxelConfig() {
    return {
      16: { grid: 3, span: 6.2, quality: 0.54 },
      32: { grid: 4, span: 4.8, quality: 0.78 },
      64: { grid: 6, span: 3.45, quality: 1.0 }
    }[this.voxelLevel];
  }

  aimVoxelCenter() {
    const origin = this.game.camera.position.clone();
    const dir = this.game.lookDirection(true);
    const center = origin.add(dir.multiplyScalar(this.voxelLevel === 64 ? 5.0 : 5.8));
    center.x = THREE.MathUtils.clamp(center.x, this.bounds.minX + 1.0, this.bounds.maxX - 1.0);
    center.y = THREE.MathUtils.clamp(center.y, 0.65, this.bounds.maxY - 0.65);
    center.z = THREE.MathUtils.clamp(center.z, this.bounds.minZ + 1.0, this.bounds.maxZ - 1.0);
    return center;
  }

  placeVoxelScan() {
    const config = this.voxelConfig();
    const center = this.aimVoxelCenter();
    const cellSize = config.span / config.grid;
    const count = config.grid ** 3;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const mat = new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
      depthTest: true
    });
    const mesh = new THREE.InstancedMesh(geo, mat, count);
    mesh.renderOrder = 830;
    const matrix = new THREE.Matrix4();
    const color = new THREE.Color();
    const cells = [];
    let index = 0;
    let peak = 0;
    const start = -(config.grid - 1) * 0.5;
    for (let z = 0; z < config.grid; z++) {
      for (let y = 0; y < config.grid; y++) {
        for (let x = 0; x < config.grid; x++) {
          const pos = center.clone().add(new THREE.Vector3(
            (start + x) * cellSize,
            (start + y) * cellSize,
            (start + z) * cellSize
          ));
          pos.x = THREE.MathUtils.clamp(pos.x, this.bounds.minX + 0.45, this.bounds.maxX - 0.45);
          pos.y = THREE.MathUtils.clamp(pos.y, 0.25, this.bounds.maxY - 0.35);
          pos.z = THREE.MathUtils.clamp(pos.z, this.bounds.minZ + 0.45, this.bounds.maxZ - 0.45);
          const response = this.specularResponse(pos, cellSize) * config.quality;
          peak = Math.max(peak, response);
          const hot = clamp01(response);
          color.setRGB(0.12 + hot * 0.72, 0.08 + hot * 0.18, 0.28 + hot * 0.72);
          matrix.compose(pos, new THREE.Quaternion(), new THREE.Vector3(cellSize * 0.74, cellSize * 0.74, cellSize * 0.74));
          mesh.setMatrixAt(index, matrix);
          mesh.setColorAt(index, color);
          cells.push({ pos, response, radius: cellSize * 1.65 });
          index++;
        }
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    this.group.add(mesh);
    this.voxelScans.push({
      center,
      cells,
      mesh,
      level: this.voxelLevel,
      cellSize,
      createdAt: performance.now() * 0.001,
      lifetime: 14
    });
    while (this.voxelScans.length > this.maxScans) this.removeVoxelScan(this.voxelScans[0]);
    this.capturePeak = Math.max(this.capturePeak * 0.78, peak);
    this.game.ui.showToast(`Voxelized ${this.voxelLevel} level region. Specular peak ${Math.round(peak * 100)}%.`);
  }

  removeVoxelScan(scan) {
    if (!scan) return;
    scan.mesh.parent?.remove(scan.mesh);
    disposeObject(scan.mesh);
    this.voxelScans = this.voxelScans.filter((item) => item !== scan);
  }

  clearVoxelScans() {
    for (const scan of [...this.voxelScans]) this.removeVoxelScan(scan);
    this.capturePeak = 0;
  }

  specularResponse(pos, cellSize = 0.5) {
    const view = this.game.camera.position.clone().sub(pos);
    if (view.lengthSq() < 0.001) return 0;
    view.normalize();
    let total = 0;
    for (const panel of this.specularPanels) {
      const fromPanel = pos.clone().sub(panel.pos);
      const dist = fromPanel.length();
      if (dist < 0.001) continue;
      const panelToPoint = fromPanel.normalize();
      const facing = Math.max(0, panel.normal.dot(panelToPoint));
      const falloff = clamp01(1 - dist / panel.range);
      const reflected = panelToPoint.clone().reflect(panel.normal).normalize();
      const glint = Math.pow(Math.max(0, reflected.dot(view)), 8);
      const micro = 0.5 + 0.5 * Math.sin(pos.x * 6.7 + pos.y * 4.1 + pos.z * 5.9 + panel.phase);
      const highFrequency = Math.pow(micro, 5);
      total += panel.strength * facing * falloff * (0.36 + glint * 0.72) * (0.28 + highFrequency * 0.92);
    }
    const detail = clamp01((1.35 - cellSize) / 1.1);
    return clamp01(total * (0.44 + detail * 0.74));
  }

  sampleVoxelSpecular(pos) {
    let best = 0;
    for (const scan of this.voxelScans) {
      for (const cell of scan.cells) {
        const dist = pos.distanceTo(cell.pos);
        if (dist > cell.radius) continue;
        const local = cell.response * clamp01(1 - dist / cell.radius);
        best = Math.max(best, local);
      }
    }
    return clamp01(best);
  }

  updateVoxelScanVisuals(dt) {
    const now = performance.now() * 0.001;
    this.scanPulse += dt;
    for (const scan of [...this.voxelScans]) {
      const age = now - scan.createdAt;
      if (age > scan.lifetime) {
        this.removeVoxelScan(scan);
        continue;
      }
      const fade = clamp01(1 - age / scan.lifetime);
      scan.mesh.material.opacity = 0.13 + fade * 0.28;
      scan.mesh.rotation.y += dt * 0.08;
    }
    this.capturePeak = Math.max(0, this.capturePeak - dt * 0.12);
  }

  update(dt) {
    super.update(dt);
    this.updatePlayer(dt);
    this.updateFollowCamera(dt, this.player, { fly: true, distance: 1.25, height: 0.35, lookHeight: 0.05 });
    this.updateVoxelScanVisuals(dt);
    this.updateCombat(dt, (pos) => this.sampleVoxelSpecular(pos));
    this.score = this.found.size / this.hiders.length;
    this.game.ui.updateScores(this.foundRows([
      { label: 'Voxel level', value: this.voxelLevel / 64, text: `${this.voxelLevel}` },
      { label: 'Active scans', value: this.voxelScans.length / this.maxScans, text: `${this.voxelScans.length}/${this.maxScans}` },
      { label: 'Specular peak', value: this.capturePeak, text: `${Math.round(this.capturePeak * 100)}%` }
    ]));
  }

  dispose() {
    this.clearVoxelScans();
    super.dispose();
  }
}

class FinalRoom extends RoomBase {
  enter() {
    super.enter();
    this.game.setCamera(new THREE.Vector3(0, 2.7, 6.4), new THREE.Vector3(0, 1.25, -0.4));
    const finalShell = buildRoomShell(this.group, 0x46f0c8, { floorColor: 0x10191b, wallColor: 0x081013 });
    setDoorOpen(finalShell.door, 1);
    addDefaultLights(this.group, 0x46f0c8);
    const title = createCanvasLabel('탈출 성공\n렌더링 방탈출 완료', { scale: 1.2, fontSize: 40, color: '#46f0c8' });
    title.position.set(0, 2.35, -1.6);
    this.group.add(title);
    const trophy = new THREE.Mesh(new THREE.TorusKnotGeometry(0.68, 0.19, 128, 18), makeMat(0xffd166, { metalness: 0.25, roughness: 0.35, emissive: 0xffd166, emissiveIntensity: 0.18 }));
    trophy.position.set(0, 1.05, -0.2);
    trophy.castShadow = true;
    this.trophy = trophy;
    this.group.add(trophy);
    this.game.ui.setRoom(
      '탈출 성공',
      'Lighting → Shading → Texture → Animation → DDGI → Surfel GI 순서의 모든 rendering puzzle을 통과했습니다.'
    );
    this.game.ui.setControls(`
      <div class="control-card">
        <h3>완료</h3>
        <p class="small-text">이 프로젝트는 발표용으로 각 방의 핵심 개념, 조작 UI, 점수 판정, 디버그 시각화를 포함합니다.</p>
        <button id="restartGame">처음부터 다시 시작</button>
      </div>
    `);
    this.listen(getEl('restartGame'), 'click', () => this.game.loadRoom(0));
    this.game.ui.updateScores([
      { label: '최종', value: 1, text: '완료' }
    ]);
  }

  update(dt) {
    super.update(dt);
    this.trophy.rotation.x += dt * 0.25;
    this.trophy.rotation.y += dt * 0.55;
  }
}

class Game {
  constructor() {
    this.host = getEl('canvasHost');
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderPixelRatio = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(this.renderPixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.host.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x080b12);
    this.scene.fog = new THREE.Fog(0x080b12, 9, 26);
    this.scene.environment = null;
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 80);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.target.set(0, 1.1, -0.2);

    this.ui = new UIManager();
    getEl('bottomHelp').textContent = 'WASD 이동 | P 방 스킵';
    this.clock = new THREE.Clock();
    this.currentRoom = null;
    this.index = 0;
    this.keys = new Set();
    this.lookYaw = 0;
    this.lookPitch = -0.08;
    this.mouseSensitivity = 0.0022;
    this.pointerLocked = false;
    this.roomClasses = [InteractiveLightingRoom, ShadingRoom, InteractiveTextureRoom, CraneAnimationRoom, DDGIHideSeekRoom, SurfelHideSeekRoom];
    this.transitionTimer = null;

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.onKeyUp(event));
    this.renderer.domElement.addEventListener('click', () => this.lockPointer());
    document.addEventListener('pointerlockchange', () => this.onPointerLockChange());
    document.addEventListener('mousemove', (event) => this.onMouseMove(event));
    this.loadRoom(0);
    this.animate();
  }

  lockPointer() {
    if (document.pointerLockElement !== this.renderer.domElement) {
      this.renderer.domElement.requestPointerLock?.();
    }
  }

  onPointerLockChange() {
    this.pointerLocked = document.pointerLockElement === this.renderer.domElement;
    getEl('bottomHelp').textContent = 'WASD 이동 | P 방 스킵';
  }

  onMouseMove(event) {
    if (!this.pointerLocked) return;
    this.lookYaw += event.movementX * this.mouseSensitivity;
    this.lookPitch -= event.movementY * this.mouseSensitivity;
    this.lookPitch = THREE.MathUtils.clamp(this.lookPitch, -1.42, 1.42);
  }

  setRenderProfile({
    exposure = 1,
    pixelRatio = 2
  } = {}) {
    this.renderer.toneMappingExposure = exposure;
    const nextPixelRatio = Math.min(window.devicePixelRatio, pixelRatio);
    if (Math.abs((this.renderPixelRatio ?? 0) - nextPixelRatio) > 0.001) {
      this.renderPixelRatio = nextPixelRatio;
      this.renderer.setPixelRatio(nextPixelRatio);
    }
  }

  lookDirection(includePitch = true) {
    const pitch = includePitch ? this.lookPitch : 0;
    const cosPitch = Math.cos(pitch);
    return new THREE.Vector3(
      Math.sin(this.lookYaw) * cosPitch,
      Math.sin(pitch),
      -Math.cos(this.lookYaw) * cosPitch
    ).normalize();
  }

  movementVector(fly = false) {
    const forward = this.lookDirection(false);
    forward.y = 0;
    if (forward.lengthSq() < 0.001) forward.set(0, 0, -1);
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const dir = new THREE.Vector3();
    if (this.keys.has('KeyW')) dir.add(forward);
    if (this.keys.has('KeyS')) dir.sub(forward);
    if (this.keys.has('KeyD')) dir.add(right);
    if (this.keys.has('KeyA')) dir.sub(right);
    if (fly) {
      if (this.keys.has('Space')) dir.y += 1;
      if (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) dir.y -= 1;
    } else {
      dir.y = 0;
    }
    if (dir.lengthSq() > 1) dir.normalize();
    return dir;
  }

  applyMouseLook() {
    const target = this.camera.position.clone().add(this.lookDirection(true));
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(target);
    this.controls.target.copy(target);
  }

  onKeyDown(event) {
    if (!isTypingTarget(event.target)) {
      this.keys.add(event.code);
      if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'ShiftLeft', 'ShiftRight', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) event.preventDefault();
    }
    if (event.code === 'KeyP') {
      event.preventDefault();
      this.currentRoom?.complete('P로 방을 스킵했습니다.');
      return;
    }
    if (!isTypingTarget(event.target)) this.currentRoom?.onKeyDown(event.code);
  }

  onKeyUp(event) {
    this.keys.delete(event.code);
  }

  setCamera(pos, target) {
    this.camera.position.copy(pos);
    this.controls.target.copy(target);
    const dir = target.clone().sub(pos).normalize();
    this.lookPitch = Math.asin(THREE.MathUtils.clamp(dir.y, -1, 1));
    this.lookYaw = Math.atan2(dir.x, -dir.z);
    this.applyMouseLook();
  }

  loadRoom(index) {
    this.keys.clear();
    if (this.transitionTimer) {
      clearTimeout(this.transitionTimer);
      this.transitionTimer = null;
    }
    if (this.currentRoom) {
      this.currentRoom.dispose();
      this.currentRoom = null;
    }
    this.index = index;
    this.scene.background = new THREE.Color(0x080b12);
    this.scene.fog = new THREE.Fog(0x080b12, 9, 26);
    this.setRenderProfile();
    if (index >= this.roomClasses.length) {
      this.ui.setProgress(this.roomClasses.length - 1, this.roomClasses.length);
      this.currentRoom = new FinalRoom(this);
    } else {
      this.ui.setProgress(index, this.roomClasses.length);
      const RoomClass = this.roomClasses[index];
      this.currentRoom = new RoomClass(this);
    }
    this.currentRoom.enter();
  }

  roomSolved() {
    if (this.transitionTimer) return;
    this.transitionTimer = setTimeout(() => {
      this.loadRoom(this.index + 1);
    }, 1550);
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.currentRoom?.update(dt);
    this.renderer.render(this.scene, this.camera);
  }
}

new Game();
