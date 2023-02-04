import {extend } from "@react-three/fiber";


import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'


import glsl from "glslify";

export const LineMaterial = shaderMaterial(
    {
    u_time: {
      value: 0.0,
    },
    iResolution:  { value: new THREE.Vector3() },
    mouse:{value:new THREE.Vector2()},
    scroll:{value:new THREE.Vector2()}
  
  },
  glsl`
  
    precision mediump float;
   
    varying vec2 vUv;
    varying float vWave;
  
    uniform float u_time;
    uniform vec2 mouse;
    uniform vec2 u_mouse;
    uniform vec2 scroll;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
    //   pos.x += mouse.x;
    //   pos.y += mouse.y;
      vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
    
      gl_Position = modelPosition;
    }
  `,
  glsl`
  precision mediump float;
  uniform vec3 iResolution;
  uniform float u_time;
  uniform vec2 mouse;
  uniform vec2 scroll;
  #define BLACK_COL vec3(16,21,25)/255.
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    
    //float tess = mouse.y > mouse.x ? mouse.x : fragCoord.x;
    vec2 uv = fragCoord.x/iResolution.xy; // 0 <> 1
   
   
    uv -=.4; // -0.5 <> 0.5
   
    uv.x *= iResolution.y/iResolution.y; // Fixes aspect ratio
       
    float d = length(uv);
    float n = fract (u_time+sin(uv.x * 80. + uv.y * 0.2)*5.55 );
    float r = 0.04* sin(u_time*1.5)+0.2;
    r += 0.01 * sin(u_time);
   
    //float r = 0.5;
   
    float c = smoothstep(r, r-n, d);
   
    //c *= vec3(.6, .4, .2);

    fragColor = vec4(vec3(c * vec3(0.5 + 0.5*cos(u_time+uv.xyx*3.+vec3(0,2,4)))), 1.0);

   //--------------------------------create full canvas color flows--------------------------
       // vec3 col = mix(BLACK_COL, (0.5 + 0.5*cos(u_time+uv.xyx*3.+vec3(0,2,4))), 1.0);
      // fragColor = vec4(col, 1.); 
   //--------------------------------create full canvas color flows--------------------------
}
    
    void main() {
   
        mainImage(gl_FragColor, gl_FragCoord.xy);
  }
    `,
   
  )
  extend({ LineMaterial });