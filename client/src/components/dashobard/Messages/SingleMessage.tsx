import { Typography, styled } from "@mui/material"
import Avatar from "../../shared/Avatar";

const MainContainer= styled('div')({
  width: '97%',
  display:'flex',
  marginTop:'10px'
});
const AvatarContainer=styled('div')({
  width:'70px'
});
const MessageContainer=styled('div')({
display:'flex',
flexDirection:'column'
});

const MessageContent=styled('div')({
color:'#DCDDDE'
});

const SameAuthorMessageContent=styled('div')({
 color:'#DCDDDE',
 width:'97%'
})
const SameAuthorMessageText=styled('span')({
  marginLeft:"70px"
})

const SingleMessage = ({content, sameAuthor, username, date, sameday}) => {
    if (sameAuthor && sameday ) {
      return(
        <SameAuthorMessageContent>
          <SameAuthorMessageText>
            {content}
          </SameAuthorMessageText>
        </SameAuthorMessageContent>
       
      )
    }
  return (
  <MainContainer>
    <AvatarContainer>
      <Avatar username={username} large={undefined}/>
      </AvatarContainer>
      <MessageContainer>

        <Typography style={{
          fontSize:'16px',
          color: 'white'
        }}>
       {username}{' '}
       <span style={{fontSize:'12px', color: '#72767d'}}>
        {date}
       </span>
       <MessageContent>
        {content}
       </MessageContent>
        </Typography>
      </MessageContainer>
    
  </MainContainer>
  )
}

export default SingleMessage