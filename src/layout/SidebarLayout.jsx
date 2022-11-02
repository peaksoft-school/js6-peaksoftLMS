import styled from 'styled-components'
import SideBarHeader from '../components/UI/SideBarHeader'

const SidebarLayout = ({ children }) => {
   return (
      <MainSidebar>
         <BlockSide>
            <BlockHeader>
               <BlockLinear />
               <BlockTheme>PEAKSOFT</BlockTheme>
            </BlockHeader>
            <BlockItems>
               <SideBarHeader />
            </BlockItems>
         </BlockSide>
         <div>{children}</div>
      </MainSidebar>
   )
}

export default SidebarLayout

const MainSidebar = styled.div`
   display: flex;
`
const BlockSide = styled.div`
   position: relative;
   width: 240px;
   height: 100vh;
   background: #fff;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 40px;
`
const BlockHeader = styled.nav`
   position: relative;
   margin-top: 32px;
   display: flex;
   justify-content: center;
   align-items: flex-start;
`

const BlockTheme = styled.h2`
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 36px;
   color: #1f6ed4;
`
const BlockLinear = styled.div`
   background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
   width: 10px;
   height: 10px;
   border-radius: 50%;
   position: relative;
   left: 147px;
   bottom: 5px;
`
const BlockItems = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   cursor: pointer;
`
