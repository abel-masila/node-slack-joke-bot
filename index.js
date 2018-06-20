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
//Message Handler
bot.on('message', res => {
  if (res.type !== 'message') return;
  handleMessage(res.text);
});
//Respond to data
const handleMessage = msg => {
  if (msg.includes(' chucknorris')) {
    chuckJoke();
  } else if (msg.includes(' yomama')) {
    yoMommaJoke();
  } else if (msg.includes(' random')) {
    randomJoke();
  } else if (msg.includes(' help')) {
    runHelp();
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
//Tell a Yo Momma Joke
const yoMommaJoke = () => {
  axios.get('http://api.yomomma.info').then(res => {
    const joke = res.data.joke;
    const params = {
      icon_emoji: ':laughing:'
    };
    bot.postMessageToChannel('general', `Yo Momma: ${joke}`, params);
  });
};
//Tell a random joke
const randomJoke = () => {
  const rand = Math.floor(Math.random() * 2) + 1;
  if (rand === 1) {
    chuckJoke();
  } else if (rand === 2) {
    yoMommaJoke();
  }
};
//Error handler
bot.on('error', err => {
  console.log(e);
});
