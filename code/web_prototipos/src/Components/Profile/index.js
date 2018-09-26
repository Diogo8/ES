import React from "react";

const Perfil = (props) => (
    <div>
      <img src={props.user.img} alt="Imagem de perfil"/>
      <h3>Name: {props.user.name} </h3>
      <p>Username: @{props.user.username}</p>
    </div>
);

export default Perfil;