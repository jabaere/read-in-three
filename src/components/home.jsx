import * as THREE from "three";
import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Button } from "./button";

import {
  PerspectiveCamera,
  Html,
  useScroll,
  ScrollControls,
} from "@react-three/drei";

import { Lines } from "./lines";
import { Block } from "../layout/block";
import dse from "../assets/pictures/material_2_baseColor.jpeg";
import { Book } from "./game";
// function VideoMaterial({ url }) {
//   const texture = useVideoTexture(url)
//   return <meshBasicMaterial map={texture} toneMapped={false} />
// }

function Scene() {
  const { size } = useThree();
  const firstWordRef = useRef();
  const secondWordRef = useRef();
  const thirdWordRef = useRef();
  const scroll = useScroll();
  const ref = useRef();
  const lines = React.createRef();
  //animate text

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);
  const texture = useLoader(THREE.TextureLoader, dse);
  useFrame((state) => {
    let { clock } = state;
    let elapsedTime = clock.getElapsedTime();
    ref.current.position.z = scroll.offset * 120;

    if (firstWordRef.current !== undefined) {
      if (
        firstWordRef.current.style.opacity < 1 ||
        secondWordRef.current.style.opacity < 0.8 ||
        thirdWordRef.current.style.opacity < 0.6
      ) {
        firstWordRef.current.style.opacity = elapsedTime / 25;
        secondWordRef.current.style.opacity = elapsedTime / 55;
        thirdWordRef.current.style.opacity = elapsedTime / 80;
      }
      if (firstWordRef.current.style.opacity > 0.6) {
        firstWordRef.current.style.color = "rgb(128,0,128)";
        secondWordRef.current.style.color = "rgb(127,255,0)";
      }
      if (secondWordRef.current.style.opacity > 0.5) {
        secondWordRef.current.style.color = "rgb(127,255,0)";
      }
    }
  });
  return (
    <group ref={ref}>
      <Block factor={0} offset={0}>
        <mesh position={[0, 0, 0]}>
          {/* <Flags positionX= {size.width/size.height*4}/>
      <Flags positionX={-size.width/size.height*4}/>
      <Dots/> */}
          <Html center wrapperClass="title" style={{ pointerEvents: "none" }}>
            <h1 style={{ color: "white" }}>
              <span className="hide" ref={firstWordRef}>
                Could{" "}
              </span>
              <span className="hide" ref={secondWordRef}>
                we{" "}
              </span>
              <span className="hide" ref={thirdWordRef}>
                play?{" "}
              </span>
            </h1>
          </Html>
          <Button />

          {/* <Lines positionX={-2} positionY={0} geometryWidth={2} positionZ={0}/> */}
        </mesh>
      </Block>
      <Block factor={2.5} offset={-2.5}>
        <mesh position={[0, 0, 32]} renderOrder={7}>
          <Html wrapperClass="game-rules-container">
            <div style={{ display: "flex" }} id="game">
              <div className="game-rules-title">
                <h1
                  style={{
                    color: "lightblue",
                    fontSize: "92px",
                    marginBottom: "35px",
                  }}
                >
                  Stephen King
                </h1>
              </div>
              {/* <div className="game-rules-title">
                <p style={{ color: "red" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nulla at volutpat diam ut venenatis tellus. Volutpat ac
                  tincidunt vitae semper quis lectus nulla at.
                </p>
              </div> */}
            </div>
            <div>
              <Book />
            </div>
          </Html>
        </mesh>
      </Block>
    </group>
  );
}

function SceneCamera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = 95;
    camera.near = 0;
    camera.far = 1000;
    camera.position.set([0, 0, 32]);
    camera.rotateY(0);
    camera.updateProjectionMatrix();
  }, []);
  return <PerspectiveCamera makeDefault></PerspectiveCamera>;
}

export const Home = () => {
  const canvasRef = useRef();
  const lines = React.createRef();

  return (
    <Suspense
      fallback={
        <h1
          style={{
            color: "lightgreen",
            fontSize: "5em",
            textAlign: "center",
            marginTop: "200px",
          }}
        >
          loading....
        </h1>
      }
    >
      <Canvas ref={canvasRef} id="canvasContainer">
        {/* 
    <fog attach="fog" args={['#17171b', 30, 40]} />
      <ambientLight intensity={0.25} />
      <directionalLight intensity={2} position={[10, 6, 6]}>
        <orthographicCamera attach="shadow-camera" left={-20} right={20} top={20} bottom={-20} />
      </directionalLight> */}

        <ScrollControls
          pages={3}
          style={{ background: "transparent" }}
          damping={1.5}
          distance={5}
          maxSpeed={0.1}
        >
          <Scene />
          <Lines ref={lines} />
        </ScrollControls>

        {/* <Environment preset="dawn" /> */}
      </Canvas>
    </Suspense>
  );
};
