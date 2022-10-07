import React from 'react'
import { MeadBalls } from './components/UI/MeadBalls'

const options = [
   'None',
   'Atria',
   'Callisto',
   'Dione',
   'Ganymede',
   'Hangouts Call',
   'Luna',
   'Oberon',
   'Phobos',
   'Pyxis',
   'Sedna',
   'Titania',
   'Triton',
   'Umbriel',
]
export const App = () => {
   return (
      <div>
         <MeadBalls>
            {options.map((element) => (
               <p>{element}</p>
            ))}
         </MeadBalls>
      </div>
   )
}
