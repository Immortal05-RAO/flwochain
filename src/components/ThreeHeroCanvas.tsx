import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 9.5);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const mainSpot = new THREE.SpotLight(0xff7700, 4);
    mainSpot.position.set(5, 8, 5);
    mainSpot.castShadow = true;
    scene.add(mainSpot);

    const cyanFill = new THREE.DirectionalLight(0x00d2ff, 1.5);
    cyanFill.position.set(-6, 3, -2);
    scene.add(cyanFill);

    const topWhite = new THREE.PointLight(0xffffff, 2, 20);
    topWhite.position.set(0, 5, 2);
    scene.add(topWhite);

    // 4. Group Hierarchy
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Dynamic Screen Texture Canvas
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const screenCtx = screenCanvas.getContext('2d')!;
    const screenTexture = new THREE.CanvasTexture(screenCanvas);

    let lineOffset = 0;
    const updateScreenTexture = () => {
      screenCtx.fillStyle = '#0a0a0c';
      screenCtx.fillRect(0, 0, 512, 320);

      // Code header bar
      screenCtx.fillStyle = '#1a1a22';
      screenCtx.fillRect(0, 0, 512, 32);
      screenCtx.fillStyle = '#e85500';
      screenCtx.beginPath();
      screenCtx.arc(20, 16, 5, 0, Math.PI * 2);
      screenCtx.fill();
      screenCtx.fillStyle = '#ffbd2e';
      screenCtx.beginPath();
      screenCtx.arc(36, 16, 5, 0, Math.PI * 2);
      screenCtx.fill();
      screenCtx.fillStyle = '#27c93f';
      screenCtx.beginPath();
      screenCtx.arc(52, 16, 5, 0, Math.PI * 2);
      screenCtx.fill();

      screenCtx.fillStyle = '#ffffff';
      screenCtx.font = 'bold 12px monospace';
      screenCtx.fillText('FLOWCHAIN_OS :: AI_AUTOPILOT_V4.2.0', 80, 20);

      // Dynamic Code Stream
      screenCtx.font = '11px monospace';
      const lines = [
        '// INITIALIZING SYSTEM AGENTS...',
        'const workflow = new FlowchainEngine({ mode: "AUTONOMOUS" });',
        'await workflow.connectWhatsAppAgent({ phone: "+1-800-FLOW" });',
        'await workflow.deployVoiceReceptionist({ lat: "14ms" });',
        `> DATA PACKET [${Math.floor(Date.now() / 100)}]: ACTIVE_CALL_CONNECTED`,
        '> AUTOMATING LEAD INTAKE... [100% SUCCESS]',
        '> REVENUE PIPELINE UPDATED: +$42,800',
        '// SYSTEM OPERATING AT PEAK EFFICIENCY (340%)',
      ];

      lines.forEach((line, idx) => {
        const y = 60 + idx * 28;
        screenCtx.fillStyle = idx === (lineOffset % lines.length) ? '#e85500' : '#00d2ff';
        screenCtx.fillText(line, 20, y);
      });

      screenTexture.needsUpdate = true;
    };

    // --- Modular Computer Chassis ---
    const towerGeo = new THREE.BoxGeometry(1.6, 2.8, 1.8);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x222228,
      roughness: 0.3,
      metalness: 0.8,
    });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(-1.8, 0, -0.5);
    tower.castShadow = true;
    mainGroup.add(tower);

    // Glowing Orange Power Ribbon on Chassis
    const ribbonGeo = new THREE.BoxGeometry(0.05, 2.4, 0.05);
    const ribbonMat = new THREE.MeshBasicMaterial({ color: 0xe85500 });
    const ribbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbon.position.set(-0.98, 0, 0.4);
    mainGroup.add(ribbon);

    // Curved Main Monitor
    const monitorGeo = new THREE.BoxGeometry(3.6, 2.2, 0.2);
    const monitorMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      roughness: 0.2,
      metalness: 0.9,
    });
    const monitor = new THREE.Mesh(monitorGeo, monitorMat);
    monitor.position.set(1.0, 0.6, 0);
    monitor.castShadow = true;
    mainGroup.add(monitor);

    // Screen Display Panel
    const screenGeo = new THREE.PlaneGeometry(3.3, 1.9);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(1.0, 0.6, 0.12);
    mainGroup.add(screenMesh);

    // Monitor Stand
    const standGeo = new THREE.CylinderGeometry(0.15, 0.3, 1.0, 16);
    const standMat = new THREE.MeshStandardMaterial({ color: 0x33333d, metalness: 0.8 });
    const stand = new THREE.Mesh(standGeo, standMat);
    stand.position.set(1.0, -0.8, -0.2);
    mainGroup.add(stand);

    // --- Orbiting 3D Sub-Objects ---
    // 1. Mechanical Keyboard
    const kbGeo = new THREE.BoxGeometry(2.2, 0.15, 0.8);
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x18181f, roughness: 0.4 });
    const keyboard = new THREE.Mesh(kbGeo, kbMat);
    keyboard.position.set(0.5, -1.2, 1.4);
    keyboard.rotation.x = 0.15;
    mainGroup.add(keyboard);

    // 2. Glowing Automation Gear
    const gearGroup = new THREE.Group();
    const gearGeo = new THREE.TorusGeometry(0.5, 0.12, 16, 24);
    const gearMat = new THREE.MeshStandardMaterial({
      color: 0xe85500,
      emissive: 0xe85500,
      emissiveIntensity: 0.6,
      roughness: 0.2,
    });
    const gear = new THREE.Mesh(gearGeo, gearMat);
    gearGroup.add(gear);
    gearGroup.position.set(2.8, 1.8, 1.0);
    mainGroup.add(gearGroup);

    // 3. 3D WhatsApp Bubble Icon
    const bubbleGeo = new THREE.SphereGeometry(0.45, 32, 32);
    const bubbleMat = new THREE.MeshStandardMaterial({
      color: 0x25d366,
      roughness: 0.1,
      metalness: 0.2,
    });
    const whatsappBubble = new THREE.Mesh(bubbleGeo, bubbleMat);
    whatsappBubble.position.set(-2.8, 1.5, 1.2);
    mainGroup.add(whatsappBubble);

    // 4. AI Headset / Voice Mic Icon
    const micGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.7, 16);
    const micMat = new THREE.MeshStandardMaterial({ color: 0x00d2ff, metalness: 0.9 });
    const mic = new THREE.Mesh(micGeo, micMat);
    mic.position.set(-2.4, -0.8, 1.8);
    mic.rotation.z = 0.5;
    mainGroup.add(mic);

    // 5. Floating Browser Card
    const browserGeo = new THREE.PlaneGeometry(1.2, 0.8);
    const browserMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    const browser = new THREE.Mesh(browserGeo, browserMat);
    browser.position.set(3.0, -0.6, 1.2);
    browser.rotation.y = -0.3;
    mainGroup.add(browser);

    // Ground Soft Shadow Plane
    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.15 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.6;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Tilt Mouse Parallax Interaction
    let targetRotX = 0;
    let targetRotY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetRotY = x * 0.35;
      targetRotX = y * 0.25;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Render Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Screen code texture tick
      if (Math.floor(elapsedTime * 2) !== lineOffset) {
        lineOffset = Math.floor(elapsedTime * 2);
        updateScreenTexture();
      }

      // Smooth Group Rotation
      mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.05;

      // Orbiting Bobbing Animations
      gearGroup.rotation.z += 0.015;
      gearGroup.position.y = 1.8 + Math.sin(elapsedTime * 2) * 0.12;

      whatsappBubble.position.y = 1.5 + Math.cos(elapsedTime * 1.8) * 0.15;
      whatsappBubble.rotation.y += 0.01;

      mic.position.y = -0.8 + Math.sin(elapsedTime * 2.2) * 0.1;
      browser.position.y = -0.6 + Math.cos(elapsedTime * 1.5) * 0.12;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 right-4 px-3 py-1 bg-black/10 backdrop-blur-md rounded-full text-[10px] font-mono text-[#666666]">
        INTERACTIVE 3D WORKSTATION • DRAG TO TILT
      </div>
    </div>
  );
};
