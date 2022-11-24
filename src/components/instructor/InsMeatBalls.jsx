import React from 'react'
import { MeatBalls } from '../UI/MeatBalls'
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg'
import { ReactComponent as AddIcon } from '../../assets/addCourse.svg'

export const InsMeatBalls = () => {
   // const { openDeleteModal, openEdditModal, id } = props
   const navigate = [
      {
         id: '1',
         icon: <AddIcon />,
         name: 'Добавить группу на курс',
         // click: () => openEdditModal(id),
      },
      {
         id: '2',
         icon: <DeleteIcon />,
         name: 'Удалить группу с курса',
         // click: () => openDeleteModal(id),
      },
   ]
   return <MeatBalls options={navigate} />
}
