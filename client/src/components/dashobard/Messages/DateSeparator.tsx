import { styled } from "@mui/material"

const Seperator= styled('div')({
    width:'95%',
    backgroundColor: '#b9bbbe',
    height: '1px',
    position: 'relative',
    marginTop:'20px',
    marginBottom:'10px'
});
const DateLebele=styled('span')({
    backgroundColor:'#36393f',
    position:"absolute",
    left:'45%',
    top:'-10px',
    color:'#b9bbbe',
    padding:'0 5px',
    fontSize:'14px'
})

const DateSeparator = ({date}) => {
  return (
   <Seperator>
    <DateLebele>
        {date}
    </DateLebele>
   </Seperator>
  )
}

export default DateSeparator