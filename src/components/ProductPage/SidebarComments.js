import React, {useState} from 'react';
import { SidebarContainer, Icon, CloseIcon, CommentsContainer, CommentsBox, Text, AddComent, Classificacao, User, Comment, ContainerUser, Button, ViewComment, Icons} from './SidebarElements';
import { Rating } from '@mui/material';


const Sidebar = ({ isOpen, toggle }) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const handleViewComments = () => {
    setIsAddingComment(false)
  }

  const handleAddComment = () => {
    setIsAddingComment(true)
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
        <Icons>
          <AddComent onClick={handleAddComment}/>
          <ViewComment onClick={handleViewComments} />
        </Icons>
      </Icon>
      <Text>Avaliações</Text>
      <CommentsContainer>
        <CommentsBox>
        <Rating />
        <ContainerUser>
          <Classificacao>Muito bom</Classificacao>
          <User>João Anjos</User>
        </ContainerUser>
          <Comment> Produto de ótima qualidade - Funcionalidade não desenvolvida.</Comment>
        </CommentsBox>
        {isAddingComment ? 
          <Button>Enviar</Button> :
          null
        }
      </CommentsContainer>
    </SidebarContainer>
  )
}

export default Sidebar;