var MessageView = {
  // escape: function (str) {
  //   return document.createTextNode(str);
  // },

  render: _.template(`
      <div class="chat">
        <div
          class="username <%= Friends.isFriend(username) ? 'friend' : '' %>"
          data-username="<%- username %>">
          <%- username %>
        </div>
        <div><%- text %></div>
      </div>
    `)
};

