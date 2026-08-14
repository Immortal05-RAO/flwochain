import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 480;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 8.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Studio Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainSpot = new THREE.SpotLight(0xffffff, 3.5);
    mainSpot.position.set(6, 9, 6);
    mainSpot.castShadow = true;
    scene.add(mainSpot);

    const orangeRimLight = new THREE.PointLight(0xe85500, 3, 15);
    orangeRimLight.position.set(-5, 4, 3);
    scene.add(orangeRimLight);

    const cyanFill = new THREE.DirectionalLight(0x00d2ff, 1.2);
    cyanFill.position.set(5, -2, -3);
    scene.add(cyanFill);

    // 4. Main Computer Group (3/4 Perspective Angle)
    const computerGroup = new THREE.Group();
    computerGroup.rotation.y = 0.35; // 3/4 perspective angle
    computerGroup.rotation.x = 0.08;
    scene.add(computerGroup);

    // Dynamic Terminal Code Screen Canvas
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 360;
    const screenCtx = screenCanvas.getContext('2d')!;
    const screenTexture = new THREE.CanvasTexture(screenCanvas);

    let lineStep = 0;
    const updateScreenTexture = () => {
      screenCtx.fillStyle = '#08080c';
      screenCtx.fillRect(0, 0, 512, 360);

      // IDE Header Bar
      screenCtx.fillStyle = '#14141c';
      screenCtx.fillRect(0, 0, 512, 36);

      screenCtx.fillStyle = '#ff5f56';
      screenCtx.beginPath();
      screenCtx.arc(20, 18, 5, 0, Math.PI * 2);
      screenCtx.fill();

      screenCtx.fillStyle = '#ffbd2e';
      screenCtx.beginPath();
      screenCtx.arc(36, 18, 5, 0, Math.PI * 2);
      screenCtx.fill();

      screenCtx.fillStyle = '#27c93f';
      screenCtx.beginPath();
      screenCtx.arc(52, 18, 5, 0, Math.PI * 2);
      screenCtx.fill();

      screenCtx.fillStyle = '#ffffff';
      screenCtx.font = 'bold 12px monospace';
      screenCtx.fillText('FLOWCHAIN_OS :: RETRO_ALL_IN_ONE', 80, 22);

      // Terminal Lines
      screenCtx.font = '12px monospace';
      const lines = [
        '// FLOWCHAIN RETRO WORKSTATION ACTIVE',
        'const agent = new AIAutopilot();',
        'await agent.initWhatsApp({ speed: "300ms" });',
        'await agent.connectVoiceReceptionist();',
        `> STREAM_PACKET [${Math.floor(Date.now() / 200)}]: CALL_CONNECTED`,
        '> AUTOMATING LEAD INTAKE... [100% OK]',
        '> REVENUE PIPELINE: +$42,800',
        '// SYSTEM OPERATING AT 340% GAIN',
      ];

      lines.forEach((line, idx) => {
        const y = 70 + idx * 30;
        screenCtx.fillStyle =
          idx === lineStep % lines.length ? '#e85500' : idx % 2 === 0 ? '#00d2ff' : '#27c93f';
        screenCtx.fillText(line, 24, y);
      });

      screenTexture.needsUpdate = true;
    };

    // --- CHUNKY RETRO ALL-IN-ONE ORANGE COMPUTER BODY ---
    const orangeColor = 0xe85500;
    const orangeMat = new THREE.MeshStandardMaterial({
      color: orangeColor,
      roughness: 0.35,
      metalness: 0.1,
    });

    // Main Sculptural Wedge Body
    const bodyGeo = new THREE.BoxGeometry(3.2, 2.6, 2.0);
    const mainBody = new THREE.Mesh(bodyGeo, orangeMat);
    mainBody.position.set(0, 0, 0);
    mainBody.castShadow = true;
    computerGroup.add(mainBody);

    // Front Recessed Screen Bezel & Display Panel
    const bezelGeo = new THREE.BoxGeometry(2.6, 1.8, 0.1);
    const bezelMat = new THREE.MeshStandardMaterial({ color: 0x18181c, roughness: 0.2 });
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.position.set(0, 0.25, 1.01);
    computerGroup.add(bezel);

    const screenGeo = new THREE.PlaneGeometry(2.4, 1.6);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.25, 1.07);
    computerGroup.add(screenMesh);

    // Built-In Angled Keyboard Tray Base
    const kbTrayGeo = new THREE.BoxGeometry(2.8, 0.4, 1.0);
    const kbTray = new THREE.Mesh(kbTrayGeo, orangeMat);
    kbTray.position.set(0, -1.2, 0.8);
    kbTray.rotation.x = 0.2; // Angled wedge downward
    computerGroup.add(kbTray);

    // Raised Cream/White Keyboard Keys Array
    const keysGroup = new THREE.Group();
    const keyGeo = new THREE.BoxGeometry(0.16, 0.08, 0.16);
    const keyMat = new THREE.MeshStandardMaterial({ color: 0xfffdd0, roughness: 0.4 });

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 12; col++) {
        const key = new THREE.Mesh(keyGeo, keyMat);
        key.position.set(-1.1 + col * 0.2, 0.06 - row * 0.2, 0);
        keysGroup.add(key);
      }
    }
    keysGroup.position.set(0, -1.15, 0.85);
    keysGroup.rotation.x = 0.2;
    computerGroup.add(keysGroup);

    // Top Robotic Sensor / Camera Pod
    const cameraPodGroup = new THREE.Group();
    const podGeo = new THREE.SphereGeometry(0.22, 16, 16);
    const podMat = new THREE.MeshStandardMaterial({ color: 0x222228, roughness: 0.3 });
    const pod = new THREE.Mesh(podGeo, podMat);

    const lensGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const lensMat = new THREE.MeshBasicMaterial({ color: 0xff3b30 });
    const lens = new THREE.Mesh(lensGeo, lensMat);
    lens.position.z = 0.16;
    cameraPodGroup.add(pod, lens);
    cameraPodGroup.position.set(0, 1.5, 0.4);
    computerGroup.add(cameraPodGroup);

    // Side Vent Line Details
    const ventMat = new THREE.MeshBasicMaterial({ color: 0xc44500 });
    for (let v = 0; v < 5; v++) {
      const ventLineLeft = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.04, 1.2), ventMat);
      ventLineLeft.position.set(-1.61, 0.4 - v * 0.18, 0);
      const ventLineRight = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.04, 1.2), ventMat);
      ventLineRight.position.set(1.61, 0.4 - v * 0.18, 0);
      computerGroup.add(ventLineLeft, ventLineRight);
    }

    // Ground Soft Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(8, 8);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.8;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // --- 4 ORBITING FLOATING DEBRIS ELEMENTS ---
    // 1. WhatsApp Green Chat Bubble
    const waGroup = new THREE.Group();
    const waSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.38, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x25d366, roughness: 0.2 })
    );
    waGroup.add(waSphere);
    waGroup.position.set(-2.4, 1.4, 1.0);
    scene.add(waGroup);

    // 2. Small Orange Gear / Cog
    const gearGroup = new THREE.Group();
    const gearGeo = new THREE.TorusGeometry(0.35, 0.1, 16, 24);
    const gearMat = new THREE.MeshStandardMaterial({ color: 0xe85500, emissive: 0xe85500, emissiveIntensity: 0.4 });
    const gear = new THREE.Mesh(gearGeo, gearMat);
    gearGroup.add(gear);
    gearGroup.position.set(2.4, 1.6, 0.8);
    scene.add(gearGroup);

    // 3. Mini Browser Window Card
    const browserGroup = new THREE.Group();
    const browserBox = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 0.65, 0.05),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 })
    );
    browserGroup.add(browserBox);
    browserGroup.position.set(2.6, -0.8, 1.2);
    browserGroup.rotation.y = -0.3;
    scene.add(browserGroup);

    // 4. Microphone / Waveform Badge
    const micGroup = new THREE.Group();
    const micTorus = new THREE.Mesh(
      new THREE.TorusGeometry(0.3, 0.08, 16, 24),
      new THREE.MeshStandardMaterial({ color: 0x00d2ff, emissive: 0x00d2ff, emissiveIntensity: 0.6 })
    );
    micGroup.add(micTorus);
    micGroup.position.set(-2.2, -1.0, 1.4);
    scene.add(micGroup);

    // Animation Loop (Slow Up-and-Down Idle Bobbing Loop)
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Screen code texture tick
      if (Math.floor(elapsedTime * 2.5) !== lineStep) {
        lineStep = Math.floor(elapsedTime * 2.5);
        updateScreenTexture();
      }

      // Gentle Up-and-Down Idle Bobbing Animation (3-4 second cycle)
      computerGroup.position.y = Math.sin(elapsedTime * 1.8) * 0.12;

      // Floating Orbiting Debris Organic Bobbing
      waGroup.position.y = 1.4 + Math.sin(elapsedTime * 2.0) * 0.15;
      waGroup.rotation.y += 0.01;

      gearGroup.position.y = 1.6 + Math.cos(elapsedTime * 1.6) * 0.14;
      gearGroup.rotation.z += 0.02;

      browserGroup.position.y = -0.8 + Math.sin(elapsedTime * 2.2) * 0.1;
      micGroup.position.y = -1.0 + Math.cos(elapsedTime * 1.9) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[440px] sm:h-[520px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};
