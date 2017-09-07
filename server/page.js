import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Application from '../app/Application'
// import styleCollector from './style-collector';
module.exports = function(req, scriptFilename) {
	return ReactDOMServer.renderToString(<div><div id="content"/><Application url={req.url}/><script src={"assets/" + scriptFilename}></script></div>);
}