import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import styled from 'styled-components'
import { Tooltip } from '@mui/material'
import UiInput from '../UI/UiInput'
import TextImage from '../../assets/Text.svg'
import { ReactComponent as ListImage } from '../../assets/List.svg'
import LinkImage from '../../assets/Export.svg'
import CodeImage from '../../assets/Export2.svg'
import DeleteImage from '../../assets/Delete.svg'
import UIButton from '../UI/UIButton'
import TextEditor from '../UI/createTask/TextEditor'
import { ReactComponent as Gallery } from '../../assets/Gallery.svg'
import ModalWindow from '../UI/ModalWindow'
import {
   getTaskById,
   saveTask,
} from '../../store/slices/instructor-slices/materials/materials-actions'
import fileUpload from '../../api/axiosFileUpload'

const EditTask = () => {
   const dispatch = useDispatch()
   const { lessonId, taskId } = useParams()

   const navigate = useNavigate()

   const [file, setFile] = useState(null)
   const [photo, setPhoto] = useState(null)
   const [code, setCode] = useState(null)
   const [link, setLink] = useState(null)

   const onChange = (type, value) => {
      switch (type) {
         case 'FILE':
            return setFile(value)
         case 'PHOTO':
            return setPhoto(value)
         case 'LINK':
            return setLink(value)
         case 'CODE':
            return setCode(value)
         default:
            return null
      }
   }

   const editor = useEditor({
      extensions: [StarterKit, Underline],
      content: ` `,
   })

   const [values, setValue] = useState({
      text: '',
      link: '',
   })

   const [createTask, setCreateTask] = useState({
      taskName: '',
   })

   const [modals, setModals] = useState({
      showTextEditor: false,
      showCode: false,
      showFileDelete: false,

      showCreateLink: false,
      showDeleteLink: false,
      showCreateImage: false,
      showDeleteImage: false,
      showDeleteFile: false,
      valueNameTask: '',
   })

   const [editTask, setEditTask] = useState({
      contentFormat: '',
      contentName: '',
      contentValue: '',
      id: null,
   })

   const openCreateLink = () => {
      return setModals({ ...modals, showCreateLink: true })
   }
   const closeCreateLink = () => {
      return setModals({ ...modals, showCreateLink: false })
   }
   const openDeleteLink = () => {
      return setModals({ ...modals, showDeleteLink: true })
   }
   const closeDeleteLink = () => {
      return setModals({ ...modals, showDeleteLink: false })
   }

   const openDeleteFile = () => {
      return setModals({ ...modals, showDeleteFile: true })
   }
   const closeDeleteFile = () => {
      return setModals({ ...modals, showDeleteFile: false })
   }

   const openDeleteImage = () => {
      return setModals({ ...modals, showDeleteImage: true })
   }
   const closeDeleteImage = () => {
      return setModals({ ...modals, showDeleteImage: false })
   }

   const addCode = () => {
      return setModals({ ...modals, showCode: true })
   }
   const addText = () => {
      return setModals({ ...modals, showTextEditor: true })
   }

   // eslint-disable-next-line consistent-return
   const addDataHandler = async (e) => {
      e.preventDefault()

      const contentRequests = []

      if (file) {
         const formData = new FormData()
         formData.append('file', file)
         const response = await fileUpload.post('file', formData)
         contentRequests.push({
            contentName: file.name,
            contentFormat: 'FILE',
            contentValue: response.link,
         })
      }
      if (photo) {
         const formData = new FormData()
         formData.append('file', file)
         const response = await fileUpload.post('file', formData)

         contentRequests.push({
            contentName: file.name,
            contentFormat: 'FILE',
            contentValue: response.link,
         })
      }

      if (code) {
         contentRequests.push({
            contentName: 'code',
            contentFormat: 'CODE',
            contentValue: code,
         })
      }

      const html = editor.getText()
      if (html) {
         contentRequests.push({
            contentName: 'textEditor',
            contentFormat: 'TEXT',
            contentValue: html,
         })
      }

      dispatch(
         saveTask({
            lessonId: +lessonId,
            taskName: createTask.taskName,
            contentRequests,
         })
      )
      navigate(-1)
   }

   const filePicker = useRef(null)

   const getValueTaskName = (e) => {
      setCreateTask({
         ...createTask,
         taskName: e.target.value,
      })
   }

   const handleFile = (event) => {
      return onChange('FILE', event.target.files[0])
   }

   const handlePick = () => {
      filePicker.current.click()
   }

   const getValueText = (e) => {
      setValue({ ...values, text: e.target.value })
   }
   const getValueLink = (e) => {
      setValue({ ...values, link: e.target.value })
   }

   const onChangeLink = () => {
      onChange('LINK', values)
      return closeCreateLink()
   }
   const { getRootProps, isDragActive, open } = useDropzone({
      onDrop: (files) => onChange('PHOTO', files[0]),
      maxFiles: 1,
      accept: {
         'image/jpeg': [],
         'image/png': [],
         'image/JPG': [],
      },
   })

   useEffect(() => {
      dispatch(getTaskById(taskId))
         .unwrap()
         .then((response) => {
            setCreateTask({ ...createTask, taskName: response.taskName })
            response.contentResponses.map((item) =>
               setEditTask({
                  ...editTask,
                  contentFormat: item.contentFormat,
                  contentName: item.contentName,
                  contentValue: item.contentValue,
                  id: item.id,
               })
            )
         })
   }, [])

   //    {
   //     lessonId: response.id,
   //     taskName: response.taskName,
   //     contentRequests: [

   //     ]
   //  }

   return (
      <Container>
         <h1>Создать задание</h1>

         <TopBox>
            <UiInput
               value={createTask.taskName}
               onChange={getValueTaskName}
               width="842px"
               placeholder="название задания"
            />
            <ImgTopBox>
               <Tooltip title="Текстовое поле" placement="top">
                  <ImageBackground>
                     <p onClick={addText}>
                        <TextImg src={TextImage} alt="TextImage" />
                     </p>
                  </ImageBackground>
               </Tooltip>
               <Tooltip title="Прикрепить файл" placement="top">
                  <ImageBackground>
                     <ListImage onClick={handlePick} />
                  </ImageBackground>
               </Tooltip>
               <Tooltip title="Добавить картинку" placement="top">
                  <ImageBackground {...getRootProps()}>
                     <Gallery />
                  </ImageBackground>
               </Tooltip>
               <Tooltip title="Вставить ссылку" placement="top">
                  <ImageBackground>
                     <LinkImg
                        onClick={openCreateLink}
                        src={LinkImage}
                        alt="ExportImage"
                     />
                  </ImageBackground>
               </Tooltip>

               {modals.showCreateLink && (
                  <ModalWindow
                     open={modals.showCreateLink}
                     handleClose={closeCreateLink}
                     modalTitle="Добавить ссылку"
                     footerContent={
                        <>
                           <InputContainer>
                              <UiInput
                                 width="491px"
                                 placeholder="отображаемый текст"
                                 onChange={getValueText}
                                 value={values.text}
                              />
                              <UiInput
                                 width="491px"
                                 placeholder="вставьте ссылку"
                                 onChange={getValueLink}
                                 value={values.link}
                              />
                           </InputContainer>
                           <BoxButton>
                              <UIButton
                                 onClick={closeCreateLink}
                                 variant="outlined"
                              >
                                 Отмена
                              </UIButton>
                              <UIButton
                                 variant="contained"
                                 onClick={onChangeLink}
                              >
                                 Добавить
                              </UIButton>
                           </BoxButton>
                        </>
                     }
                  />
               )}
               <Tooltip title="Код" placement="top">
                  <ImageBackground>
                     <CodeImg
                        onClick={addCode}
                        src={CodeImage}
                        alt="CodeImage"
                     />
                  </ImageBackground>
               </Tooltip>
            </ImgTopBox>
         </TopBox>

         <BottomBox>
            <TextEditor editor={editor} />
            <input
               className="hidden"
               type="file"
               ref={filePicker}
               onChange={handleFile}
            />

            {file && (
               <ListBox>
                  <ListImage />
                  <a href={file}>{file.name}</a>
                  <Deleteimage onClick={openDeleteFile}>
                     <img src={DeleteImage} alt="DeleteImage" />
                  </Deleteimage>
               </ListBox>
            )}

            {modals.showDeleteFile && (
               <ModalWindow
                  open={modals.showDeleteFile}
                  handleClose={closeDeleteFile}
                  modalTitle="Вы уверены что хотите удалить этот элемент?"
                  footerContent={
                     <ModalButton>
                        <UIButton onClick={closeDeleteFile} variant="outlined">
                           Отмена
                        </UIButton>
                        <UIButton
                           onClick={() => {
                              setFile(null)
                              closeDeleteFile()
                           }}
                           variant="contained"
                           background="#C91E1E"
                           hover="#B62727"
                           active="#E13A3A"
                        >
                           Удалить
                        </UIButton>
                     </ModalButton>
                  }
               />
            )}

            {link && (
               <LinkBox>
                  <LinkImg src={LinkImage} alt="ExportImage" />
                  <a target="_blank" rel="noreferrer" href={link.link}>
                     {link.text}
                  </a>
                  <Deleteimage onClick={openDeleteLink}>
                     <img src={DeleteImage} alt="DeleteImage" />
                  </Deleteimage>
               </LinkBox>
            )}
            {modals.showDeleteLink && (
               <ModalWindow
                  open={open}
                  handleClose={closeDeleteLink}
                  modalTitle="Вы уверены что хотите удалить этот элемент?"
                  footerContent={
                     <ModalButton>
                        <UIButton onClick={closeDeleteLink} variant="outlined">
                           Отмена
                        </UIButton>
                        <UIButton
                           onClick={() => setLink(null)}
                           variant="contained"
                           background="#C91E1E"
                           hover="#B62727"
                           active="#E13A3A"
                        >
                           Удалить
                        </UIButton>
                     </ModalButton>
                  }
               />
            )}

            <UploadImage>
               <div {...getRootProps()}>
                  {!photo ? (
                     <StyledImagePickerTittle>
                        {isDragActive}
                     </StyledImagePickerTittle>
                  ) : (
                     <StyledImagePicker src={URL.createObjectURL(photo)} />
                  )}
               </div>
               <DeleteButton onClick={openDeleteImage}>Удалить</DeleteButton>
            </UploadImage>

            {modals.showDeleteImage && (
               <ModalWindow
                  open={modals.showDeleteImage}
                  handleClose={closeDeleteImage}
                  modalTitle="Вы уверены что хотите удалить этот элемент?"
                  footerContent={
                     <ModalButton>
                        <UIButton onClick={closeDeleteImage} variant="outlined">
                           Отмена
                        </UIButton>
                        <UIButton
                           onClick={() => {
                              setPhoto(null)
                              closeDeleteImage()
                           }}
                           variant="contained"
                           background="#C91E1E"
                           hover="#B62727"
                           active="#E13A3A"
                        >
                           Удалить
                        </UIButton>
                     </ModalButton>
                  }
               />
            )}
            {modals.showDeleteLink && (
               <ModalWindow
                  open={modals.showDeleteLink}
                  handleClose={closeDeleteLink}
                  modalTitle="Вы уверены что хотите удалить этот элемент?"
                  footerContent={
                     <ModalButton>
                        <UIButton onClick={closeDeleteLink} variant="outlined">
                           Отмена
                        </UIButton>
                        <UIButton
                           onClick={() => {
                              setLink(null)
                              closeDeleteLink()
                           }}
                           variant="contained"
                           background="#C91E1E"
                           hover="#B62727"
                           active="#E13A3A"
                        >
                           Удалить
                        </UIButton>
                     </ModalButton>
                  }
               />
            )}

            <TextAreaContainer>
               <CodeImg src={CodeImage} alt="CodeImage" />
               <InputBox>
                  <TextAreaStyle
                     value={editTask.contentValue || ''}
                     onChange={(e) => onChange('CODE', e.target.value)}
                     placeholder="Вставьте код"
                  />
               </InputBox>
            </TextAreaContainer>
         </BottomBox>

         <ButtonBox>
            <UIButton
               onClick={() => navigate(-1)}
               borderradius="8px"
               fontSize="14px"
               hover=" rgba(29, 96, 255, 0.1)"
               active=" rgba(97, 144, 255, 0.3)"
               variant="outlined"
            >
               Отмена
            </UIButton>
            <UIButton
               borderradius="8px"
               fontSize="14px"
               variant="contained"
               onClick={addDataHandler}
            >
               Сохранить
            </UIButton>
         </ButtonBox>
      </Container>
   )
}

export default EditTask

const Container = styled.div`
   box-sizing: border-box;
   width: 1140px;
   height: auto;
   margin: 0 auto;
   border-radius: 10px;
   background: #fbfbfb;
   border: 1px solid #d4d4d4;
   h1 {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin: 20px 0 18px 20px;
      color: #1f6ed4;
      font-style: normal;
   }
`
const Deleteimage = styled.div`
   display: flex;
   align-items: center;
   padding-left: 3.08px;
   :hover {
      background: #c4c4c4;
      border-radius: 3px;
      width: 26px;
      height: 28.74px;
   }
`
const TopBox = styled.div`
   display: flex;
   margin-left: 20px;
   input {
      width: 842px;
   }
`
const ImgTopBox = styled.div`
   display: flex;
   justify-content: space-between;
   width: 225px;
   margin-top: 9px;
   margin-left: 29px;
   margin-right: 34px;
   p {
      padding-top: 5px;
   }
`
const ImageBackground = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 34px;
   height: 28px;
   :hover {
      text-align: center;
      background: #d4d4d4;
      border-radius: 6px;
   }
`
const TextAreaContainer = styled.div`
   width: 1050px;
   padding-left: 20px;
   display: flex;
   align-items: center;
   margin: 38px 38px 27px 0;
   img {
      margin-right: 10px;
   }
`
const InputBox = styled.div`
   width: 100%;
   box-sizing: border-box;
   height: 45px;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
`
const TextAreaStyle = styled.textarea`
   width: 1000px;
   margin: 10px 18px;
   height: 21px;
   border: none;
   outline: none;
   resize: none;
   ::placeholder {
      color: #8d949e;
      font-size: 16px;
   }
`
const DeleteButton = styled.button`
   position: absolute;
   cursor: pointer;
   width: 125px;
   height: 42px;
   border-radius: 8px;
   padding: 10px 24px;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
   background-color: #c91e1e;
   transition: 0.7s;
   color: white;
   border: none;
   display: none;
   :hover {
      background-color: #b62727;
   }
   :active {
      background-color: #e13a3a;
   }
`
const UploadImage = styled.div`
   display: flex;
   align-items: center;
   background-size: cover;
   justify-content: center;
   background-repeat: no-repeat;
   margin-right: 270px;
   border-radius: 10px;
   background-image: url(${(p) => p.bcgImage});
   &:hover ${DeleteButton} {
      transition: 0.6s;
      display: block;
      filter: none;
   }
   :hover {
      filter: brightness(80%);
   }
`
const ButtonBox = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 17px 20px 22px 0;
   gap: 10px;
`
const TextImg = styled.img`
   width: 14px;
   height: 17px;
`
const LinkImg = styled.img`
   width: 23px;
   height: 16px;
`
const CodeImg = styled.img`
   width: 24px;
   height: 18px;
`
const StyledImagePickerTittle = styled.span`
   font-size: 18px;
   font-weight: bold;
`
const StyledImagePicker = styled.img`
   width: 792px;
   height: 464px;
   border-radius: 10px;
   object-fit: cover;
`
const BottomBox = styled.div`
   width: 1100px;
   height: auto;
   border-radius: 10px;
   margin: 23px 20px 17px 20px;
   background: #ffffff;
   border: 1px solid #d4d4d4;
`
const ListBox = styled.div`
   height: 24px;
   width: auto;
   display: flex;
   align-items: center;
   margin: 0px 0 25px 18px;
   p {
      padding: 0 8px;
   }
   a {
      margin: 0 13px;
   }
`
const LinkBox = styled.div`
   height: 24px;
   width: auto;
   display: flex;
   align-items: center;
   margin: 0px 0 25px 18px;
   p {
      padding: 0 8px;
   }
   a {
      margin: 0 13px;
   }
`
const ModalButton = styled.div`
   button {
      margin: 10px;
      width: 120px;
      border-radius: 6px;
   }
`
const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   div {
      margin: 6px 13px;
   }
`
const BoxButton = styled.div`
   display: flex;
   justify-content: end;
   margin-right: 20px;
   button {
      width: 117px;
      border-radius: 8px;
      margin: 15px 5px;
   }
`
