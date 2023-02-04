import React, { useState,useRef } from 'react';

// const MemoryGame = () => {
//   const [level, setLevel] = useState(1);
//   const [score, setScore] = useState(0);
//   const [cubes, setCubes] = useState([0,1,2,3]);
//   const [displayCubes, setDisplayCubes] = useState([]);
//   const backCardRef = useRef([])

//   const startGame = () => {
//     let numberOfCubes = 4;
//     if (level === 2) {
//       numberOfCubes = 6;
//     } else if (level === 3) {
//       numberOfCubes = 8;
//     } else if (level === 4) {
//       numberOfCubes = 9;
//     }
//     console.log(backCardRef.current)

//    // backCardRef.current.classList.add('visible')

//     // generate random cubes
//     const newCubes = Array.from({ length: numberOfCubes }, (_, i) => i);
//     setCubes(newCubes);

//     // display 4 random cubes for a few seconds
//     const randomCubes = newCubes.sort(() => Math.random() - 0.5).slice(0, 4);
//     setDisplayCubes(randomCubes);
//     setTimeout(() => {
//       setDisplayCubes([]);
//      // backCardRef.current.classList.remove('visible')
//     }, 3000);
//   };

//   const checkAnswer = (selectedCubes) => {
//     backCardRef.current[selectedCubes].style.backfaceVisibility = 'visible';
//     console.log(selectedCubes)
//     setTimeout(() => {
//       backCardRef.current[selectedCubes].style.backfaceVisibility = 'hidden';
//      // backCardRef.current.classList.remove('visible')
//     }, 3000);
//     if (selectedCubes.sort().toString() === cubes.slice(0, 4).sort().toString()) {
//       setScore(score + 1);
//     }

//     if (score === 10) {
//       setLevel(level + 1);
//       setScore(0);
//     }
//   };

//   return (
//     <div style={{color:'red'}}>
//       <h1>Memory Game</h1>
//       <h2>Level: {level}</h2>
//       <h2>Score: {score}</h2>
//       <button onClick={startGame}>Start</button>
//       <div className="cubes-container">
//         {cubes.map((cube, i) => (
//           console.log(cube),
//           <>
//           {/* <div
//             key={i}
//             className={`cube ${displayCubes.includes(cube) ? 'visible' : 'hidden'}`}
//             onClick={() => checkAnswer(cube)}
//           >
//             {cube}
//           </div> */}
//        <div key={i} className={`flip-card `} onClick={() => checkAnswer(cube)}>
//          <div className="flip-card-inner ">
//            <div className="flip-card-front visible"></div>
//          <div className={`flip-card-back ${displayCubes.includes(cube) ? 'visible' : 'hidden'}`} ref={el => backCardRef.current[i] = el}>
//          {cube}
//          </div>
//          </div>
//         </div>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MemoryGame;


export const Book = () => {
  return (
    <div style={{color:'lightblue'}}>
       <h1 style={{margin:0,fontSize:'42px',textAlign:'center'}}>Lunch at the Gotham Cafe</h1>
       <div style={{width:'500px',overflow:'auto',height:'auto'}}>
    <code>
      I slammed the mop bucket forward with all the force I
could muster, and swept his legs out from under him. He
howled and brought the knife down in a long, desperate
stroke. Any closer and it would have torn off the tip of my
nose. Then he landed spraddled awkwardly on wide-spread
knees, with his face just above the mop-squeezing gadget
hung on the side of the bucket.
Perfect! I drove the mop head into the nape of his
neck. The strings draggled down over the shoulders of his
black jacket like a witch wig. His face slammed into the
squeegee. I bent, grabbed the handle with my free hand,
and clamped it shut. Guy shrieked with pain, the sound
muffled by the mop.
'PULL THOSE BOLTS!' I screamed at Diane. 'PULL
THOSE BOLTS, YOU USELESS BITCH! PULL-'
Thud! Something hard and pointed slammed into my
left buttock. I staggered forward with a yell - more surprise
than pain, I think, although it did hurt. I went to one knee
and lost my hold on the squeegee handle. Guy pulled back,
slipping out from under the stringy head of the mop at the
same time, breathing so loudly he sounded almost as if he
were barking. It hadn't slowed him down much, though; he
lashed out at me with the knife as soon as he was clear of
the bucket. I pulled back, feeling the breeze as the blade cut
the air beside my cheek.
It was only as I scrambled up that I realized what had
happened, what she had done. I snatched a quick glance
over my shoulder at her. She stared back defiantly, her back
pressed against the door. A crazy thought came to me: she
wanted me to get killed. Had perhaps even planned it, the
whole thing. Found herself a crazy maitre d' and-
Her eyes widened. 'Look out!'
I turned back just in time to see him lunging at me.
The sides of his face were bright red, except for the big
white spots made by the drain holes in the squeegee. I
rammed the mop head at him, aiming for the throat and
getting his chest instead. I stopped his charge and actually
knocked him backward a step. What happened then was
only luck. He slipped in water from the overturned bucket
and went down hard, slamming his head on the tiles. Not
thinking and just vaguely aware that I was screaming, I
snatched up the skillet of mushrooms from the stove and
brought it down on his upturned face as hard as I could,
There was a muffled thump, followed by a horrible (but
mercifully brief) hissing sound as the skin of his cheeks and
forehead boiled.
I turned, shoved Diane aside, and drew the bolts
holding the door shut. I opened the door and sunlight hit me
like a hammer. And the smell of the air. I can't remember air
ever smelling better, not even when I was a kid and it was
the first day of summer Vacation.
I grabbed Diane's arm and pulled her out into a
narrow alley lined with padlocked trash bins. At the far end
of this narrow stone slit, like a vision of heaven, was 5 3rd
Street with traffic going heedlessly back and forth. I looked
over my shoulder and through the open kitchen door. Guy
lay on his back with carbonized mushrooms circling his head
like an existential diadem. The skillet had slid off to one
side, revealing a face that was red and swelling with blisters.
One of his eyes was open, but it looked unseeingly up at the
fluorescent lights. Behind him, the kitchen was empty. There
was a pool of blood on the floor and bloody handprints on
the white enamel front of the walk-in fridge, but both the
chef and Gimpel the Fool were gone.
I slammed the door shut and pointed down the alley.
'Go on.'
She didn't move, only looked at me.
I shoved her lightly on her left shoulder. 'Go!'
She raised a hand like a traffic cop, shook her head,
then pointed a finger at me. 'Don't you touch me.'
'What'll you do? Sic your therapist on me? I think he's
dead, sweetheart.'
'Don't you patronize me like that. Don't you dare, And
don't touch me, Steven, I'm warning you.'
The kitchen door burst open. Moving, not thinking but
just moving, I slammed it shut again. I heard a muffled cry -
whether anger or pain I didn't know and didn't care - just
before it clicked shut- I leaned my back against it and
braced my feet. 'Do you want to stand here and discuss it?' I
asked her. 'He's still pretty lively, by the sound.' He hit the
door again. I rocked with it, then slammed it shut. I waited
for him to try again, but he didn't.
Diane gave me a long look, glarey and uncertain, and
then started walking up the alleyway with her head down
and her hair hanging at the sides of her neck. I stood with
my back against the door until she got about three-quarters
of the way to the street, then stood away from it, watching it
warily. No one came out, but I decided that wasn't going to
guarantee any peace of mind.
I dragged one of the trash bins in front of the door,
then set off after Diane, jogging.
When I got to the mouth of the alley, she wasn't there
anymore. I looked right, toward Madison, and didn't see her.
I looked left and there she was, wandering slowly across
53rd on a diagonal, her head still down and her hair still
hanging like curtains at the sides of her face. No one paid
any attention to her; the people in front of the Gotham Cafe
were gawking through the plate glass windows like people in
front of the Boston Seaquarium shark tank at feeding time.
Sirens were approaching, a lot of them.
I went across the street, reached for her shoulder,
thought better of it. I settled for calling her name instead.
She turned around, her eyes dulled with horror and
shock. The front of her dress had turned into a grisly purple
bib. She stank of blood and spent adrenaline.
'Leave me alone,' she said. 'I never want to see you
again.'
'You kicked my ass in there, you bitch,' I said. 'You
kicked my ass and almost got me killed. Both of us. I can't
believe you.' 'I've wanted to kick your ass for the last
fourteen months,' she said. 'When it comes to fulfilling our
dreams, we can't always pick our times, can w-'
I slapped her across the face. I didn't think about it, I
just hauled off and did it, and few things in my adult life
have given me so much pleasure. I'm ashamed of that, but
I've come too far in this story to tell a lie, even one of
omission.
Her head rocked back. Her eyes widened in shock and
pain, losing that dull, traumatized look.
'You bastard!' she cried, her hand going to her cheek.
Now tears were brimming in her eyes. 'Oh, you bastard!'
'I saved your life,' I said. 'Don't you realize that?
Doesn't that get through? I saved your fucking life.'
'You son of a bitch,' she whispered. 'You controlling,
judgmental, small-minded, conceited, complacent son of a
bitch. I hate you.'
'Fuck that jerk-off crap. If it wasn't for the conceited,
smallminded son of a bitch, you'd be dead now.'
'If it wasn't for you, I wouldn't have been there in the
first place,' she said as the first three police cars came
screaming down 53rd Street and pulled up in front of the
Gotham Cafe. Cops poured out of them like downs in a circus
act. 'If you ever touch me again, I'll scratch your eyes out,
Steve,' she said. 'Stay away from me.'
I had to put my hands in my armpits. They wanted to
kill her, to reach out and wrap themselves around her neck
and just kill her.
She walked seven or eight steps, then turned back to
me. She was smiling. It was a terrible smile, more awful than
any expression I had seen on the face of Guy the Demon
Waiter. 'I had lovers,' she said, smiling her terrible smile. She
was lying. The lie was all over her face, but that didn't make
the lie hurt any less. She wished it was true; that was all
over her face, too. 'Three of them over the last year or so.
You weren't any good at it, so I found men who were.'
She turned and walked up the street, like a woman
who was sixtyfive instead of twenty-seven. I stood and
watched her. Just before she reached the corner I shouted it
again. It was the one thing I couldn't get past; it was stuck
in my throat like a chicken bone. 'I saved your life!
Your.goddamn life!'
She paused at the corner and turned back to me. The
terrible smile was still on her face. 'No,' she said. 'You didn't.'
Then she went on around the corner. I haven't seen
her since, although I suppose I will. I'll see her in court, as
the saying goes.
I found a market on the next block and bought a
package of Marlboros. When I got back to the corner of
Madison and 53rd, 53rd had been blocked off with those
blue sawhorses the cops use to protect crime scenes and
parade routes. I could see the restaurant, though. I could see
it just fine. I sat down on the curb, lit a cigarette, and
observed developments. Half a dozen rescue vehicles
arrived - a scream of ambulances, I guess you could say.
The chef went into the first one, unconscious but
apparently still alive. His brief appearance before his fans on
53rd Street was followed by a body bag on a stretcher -
Humboldt. Next came Guy, strapped tightly to a stretcher
and staring wildly around as he was loaded into the back of
an ambulance. I thought that for just a moment his eyes met
mine, but that was probably just my imagination.
As Guy's ambulance pulled away, rolling through a
hole in the sawhorse barricade provided by two uniformed
cops, I tossed the cigarette I'd been smoking in the gutter. I
hadn't gone through this day just to start killing myself with
tobacco again, I decided.
I looked after the departing ambulance and tried to
imagine the man inside it living wherever maitre d's live -
Queens or Brooklyn or maybe even Rye or Mamaroneck. I
tried to imagine what his dining room might look like, what
pictures might be on the walls. I couldn't do that, but I found
I could imagine his bedroom with relative ease, although not
whether he shared it with a woman. I could see him lying
awake but perfectly still, looking up at the ceiling in the
small hours while the moon hung in the black firmament like
the half-lidded eye of a corpse; I could imagine him lying
there and listening to the neighbor's dog bark steadily and
monotonously, going on and on until the sound was like a
silver nail driving into his brain. I imagined him lying not far
from a closet filled with tuxedos in plastic dry-cleaning bags.
I could see them hanging there in the dark like executed
felons. I wondered if he did have a wife. If so, had he killed
her before coming to work? I thought of the blob on his shirt
and decided it was a possibility. I also wondered about the
neighbor's dog, the one that wouldn't shut up. And the
neighbor's family.
But mostly it was Guy I thought about, lying sleepless
through all the same nights I had lain sleepless, listening to
the dog next door or down the street as I had listened to
sirens and the rumble of trucks heading downtown. I
thought of him lying there and looking up at the shadows
the moon had tacked to the ceiling. Thought of that cry -
Eeeeee!- building up in his head like gas in a closed room.
'Eeeee,' I said
</code>
      </div>
    </div>
  )
}
