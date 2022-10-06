import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import styled from 'styled-components'

function GroupCard({ someImage, someName, someYear, someParagraph }) {
   return (
      <CardGroup>
         <CardAction>
            <CardImg component="img" image={someImage} alt="img" />
            <CardContent>
               <TypographyYear>
                  <TypographyName gutterBottom variant="h5" component="div">
                     {someName}
                  </TypographyName>
                  <Year>{someYear}</Year>
               </TypographyYear>
               <Typography variant="body2" color="text.secondary">
                  {someParagraph}
               </Typography>
               <HorizonIcon>
                  <MoreHorizIcon />
               </HorizonIcon>
            </CardContent>
         </CardAction>
      </CardGroup>
   )
}

export default GroupCard
const CardGroup = styled(Card)`
   &:hover {
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.5);
   }
   &.MuiPaper-root {
      box-sizing: border-box;
      width: 270px;
      height: 311px;
      background: #ffffff;
      border: 1px solid #d4d4d4;
      border-radius: 10px;
   }
`
const CardAction = styled(CardActionArea)`
   display: flex;
   flex-direction: column;
   height: 311px;
`
const CardImg = styled(CardMedia)`
   &.MuiCardMedia-root {
      width: 270px;
      height: 171px;
   }
`
const TypographyYear = styled.div`
   display: flex;
   width: 238px;
   justify-content: space-between;
   align-items: center;
`
const Year = styled.h4`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 140.1%;
   color: #1d293f;
`
const TypographyName = styled(Typography)`
   &.MuiTypography-root {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: #1d293f;
   }
`
const HorizonIcon = styled.div`
   display: flex;
   justify-content: end;
`
