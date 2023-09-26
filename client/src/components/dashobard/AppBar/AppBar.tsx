import { styled } from "styled-components"
import DropDrownMenu from "./DropDrownMenu"
import ChoosenOptionLabel from "./ChoosenOptionLabel"

const MainContainer = styled('div')({
position:'absolute',
right:'0',
top:'0',
height:'48px',
borderBottom:'1px solid black',
backgroundColor: '#36393f',
width:'calc(100% - 326px)',
display:'flex',
alignItems:'center',
justifyContent:'space-between',
padding:'0 15px'
})

const AppBar = () => {
  return (
    
    <MainContainer>
<ChoosenOptionLabel />
<DropDrownMenu/>
    </MainContainer>
  )
}

export default AppBar