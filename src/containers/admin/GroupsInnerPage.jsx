import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getGroupStudentById } from '../../store/slices/admin-slices/group-slices/group-actions'
import UiTable from '../../components/UI/UiTable'
import Wrapper from '../../components/UI/Wrapper'

export const GroupsInnerPage = () => {
   const { id } = useParams()
   const dispatch = useDispatch()

   const { groupStudents } = useSelector((state) => state.groups)

   const STUDENT_HEADER = [
      {
         id: 1,
         idName: 'ID',
         firstName: 'Имя Фамилия',
         groupName: 'Группа',
         phoryatLearning: 'Формат',
         phoneName: 'Номер телефона',
         emailName: 'E-mail',
      },
   ]

   // const ADMIN_INNER_PATH = [
   //    { path: '/admin/groups', name: 'Группы' },
   //    { path: `/admin/groups/${id}`, name: groupStudents[0]?.groupName },
   // ]

   const render = groupStudents.map((item, i) => {
      return {
         id: i + 1,
         name: item.fullName,
         format: item.studyFormat,
         group: item.groupName,
         phone: item.phoneNumber,
         email: item.email,
      }
   })

   useEffect(() => {
      dispatch(getGroupStudentById(id))
   }, [])

   return (
      <StudetsMain>
         <BreadcrumsBlock>
            {/* <Link to="/admin/groups">Группы </Link>
            <p>\</p>
            <Link to={`/admin/groups/${id}`}>{groupStudents[0].groupName}</Link> */}
         </BreadcrumsBlock>
         <TableMain>
            <Wrapper width="1140px" margin="24px 0" height="100vh">
               <UiTable headData={STUDENT_HEADER} data={render} />
            </Wrapper>
         </TableMain>
      </StudetsMain>
   )
}
const StudetsMain = styled.div`
   background-color: #eff0f4;
   width: 100%;
`
const TableMain = styled.div`
   display: flex;
   justify-content: center;
`
// const BreadcrumsBlock = styled.div`
//    display: flex;
//    padding-top: 44px;
//    margin-left: 39px;

//    a {
//       color: #747d74;
//       height: 20px;
//       text-decoration: none;
//    }
//    a:last-child {
//       font-weight: 400;
//       color: #000;
//    }
//    p {
//       margin: 0 6px;
//    }
// `

const BreadcrumsBlock = styled.div``
