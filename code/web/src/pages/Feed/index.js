import React from 'react';
import {news_data} from "../../utils/consts";
import NewsFeed from "../../components/NewsFeed";
import "../../styles/feed.css";

import { Formik, Form, Field } from 'formik';

export default class Feed extends React.Component{
	constructor(props){
		super(props);
		this.state={
			noticias:news_data,
			search_results:[],
		}
		this.handleNewPost = this.handleNewPost.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleNewPost(values) {
        this.setState((currentState) => {
        	var newPost={title:"My post from "+Date().toLocaleString(), desc: values.post, src:""};
	        return {
	        	noticias: [newPost].concat(currentState.noticias)
	        }
        })
    }

    handleSearch(values){
    	if(!values.search){
    		return;
    	}
    	this.setState((currentState) => {
		    return {
		        search_results: currentState.noticias.filter((noticia) => noticia.title.toLowerCase().includes(values.search.toLowerCase()))
		    }
        })
    }

	render() {
        return (
        	<div id="Feed">
		        <div id="Search">
		        	<Formik
          				initialValues={{ search: '', }}
          				onSubmit={values => this.handleSearch(values)}
					>
						<Form>
				            <Field type="text" name="search" placeholder="Search news..." />
				          	<button type="submit">Search</button>
				        </Form>
					</Formik>
				</div>
				<div id="NewPost">
		        	<Formik
          				initialValues={{ post: '', }}
          				onSubmit={values => this.handleNewPost(values)}
					>
						<Form>
				            <Field type="text" name="post" placeholder="Write new post..." />
				          	<button type="submit">Publish</button>
				        </Form>
					</Formik>
				</div>
				<div id="SearchResults">
					<NewsFeed noticias={this.state.search_results} nome="Search Results"/>
				</div>
		        <div id="NewsFeed">
		        	<NewsFeed noticias={this.state.noticias}  nome="News Feed"/>
		        </div>
	        </div>
        )
    }
}


