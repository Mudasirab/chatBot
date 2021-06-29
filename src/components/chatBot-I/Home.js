import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios'
import data from '../../data/data.json'
import botIcon from '../assets/botIcon.png'
import { ThemeProvider } from 'styled-components'; 

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  fontFamily: 'Helvetica',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class Home extends Component {
  constructor(){
    super()
    this.state={
      botResponse:data
    }
  }
//   async componentDidMount() {
//     const botResponse = await axios.get('http://urlgoes-here/chat1');
//     this.setState({ botResponse: botResponse.data })
// }
    render() {
        return (
          <ThemeProvider theme={theme}>
              <ChatBot
              steps={this.state.botResponse}
              //speechSynthesis={{ enable: true, lang: 'en' }}
              recognitionEnable={true}
              botAvatar={botIcon}
              headerTitle="Chat Bot Test"
              headerBgColor="#ea1919"
              floating
              enableMobileAutoFocus
              />
          </ThemeProvider>
         

        );
    }
}

export default Home;