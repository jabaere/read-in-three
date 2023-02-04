import React, { useEffect, useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Html, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { ButtonMaterial } from "./newButton";

export const Button = () => {
  const { size } = useThree();
  const mesh = useRef();
  const circleGeometry = useRef();
  const buttonRef = useRef();
  const [mouseCords, setMouseCords] = useState([0, 0]);
  const scroll = useScroll();
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      event.preventDefault();
      setMouseCords([event.clientX, event.clientY]);
      buttonRef.current.uniforms.mouse.value = new THREE.Vector2(
        event.screenX,
        event.screenY
      );

      // console.log(buttonRef.current.uniforms.mouse.value)
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, [mouseCords]);
  useFrame((state) => {
    const { clock, mouse } = state;
    buttonRef.current.uniforms.u_time.value = clock.getElapsedTime();
    buttonRef.current.uniforms.iResolution.value = new THREE.Vector3(
      mesh.current.scale.x,
      mesh.current.scale.y,
      mesh.current.scale.z
    );
    buttonRef.current.uniforms.mouse.value = new THREE.Vector2(
      mouseCords[0],
      mouseCords[1]
    );
  });
  useEffect(() => {
    // console.log(  buttonRef.current.uniforms.mouse.value)
    // console.log(Math.abs(buttonRef.current.uniforms.mouse.value.y))
  });

  return (
    <mesh
      position={[0, -2, 0]}
      scale={size.width < 365 ? 0.7 : 1.5}
      ref={mesh}
      renderOrder={7}
    >
      <planeBufferGeometry
        args={[9, 9]}
        ref={circleGeometry}
        attach="geometry"
      />
      <buttonMaterial ref={buttonRef} />
      <Html center>
        <p
          style={{ color: "white", cursor: "pointer" }}
          onClick={() => (scroll.offset = 0.27)}
        >
          <a href="#game">Scroll</a>
        </p>
      </Html>
    </mesh>
  );
};
