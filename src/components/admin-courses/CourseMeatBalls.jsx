import React from 'react'
import { MeatBalls } from '../UI/MeatBalls'
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg'
import { ReactComponent as EditIcon } from '../../assets/editIcon.svg'
import { ReactComponent as AssignTeacher } from '../../assets/assignTeacher.svg'

const CourseMeatBalls = ({
   openDeleteModal,
   openEdditModal,
   id,
   openAssignModal,
}) => {
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
      {
         id: '3',
         icon: <AssignTeacher />,
         name: 'Назначить учителя',
         click: () => openAssignModal(id),
      },
   ]
   return <MeatBalls options={navigate} />
}

export default CourseMeatBalls
