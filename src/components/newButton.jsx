import { extend } from "@react-three/fiber";


import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'


import glsl from "glslify";

export const ButtonMaterial = shaderMaterial(
    {
    transparent: true,
    u_time: {
      value: 0.0,
    },
    u_texture: new THREE.Texture(),
    iResolution:  { value: new THREE.Vector3() },
    uposition: {value: new THREE.Float32BufferAttribute()},
    mouse:{value:new THREE.Vector2()},
  },
  glsl`
  
    precision mediump float;
   
    varying vec2 vUv;
    varying float vWave;
  
    uniform float u_time;
    uniform vec3 iResolution;
    uniform vec3 uposition;
    
    void main() {
      vUv = uv;
      vec3 pos = position;
      vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
      //modelPosition.y += sin(modelPosition.x * 1.5 + u_time * 2.0) * 0.8;
      //modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
      //modelPosition.y += sin(modelPosition.y * 6.0 + u_time * 0.5) * 0.1;
     
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
    
      gl_Position = projectedPosition;
    }
  `,
  glsl`
  #define TAU 6.2831852
  #define MOD3 vec3(.1031,.11369,.13787)
  #define BLACK_COL vec3(0,0,0)/255.
  precision mediump float;
  varying vec2 vUv;
  uniform vec3 iResolution;
  uniform float u_time;
  uniform vec2 mouse;
  vec3 hash33(vec3 p3)
  {
      p3 = fract(p3 * MOD3);
      p3 += dot(p3, p3.yxz+19.19);
      return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
  }
  
  float simplex_noise(vec3 p)
  {
      const float K1 = 0.333333333;
      const float K2 = 0.166666667;
      
      vec3 i = floor(p + (p.x + p.y + p.z) * K1);
      vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
          
      vec3 e = step(vec3(0.0), d0 - d0.yzx);
      vec3 i1 = e * (1.0 - e.zxy);
      vec3 i2 = 1.0 - e.zxy * (1.0 - e);
      
      vec3 d1 = d0 - (i1 - 1.0 * K2);
      vec3 d2 = d0 - (i2 - 2.0 * K2);
      vec3 d3 = d0 - (1.0 - 3.0 * K2);
      
      vec4 h = max(0.3 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0); //0.6
      vec4 n = h * h * h * h * vec4(dot(d0, hash33(i)), dot(d1, hash33(i + i1)), dot(d2, hash33(i + i2)), dot(d3, hash33(i + 1.0)));
      
      return dot(vec4(31.316), n);
  }
  
  void mainImage( out vec4 fragColor, in vec2 fragCoord )
  {
      vec2 uv = (fragCoord.xy-iResolution.xy*0.5)/iResolution.y; // multiply to adjusts size;
          
      float a = sin(atan(uv.y, uv.x));
      float am = abs(a-.5)/4.;

      //adjust ball size
      float l = length(uv * 5.0);                         
      
      float m1 = clamp(.1/smoothstep(.0, 1.75, l), 0., 1.);
      float m2 = clamp(.1/smoothstep(.42, 0., l), 0., 1.);
      float s1 = (simplex_noise(vec3(uv*2., 1. + u_time*.525))*(max(1.0 - l*1.75, 0.)) + .9);
      float s2 = (simplex_noise(vec3(uv*1., 15. + u_time*.525))*(max(.0 + l*1., .025)) + 1.25);
      float s3 = (simplex_noise(vec3(vec2(am, am*100. + u_time*3.)*.15, 30. + u_time*.525))*(max(.0 + l*1., .25)) + 1.5);
      s3 *= smoothstep(0.0, .3345, l);   
      
      float gg = 0.15;
      if(mouse.y > 362.0 && mouse.y < 473.0 ){
        gg = mouse.y ;
      }
      
      float sh = smoothstep(gg, .35, l); //0.15
      
      
      float m = m1*m1*m2 * ((s1*s2*s3) * (1.-l)) * sh;
      m = clamp(m, 0., 1.8); //1.8
      
      vec3 col = mix(BLACK_COL, (0.5 + 0.5*cos(u_time+uv.xyx*gg/15.0+vec3(1,2,4))), m); //change 7,4 xyx *3.
              
      fragColor = vec4(col, 1);
  }
    
    void main() {
  

    mainImage(gl_FragColor, vUv * iResolution.xy);
  
  }
    `,
   
  )
  extend({ ButtonMaterial });