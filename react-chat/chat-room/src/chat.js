const currentUsers = ['sample'];
const messages = [
    {
        sender: "sample",
        text: "sample-text",
    },
];

function addUser(username) {
    currentUsers.push(username);
}

function removeUser(username) {
    const index = currentUsers.indexOf(username);
    if (index > -1) {
        currentUsers.splice(index, 1);
    }
}

function addMessage({ sender, text }) {
    messages.push({sender, text});
}
  
const chat = {
    currentUsers,
    messages,
    addUser,
    removeUser,
    addMessage,
};
  
module.exports = chat;