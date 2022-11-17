import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import ModalWindow from '../UI/ModalWindow'
import ImagePicker from '../UI/ImagePicker'
import UiInput from '../UI/UiInput'
import DatePicker from '../UI/DatePicker'
import TextArea from '../UI/TextArea'
import UIButton from '../UI/UIButton'
import {
   editGroups,
   getGroupsById,
} from '../../store/slices/admin-slices/group-slices/group-actions'

export const GroupsEditModal = ({ open, onClose, isOpen }) => {
   const dispatch = useDispatch()
   // const { singleGroup } = useSelector((state) => state.groups)
   const [uploadedImage, setUploadedImage] = useState(null)

   const [groupData, setGroupData] = useState({
      groupName: '',
      description: '',
      dateOfStart: '',
   })
   const [params] = useSearchParams()
   const { id } = Object.fromEntries(params)
   const createNewGroupHandler = () => {
      if (
         !groupData.groupName &&
         !groupData.description &&
         !groupData.dateOfStart &&
         !uploadedImage
      )
         return
      dispatch(
         editGroups({
            id,
            body: {
               image: uploadedImage,
               groupName: groupData.groupName,
               description: groupData.description,
               dateOfStart: groupData.dateOfStart,
            },
         })
      )
      onClose()
      // dispatch(editGroups({ ...groupData, image: uploadedImage[0] }))
   }
   useEffect(() => {
      dispatch(getGroupsById(id))
         .unwrap()
         .then((result) => {
            setGroupData({
               ...groupData,
               groupName: result.groupName,
               description: result.description,
               dateOfStart: result.dateOfStart,
            })
            setUploadedImage(result.image)
         })
   }, [])
   return (
      <ModalWindow
         isOpen={isOpen}
         open={open}
         handleClose={onClose}
         modalTitle="Редактирование группы"
         headerContent={
            <ImagePickerBlock>
               <ImagePicker
                  setUploadedImage={setUploadedImage}
                  uploadedImage={uploadedImage}
               />
            </ImagePickerBlock>
         }
         bodyContent={
            <ModalFormBLock>
               <FormInputBlock>
                  <UiInput
                     width="327px"
                     placeholder="Название группы"
                     value={groupData.groupName}
                     onChange={(e) =>
                        setGroupData({
                           ...groupData,
                           groupName: e.target.value,
                        })
                     }
                  />
                  <DatePicker
                     value={groupData.dateOfStart}
                     width="149px"
                     height="42px"
                     placeholder="дд.мм.гг"
                     onChange={(event) =>
                        setGroupData({
                           ...groupData,
                           dateOfStart: event,
                        })
                     }
                  />
               </FormInputBlock>
               <TextArea
                  value={groupData.description}
                  onChange={(e) =>
                     setGroupData({
                        ...groupData,
                        description: e.target.value,
                     })
                  }
                  placeholder="Описание группы"
               />
            </ModalFormBLock>
         }
         footerContent={
            <FooterBlock>
               <UIButton
                  borderradius="8px"
                  width="117px"
                  height="40px"
                  variant="outlined"
                  onClick={onClose}
               >
                  Отмена
               </UIButton>
               <UIButton
                  borderradius="8px"
                  width="117px"
                  height="40px"
                  variant="contained"
                  onClick={createNewGroupHandler}
               >
                  Сохранить
               </UIButton>
            </FooterBlock>
         }
      />
   )
}

const ImagePickerBlock = styled.div`
   display: flex;
   justify-content: center;
   margin: 10px;
`

const ModalFormBLock = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const FormInputBlock = styled.div`
   display: flex;
   justify-content: space-between;
   column-gap: 12px;
   padding: 15px 0;
`
const FooterBlock = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 20px 25px 15px 0;
   column-gap: 10px;
`
