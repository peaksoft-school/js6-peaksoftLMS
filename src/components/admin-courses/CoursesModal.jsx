// import React, { useState } from 'react'
// import ImagePicker from '../UI/ImagePicker'
import ModalWindow from '../UI/ModalWindow'

const CoursesModal = ({ open, isOpen }) => {
   // const [image, setImage] = useState([])
   // console.log(image)
   return (
      <div>
         <ModalWindow
            modalTitle="hgfghfjh"
            // headerContent={<ImagePicker G />}
            open={open}
            handleClose={() => isOpen(false)}
         />
      </div>
   )
}

export default CoursesModal
