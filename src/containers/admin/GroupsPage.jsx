import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import FadeLoader from 'react-spinners/FadeLoader'
import GroupCard from '../../components/UI/GroupCard'
import UIButton from '../../components/UI/UIButton'
import { ReactComponent as PlusIcon } from '../../assets/plusIcon.svg'
import { GroupsModalWindow } from '../../components/admin-groups/GroupsModalWindow'
import { GroupsEditModal } from '../../components/admin-groups/GroupsEditModal'
import PopUp from '../../components/UI/PopUp'
import { GroupsMeatBalls } from '../../components/admin-groups/GroupsMeatBalls'
import {
   deleteGroups,
   getGroups,
} from '../../store/slices/admin-slices/group-slices/group-actions'

export const GroupsPage = () => {
   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)
   const [openCreateModal, setCreateModal] = useState(false)
   const dispatch = useDispatch()
   const { error, status } = useSelector((state) => state.groups)
   const groups = useSelector((state) => state.groups)
   const navigate = useNavigate()
   useEffect(() => {
      dispatch(getGroups())
   }, [])

   const showModalHandler = () => {
      setCreateModal(true)
   }
   const openDeleteModal = (id) => {
      dispatch(deleteGroups(id))
   }

   const openEdditModal = (id) => {
      setParams({ modalOpen: 'EDDIT-GROUP', id })
   }
   const onCloseModal = () => {
      setParams({})
   }
   const navigateHanlder = (id) => {
      navigate(`/admin/groups/${id}`)
   }
   return (
      <>
         {error && <PopUp message={error} messageType="error" />}
         <GroupsMain>
            <ButtonBlock>
               <UIButton
                  startIcon={<PlusIcon />}
                  variant="contained"
                  onClick={showModalHandler}
                  background="#3772FF"
               >
                  Создать курс
               </UIButton>
            </ButtonBlock>

            {status === 'loading' ? (
               <LoadingBlock>
                  <FadeLoader size={200} color="#3772FF" />
               </LoadingBlock>
            ) : (
               <GridGroups>
                  {groups.groups?.map((element) => (
                     <GroupCard
                        key={element.id}
                        someImage={element.image}
                        someName={element.groupName}
                        someParagraph={element.description}
                        someYear={element.dateOfStart}
                        onClick={() => navigateHanlder(element.id)}
                        someButton={
                           <GroupsMeatBalls
                              openDeleteModal={openDeleteModal}
                              openEdditModal={openEdditModal}
                              id={element.id}
                           />
                        }
                     />
                  ))}
               </GridGroups>
            )}
            {openCreateModal && (
               <GroupsModalWindow
                  isOpen={setCreateModal}
                  open={openCreateModal}
               />
            )}
            {modalOpen === 'EDDIT-GROUP' && (
               <GroupsEditModal
                  open={modalOpen === 'EDDIT-GROUP'}
                  onClose={onCloseModal}
               />
            )}
         </GroupsMain>
      </>
   )
}

const GroupsMain = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 0 40px 0 20px;
   background-color: #eff0f4;
`

const ButtonBlock = styled.div`
   display: flex;
   justify-content: end;
   margin: 34px 0;
`

const GridGroups = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 20px;
   row-gap: 20px;
`
const LoadingBlock = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`
