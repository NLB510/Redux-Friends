import React from "react";

import styled from "styled-components"
import {connect} from "react-redux"



const Friend = props => {
  const { name, age, email, id } = props.friend;
  console.log(props);
  return (
    <FriendContainer>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <ButtonContainer>
        <button>Edit</button>
        <button onClick={(e) => props.deleteFriendHandler(e, id)}>Delete</button>
        {/* {props.status.deletingFriend ? <button>Confirm</button> : <button onClick={(e) => props.startDelete(e)}>Delete</button>} */}
      </ButtonContainer>
    </FriendContainer>
  
      
  );
};


/* 
==== Component Styles ====
*/


const FriendContainer = styled.div`
  width: 30%;
  margin: 2% 2%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const mapStateToProps = state => {
  return {
    status: state.status
  }
}


export default connect(mapStateToProps,{})(Friend);
