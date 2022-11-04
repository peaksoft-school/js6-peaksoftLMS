import React from 'react'
import styled from 'styled-components'
import UiInput from '../UiInput'
import TextImage from '../../../assets/Text.svg'
import ListImage from '../../../assets/List.svg'
import GalleryImage from '../../../assets/Gallery.svg'
import ExportImage from '../../../assets/Export.svg'
import Export2Image from '../../../assets/Export2.svg'
import DeleteImage from '../../../assets/Delete.svg'
import BackgroundImage from '../../../assets/BackgroundImage.svg'
import UIButton from '../UIButton'
import TextEditor from './TextEditor'

const CreateTask = () => {
   return (
      <Container>
         <h1>Создать задание</h1>
         <TopBox>
            <UiInput placeholder="название задания" />
            <ImgTopBox>
               <TextImg src={TextImage} alt="TextImage" />
               <ListImg src={ListImage} alt="ListImage" />
               <GalleryImg src={GalleryImage} alt="GalleryImage" />
               <ExportImg src={ExportImage} alt="ExportImage" />
               <Export2Img src={Export2Image} alt="Export2Image" />
            </ImgTopBox>
         </TopBox>
         <BottomBox>
            <TextEditor />
            <ListBox>
               <ListImg src={ListImage} alt="ListImage" />
               <p>Название файла.формат</p>
               <Deleteimage>
                  <img src={DeleteImage} alt="DeleteImage" />
               </Deleteimage>
            </ListBox>
            <ListBox>
               <ExportImg src={ExportImage} alt="ExportImage" />
               <p>Название ссылки</p>
               <Deleteimage>
                  <img src={DeleteImage} alt="DeleteImage" />
               </Deleteimage>
            </ListBox>
            <ImageDiv bcgImage={BackgroundImage}>
               <DeleteButton>Удалить</DeleteButton>
            </ImageDiv>
            <InputBox>
               <Export2Img src={Export2Image} alt="Export2Image" />
               <UiInput placeholder="Вставьте код" />
            </InputBox>
         </BottomBox>
         <ButtonBox>
            <UIButton
               borderradius="8px"
               fontSize="14px"
               hover=" rgba(29, 96, 255, 0.1)"
               active=" rgba(97, 144, 255, 0.3)"
               variant="outlined"
            >
               Отмена
            </UIButton>
            <UIButton borderradius="8px" fontSize="14px" variant="contained">
               Сохранить
            </UIButton>
         </ButtonBox>
      </Container>
   )
}

export default CreateTask
const Container = styled.div`
   box-sizing: border-box;
   width: 1140px;
   height: 1026px;
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
   gap: 26px;
   width: 220px;
   margin-top: 9px;
   margin-left: 19px;
`
const BottomBox = styled.div`
   width: 1100px;
   height: 822px;
   border-radius: 10px;
   margin: 23px 20px 17px 20px;
   background: #ffffff;
   border: 1px solid #d4d4d4;
`
const InputBox = styled.div`
   display: flex;
   align-items: center;
   input {
      width: 1000px;
   }
   img {
      margin: 0 10px 0 18px;
   }
`
const ListBox = styled.div`
   width: auto;
   height: 24px;
   display: flex;
   align-items: center;
   margin: 33px 0 25px 18px;
   p {
      padding: 0 8px;
   }
`
const DeleteButton = styled.button`
   width: 125px;
   height: 42px;
   border-radius: 8px;
   padding: 10px 24px;
   font-weight: 600;
   font-size: 18px;
   line-height: 22px;
   color: white;
   background-color: #c91e1e;
   transition: 0.7s;
   border: none;
   display: none;
   :hover {
      background-color: #b62727;
   }
   :active {
      background-color: #e13a3a;
   }
`
const ImageDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 792px;
   height: 464px;
   border-radius: 10px;
   background-image: url(${(p) => p.bcgImage});
   background-size: cover;
   margin-bottom: 30px;
   margin-left: 18px;
   background-repeat: no-repeat;
   &:hover ${DeleteButton} {
      transition: 0.6s;
      display: block;
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
const ListImg = styled.img`
   width: 18px;
   height: 20px;
`
const GalleryImg = styled.img`
   width: 18px;
   height: 18px;
`
const ExportImg = styled.img`
   width: 23px;
   height: 16px;
`
const Export2Img = styled.img`
   width: 24px;
   height: 18px;
`
