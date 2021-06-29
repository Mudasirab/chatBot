import React, { Component } from 'react';
import Home from './components/chatBot-I/Home'
import Chatbot from "react-chatbot-kit";

import config from "./components/chatbot-II/config";
import MessageParser from "./components/chatbot-II/MessageParser";
import ActionProvider from "./components/chatbot-II/ActionProviderDocs";

class App extends Component {
    render() {
        return (
            
                <div className="App">                    
                   
                        <Home /> 
                        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />                     
                  
                </div>
          
        );
    }
}

export default App;

