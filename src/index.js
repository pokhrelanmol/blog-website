import {React } from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import BlogProvider from './components/CreatePosts';
 ReactDOM.render(
	 <BlogProvider>
		 
 <App/>
	 </BlogProvider>
,document.getElementById('root'))
 