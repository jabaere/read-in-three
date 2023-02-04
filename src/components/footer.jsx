import React,{useRef,useState,useEffect,useLayoutEffect} from 'react'
//import audio from '../lumx.mp3'
import MusicPlayer from './MusicPlayer';
import { BsMusicPlayer } from "react-icons/bs";
import { CgMusic } from "react-icons/cg";
export const Footer = () => {
  const [clicked,setClicked] = useState(false);
 
  const [soundtrack] = useState(new Audio('soundtrack/soundtrack.mp3'));
  const [playingSoundTrack, setPlayingSoundTrack] = useState(false);

  const toggleSoundTrack = () => setPlayingSoundTrack(!playingSoundTrack);

  
  const  handleMusicIconClick = () => {setClicked(!clicked);setPlayingSoundTrack(false)};
  

  useEffect(() => {
    soundtrack.load();
    playingSoundTrack ? soundtrack.play() : soundtrack.pause();
  },
  [playingSoundTrack]
);
 
  const FooterComponent = () => {

   return (
      <div className='footer-container'>
        <p className='footerP'>2022ere</p>
        {clicked && <MusicPlayer/>}
        {!clicked&&<CgMusic onClick={toggleSoundTrack} style={{cursor:'pointer'}}/>}
        <BsMusicPlayer onClick={handleMusicIconClick} style={{cursor:'pointer'}}/>
     </div>
    );
  };
  return (
    <FooterComponent />
   )
}
