import { Canvas, useFrame,useLoader,useThree } from "@react-three/fiber";
import React,{ useRef,useState,useEffect } from "react";

import { useScroll } from '@react-three/drei'
import * as THREE from 'three'


//import url2 from '../vid.mp4'


import {LineMaterial} from './newLines'



export const Lines = React.forwardRef((props, ref) => {
    const { size,mouse,intersect } = useThree();
  const material = useRef();
  const mouseXY = useRef([0, 0])
  //const mesh = useRef(lines);
  const geometry = useRef();

  const [mouseCords,setMouseCords] = useState([0,0])
  const scroll = useScroll();


	useEffect(() => {
	  // 👇️ get global mouse coordinates
	  const handleWindowMouseMove = event => {
        event.preventDefault();
        setMouseCords([event.clientX, event.clientY])
        material.current.uniforms.mouse.value = new THREE.Vector2(event.screenX,event.screenY)
   
	
      //console.log(material.current.uniforms.mouse.value)
	  };
	  window.addEventListener('mousemove', handleWindowMouseMove);
  
	  return () => {
		window.removeEventListener('mousemove', handleWindowMouseMove);
	  };
	},[mouse.x]);

    

  useEffect(()=> {

  },[scroll.offset])
 
  useFrame((state) => {
    const { clock,mouse } = state;
    material.current.uniforms.u_time.value = clock.getElapsedTime();
    material.current.uniforms.scroll.value = new THREE.Vector2(scroll.offset,scroll.pages)
    
    //material.current.uniforms.iResolution.value = new THREE.Vector3( geometry.current.parameters.width,geometry.current.parameters.height,2)
    
   // mesh.current.positionX = scroll.offset * 40;
   // mesh.current.positionY = scroll.offset * 400;
   // geometry.current.geometryWidth = scroll.offset * 400
   //console.log(mesh.current)
   //material.current.uniforms.mouse.value.x = globalCoords.x
  // material.current.uniforms.mouse.value = new THREE.Vector2(mouse.x,mouse.y)
  
   //ref.current.position.y = scroll.offset * -4;
   if(scroll.offset.toFixed(2) > 0.27){
     geometry.current.parameters.width = size.width;
     geometry.current.parameters.height = size.height;
     ref.current.position.x = -2;
     ref.current.position.z = 0;
   }else{
    ref.current.position.x = -2;
    ref.current.position.z = 1;
   
   }
 
  });

  return (
    <mesh position={[-2,0,0]} scale={1.5}ref={ref} renderOrder={0}>
      <planeGeometry args={[size.height, size.width, 16, 16]} ref={geometry}/>
      <lineMaterial 
        ref={material} 
        iResolution={new THREE.Vector3(size.width,size.height,1)}
        mouse={new THREE.Vector2(mouseCords[0],mouseCords[1])}
        />
    </mesh>
 );
});




