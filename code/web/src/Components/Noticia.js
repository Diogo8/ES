import React, { Component } from 'react';

export default class Noticia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            noticia: props.noticia,
        }
    }

    render() {
        return (
            <li key={this.state.noticia.title}>
                <a href={this.state.noticia.src} id="header">{this.state.noticia.title}</a>
                <p>{this.state.noticia.desc}</p>
            </li>
        )
    }
}