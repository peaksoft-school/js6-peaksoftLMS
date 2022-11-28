import React from 'react'
import { MeatBalls } from '../UI/MeatBalls'
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg'

export const GroupsMeatBalls = ({ openDeleteModal, openEdditModal, id }) => {
   const navigate = [
      {
         id: '1',
         icon: <DeleteIcon />,
         name: 'Удалить',
         click: () => openDeleteModal(id),
      },
      {
         id: '2',
         icon: <EditIcon />,
         name: 'Редактировать',
         click: () => openEdditModal(id),
      },
   ]
   return <MeatBalls options={navigate} />
}
