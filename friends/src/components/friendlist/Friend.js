import React from "react";

const Friend = props => {
  const {name, age, email, id} = props.friend
  console.log(props)
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};

export default Friend;
