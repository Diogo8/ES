import React, { Component } from "react";
import "../../Styles/DummyNewsFeed.css";

function NewsList (props) {
      return (
        <ul>
          {props.noticias.map((news) => (
            <li key={news.title}>
              <a href={news.src} id="header">{news.title}</a>
              <p>{news.desc}</p>
            </li>
          ))}
        </ul>
      )
    }

export default class DummyNewsFeed extends Component{
	constructor(props){
		super(props);
		
		
		this.state={
			noticias:props.news,
		}
	}

	render() {
        return (
          <div id="feed">
            <NewsList noticias={this.state.noticias} />
          </div>
        )
      }
}