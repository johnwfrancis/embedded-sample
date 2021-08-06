var app = new window.Webex.Application();

app.onReady().then(() => log('onReady()', {message:'The app is ready.'}));

function log(type, data) {
  var ul = document.getElementById("console");
  var li = document.createElement("li");
  var payload = document.createTextNode(`${type}: ${JSON.stringify(data)}`);
  li.appendChild(payload)
  ul.prepend(li);
}

function handleGetUser(){
  app.context.getUser().then((user) => {
    log('Complete JSON string: ', user);
    log('user.id: ', user.id);
    log('user.orgId: ', user.orgId);
    log('user.email: ', user.email);
    log('user.displayName: ', user.displayName);
    log('user.token: ', user.token);
  });
}
