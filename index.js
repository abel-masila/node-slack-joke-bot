const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-79953380449-384639174131-WpftIaXceC32OsXUCUM2z2xD',
  name: 'Joke Bot'
});

//Create start handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };
  bot.postMessageToChannel(
    'general',
    'Start your day well with jokes from @Jokebot!',
    params
  );
});
//Error handler
bot.on('error', err => {
  console.log(e);
});

//Message Handler
bot.on('message', res => {
  if (res.type !== 'message') return;
  handleMessage(res.text);
});
//Respond to data
const handleMessage = msg => {
  if (msg.includes(' chucknorris')) {
    chuckJoke();
  }
};

//Tell a Chuck Norris Joke
const chuckJoke = () => {
  //Make xhr request
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    const joke = res.data.value.joke;
    const params = {
      icon_emoji: ':laughing:'
    };
    bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
  });
};
