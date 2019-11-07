console.log('Client called')
const http = require('http');

const tweetContainer = document.getElementById('tweets-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)
    const message = messageInput.value
    console.log(message)
    appendMessage(`You: ${message}`)
    sseSession();
  })

  const sseSession = () => {
    http.get({
        agent: false,
        path: '/stream',
        hostname: 'tweet-service.herokuapp.com'
    }, (res1) => {
        res1.on('data', aa => {
            var n = aa.toString().replace('data: ', '');
            try {
                var a = JSON.parse(n);
                var data;
               // console.log( a.tweet, a.tweet.includes('kublai') )
                if (a.tweet.includes('house of cards')){
                  //  data += a;
                    console.log(a)
                    res.sendDate(a.tweet);
                }
               
               // console.log(a.tweet)
               
            } catch (_error) { }
            //res.write( n);
        });
    })
  }
  function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    tweetContainer.append(messageElement)
  }