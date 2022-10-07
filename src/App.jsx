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
   const newPost = (data) => {
      console.log(data)
   }
   return (
      <div>
         <MeadBalls options={options} itemValue={newPost} />
      </div>
   )
}
