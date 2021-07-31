const chatWeb = {
  chatPage: function(chat) {
    // Fill in anything below!
    return `
      <!doctype html>
      <html>
        <head>
          <link rel="stylesheet" href="css/basic.css"/>
          <title>Chat</title>
        </head>
        <body>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
            </div>
            ${chatWeb.getOutgoing(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      // Fill in!
      chat.messages.map( message => `
        <li>
          <div class="message">
            <div class="message-sender">
                <span class="username">${message.sender}</span>
            </div>
            <p class="message-text">${message.text}</p>
	  </div>
        </li>
      `).join('')+
      `</ol>`;
  },
  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  getOutgoing: function() {
    // Fill in! Make an html form here sending data to a specific URL and have with that data having certain names
    return `
      <div class="outgoing">
        <form action="/chat" method="POST">
          <input name="username" value=Bao type="hidden"/>
          <input name="text" value=""/>
          <button type="submit">Send</button>
        </form>
      </div>
    `;
  }
};
module.exports = chatWeb;
