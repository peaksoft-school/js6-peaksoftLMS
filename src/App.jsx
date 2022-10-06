import React from 'react'
// import TextArea from './components/UI/TextArea'
import GroupCard from './components/UI/GroupCard'

function App() {
   return (
      <div>
         {/* <TextArea /> */}
         <GroupCard
            someImage="https://www.fa-mag.com/userfiles/0000002019_IMAGES_ALL/FA_ISSUES_2019/10_FA_OCTOBER_2019/LONGVIEW_Lessons-From-A-Young-Professional_Patel--600x400.jpg"
            someName="Data Engineer"
            someYear="2019-2020"
            someParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ornare pretium placerat ut .."
         />
      </div>
   )
}
export default App
