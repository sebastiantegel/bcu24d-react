import './App.css'
import Jsx from './components/1.JSX/Jsx';
import Avatar from './components/2.ComponentsAndProps/comment/Avatar';
import Comment from './components/2.ComponentsAndProps/comment/Comment';
import Userinfo from './components/2.ComponentsAndProps/comment/Userinfo';
import GreetingsComponent from './components/2.ComponentsAndProps/GreetingsComponent';

  {/* Object belongs to lecture "2. Components and Props" */}
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React! Allthough its pretty confusing',
    author: {
      name: 'Hello Mustafa',
      avatarUrl: 'https://i.imgur.com/7vQD0fPs.jpg'
    }
  };

function App() {
  // Java script section
  return (
    <>

      <Avatar author={comment.author} />
      <Userinfo author={comment.author} /> 
      <Comment author={comment.author} text={comment.text} date={comment.date} />

      {/* <GreetingsComponent name="Mustafa" imgSource="https://i.imgur.com/7vQD0fPs.jpg" />
      <GreetingsComponent name="Anna" imgSource="https://i.imgur.com/YfeOqp2.jpg" /> */}

      {/* <Jsx /> */}

    </>
  );
}

export default App
