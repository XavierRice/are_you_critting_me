

import dmImage from '../assets/party/DM_Scoot.png'

import artieImg from '../assets/party/ArtB.PNG'
import friggImg from '../assets/party/FriggB.PNG'
import garyImg from '../assets/party/Gary2.PNG'
import shrimpImg from '../assets/party/ShrimpB.PNG'

import katiePhoto from '../assets/party/Katie_fake.png'




import davidCast from '../assets/party/DavidHS.jpg'
import scottCast from '../assets/party/ScottHS.jpg'
import sarahCast from '../assets/party/SarahHS.jpg'
import xavierCast from '../assets/party/XavierHS.jpg'


export const party = [
 {
  actor: 'Scott Johnson',
  role: 'Dungeon Master & Architect of Chaos',
  name: 'Dungeon Master',
  detail: 
    'Scott our Game Master and DM bringing its heroes, villains, monsters and catastrophes to life while keeping the story moving and the consequences coming.',
  image: dmImage,
  actorImage: scottCast,
  },

  {
    actor: 'David Carl',
    role: 'Former Captain & Questionable Wizard',
    name: 'Art Deco Falcon',
    detail:
      'An aarakocra sailor and former captain of The Salty Mermaid. Artie has crossed dangerous seas, studied the magical arts, and become moderately competent at both.',
      image: artieImg,
      actorImage:davidCast,
      },
  {
    actor: 'Katie Hartman',
    role: 'Wandering Bard & Cult Favorite',
    name: 'Shrimp Reznoir',
    detail:
      'A banjoulele-playing halfling who left home after a family dispute and began busking across Calderon. Best known for the divisive hit “Clowns Gotta Clown.”',
    image:shrimpImg,
    actorImage:katiePhoto,
  },
  {
    actor: 'Sarah Nowak',
    role: 'Mercenary & Found-Family Protector',
    name: 'Frigg',
    detail:
      'A powerful centaur cast out after learning that her mother traded Frigg’s fate for eternal beauty. She found a new family among a band of misfits for hire.',
    image:friggImg,
    actorImage:sarahCast,
  },
  {
    actor: 'Xavier Rice',
    role: 'Construct, Envoy & Reluctant Servant',
    name: 'Gary OnyxElm',
    detail:
      'Gary version 6.9 was created for grieving nobles and programmed to “Protect and Obey.” Passed from ruler to ruler, his system now reboots and he his own master for the first time.',
    image:garyImg,
    actorImage:xavierCast,
  },
]