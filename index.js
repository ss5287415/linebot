var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1594817585',
  channelSecret:'7ef4d66158c7a53a9887017ec6e31394',
  channelAccessToken: 'MHWF9Ko6a0jYjwE5jOO1IP/ex9/1s0S+smKrqQ8MoikUdEJy39Kma1ENWoH1NW7hIAoyy+Ti8uZWUJeOo+c5Ne/CcRofmuL0Z0eTKyd8+pb+124obDd3jgiJ6cYc1VlEcdK1TXx/e1XkJL9QhYqhEgdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});