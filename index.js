var app = new window.Webex.Application();

app.onReady().then(() => log('onReady()', {message:'The app is ready.'}));

function log(type, data) {
  var ul = document.getElementById("console");
  var li = document.createElement("li");
  var payload = document.createTextNode(`${type}: ${JSON.stringify(data)}`);
  li.appendChild(payload)
  ul.prepend(li);
}

app.listen('application:themeChanged', (payload) => log('application:themeChanged', payload))
