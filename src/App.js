import logo from './logo.svg';
import './App.css';
import Joke from "../src/components/Joke.js"
import JokesData from './JokesData.js';
// Without using map function
// function App() {
//   return (
//     <div className="App">
//       <Joke 
//       Setup="A man walks into a library and asks the librarian for books about paranoia."
//       Punchline='She whispers, "They are right behind you"'
//       upVotes={10}
//       downVotes={15}
//       />
//       <Joke 
//         Setup="What do you call a fish with no eyes?"
//         Punchline='Fsh!'
//         upVotes={20}
//         downVotes={10}
//       />
//       <Joke 
//         Setup="Why did the scarecrow win an award?"
//         Punchline='Because he was outstanding in his field!'
//         upVotes={25}
//         downVotes={22}
//       />
//       <Joke 
//         Setup="Why did the bicycle fall over?"
//         Punchline='Because it was two tired.'
//         upVotes={13}
//         downVotes={2}
//       />
//       <Joke 
//         Setup="What do you call a lazy kangaroo?"
//         Punchline=' A pouch potato.'
//         upVotes={12}
//         downVotes={10}
//       />
//     </div>
//   );
// }

function App() {
  
  const jokeElements=JokesData.map(joke=>{
    return <Joke Setup={joke.Setup} Punchline={joke.Punchline}/>
  })
  return (
    <div className="App">
      {jokeElements}
    </div>
  );
}

export default App;
