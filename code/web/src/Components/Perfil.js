import React, {Component} from 'react';

export default class Perfil extends Component {

  constructor (props) {
      super(props);
      this.state = {
          // User: props.user,
          'user': {
              'img': 'https://i.imgur.com/ALHwT5B.png',
              'name': 'Joao Almeida',
              'username': 'jlamma'
          }
      };
  }

  render () {
    return (
      <div>
        <img src={this.state.user.img} alt='Imagem de perfil'/>
        <h3>Name: {this.state.user.name} </h3>
        <p>Username: @{this.state.user.username}</p>
      </div>
    );
  }
}