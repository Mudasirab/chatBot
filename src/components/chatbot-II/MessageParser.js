class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  // {
  //   lowerCaseMessage.includes("hello") ?  : lowerCaseMessage.includes("javascript") ?  :""
  //   // : lowerCaseMessage.includes("APIs") ?  : "";
  //       //  this.actionProvider.handleJAPIsList()
  // }
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      } else if(lowerCaseMessage.includes("APIs")){
        this.actionProvider.handleJAPIsList()
      } else if(lowerCaseMessage.includes("javascript")){
        this.actionProvider.handleJavascriptList()
      }else{
        this.actionProvider.endChat()
      }
    }
  }
  
  export default MessageParser;