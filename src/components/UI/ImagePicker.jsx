import styled from 'styled-components'
import { useDropzone } from 'react-dropzone'
import { useState } from 'react'
import imagePickerIcon from '../../assets/ImagePickerIcon.svg'

function ImagePicker({ GetImg }) {
   const [files, setFiles] = useState(null)
   const onDrop = (acceptedFiles) => {
      setFiles(
         acceptedFiles.map((file) =>
            Object.assign(file, {
               preview: URL.createObjectURL(file),
            })
         )
      )
      GetImg(acceptedFiles)
   }
   const { getRootProps, getInputProps } = useDropzone({
      accept: {
         'image/jpeg': [],
         'image/png': [],
         'image/JPG': [],
      },
      maxFiles: 1,
      onDrop,
   })

   return (
      <Container>
         <MainPicker>
            {files ? (
               <ImageWrapper>
                  <ImgContent alt="preview" src={files[0].preview} />
               </ImageWrapper>
            ) : (
               <DropContainer {...getRootProps()}>
                  <ToAddImg src={imagePickerIcon} alt="" />
                  <input {...getInputProps()} />
               </DropContainer>
            )}
         </MainPicker>
         <Text>Нажмите на иконку чтобы загрузить или перетащите фото</Text>
      </Container>
   )
}
export default ImagePicker
const Container = styled.div`
   display: flex;
   width: 241px;
   text-align: center;
   justify-content: center;
   flex-direction: column;
   align-items: center;
`
const MainPicker = styled.div`
   background: #f6f6f9;
   width: 173px;
   height: 145px;
   border-radius: 10px;
   position: relative;
   cursor: pointer;
`
const ImageWrapper = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   & > img {
      border-radius: 8px;
   }
`
const DropContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const ToAddImg = styled.img``
const Text = styled.span`
   margin-top: 6px;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   text-align: center;
   letter-spacing: 0.03em;
   color: #8d949e;
`
const ImgContent = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
