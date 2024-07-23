import { useEffect, useRef } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.134";

const SmokeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const clock = new THREE.Clock();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);

    const light = new THREE.DirectionalLight(0xffffff, 0.01);
    light.position.set(-1, 0, 1);
    scene.add(light);

    const smokeParticles = [];
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load("/public/fondo.png", (texture) => {
      const smokeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff6666,
        map: texture,
        transparent: true,
      });
      smokeMaterial.map.minFilter = THREE.LinearFilter;
      const smokeGeometry = new THREE.PlaneBufferGeometry(300, 300);

      for (let i = 0; i < 50; i++) {
        const smokeMesh = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smokeMesh.position.set(
          Math.random() * width - width / 2,
          Math.random() * height - height / 2,
          Math.random() * 2000 - 1000
        );
        smokeMesh.rotation.z = Math.random() * 360;
        smokeParticles.push(smokeMesh);
        scene.add(smokeMesh);
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      smokeParticles.forEach((particle) => {
        particle.rotation.z += delta * 0.09;
      });
      renderer.render(scene, camera);
    };

    animate();

    mountRef.current.appendChild(renderer.domElement);

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      // Update smoke particles positions
      smokeParticles.forEach((particle) => {
        particle.position.set(
          Math.random() * width - width / 2,
          Math.random() * height - height / 2,
          Math.random() * 2000 - 1000
        );
      });
    };

    const onScroll = () => {
      if (mountRef.current) {
        if (window.scrollY === 0) {
          mountRef.current.style.opacity = "0.5";
        } else {
          mountRef.current.style.opacity = "0";
        }
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute  -left-5 -z-10 h-full w-full opacity-10 transition-opacity duration-500"
    ></div>
  );
};

export default SmokeBackground;
