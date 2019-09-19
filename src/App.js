import React from 'react';
import './App.css';
import Tweet from './components/Tweet/Tweet';

export const server = 'http://localhost:1337';

function App() {
  const [ tweets, setTweets ] = React.useState([]);

  React.useEffect(() => {
    getTweets();
  }, []);

  const getTweets = () => {
    fetch(server + '/tweets')
      .then((response) => {
        return response.json();
      })
      .then((info) => {
        console.log(info);

        setTweets(info);
      });
  }

  return (
    <div className="App">

      <textarea></textarea>
      <button>Enviar</button>
      
      {tweets.map((item) => {
       return <Tweet key={item.id} 
        text={item.text}
        background={item.background}
        media={item.media} />
      })}

    </div>
  );
}

export default App;
