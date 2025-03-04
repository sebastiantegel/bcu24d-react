import { useState } from "react";
import "./App.css";
import Jsx from "./components/1.JSX/Jsx";
import Avatar from "./components/2.ComponentsAndProps/comment/Avatar";
import Comment from "./components/2.ComponentsAndProps/comment/Comment";
import Userinfo from "./components/2.ComponentsAndProps/comment/Userinfo";
import GreetingsComponent from "./components/2.ComponentsAndProps/GreetingsComponent";
import PackList from "./components/3.ConditionalRendering/PackList";
import ClickEvent from "./components/4.Eventhandler/ClickEvent";
import UseStateExample from "./components/5.UseStateHook/UseStateExample";
import Blog from "./components/6.ListsAndKeys/Blog";
import Clock from "./components/7.UseEffectAndLifeCycleMethods/Clock";

{
  /* Object belongs to lecture "2. Components and Props" */
}
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React! Allthough its pretty confusing",
  author: {
    name: "Hello Mustafa",
    avatarUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  },
};

function App() {
  // Java script section
  const [displayClockComponent, setDisplayClockComponent] = useState(true);

  return (
    <>
      {/* 7. UseEffectAndLifeCycleMethods  */}
      {displayClockComponent && <Clock />}
      <button
        onClick={() => {
          setDisplayClockComponent(!displayClockComponent);
        }}
      >
        Show/hide component
      </button>

      {/* 6. Rendering Lists */}
      {/* <Blog /> */}

      {/* 5. State Hooks */}
      {/* <UseStateExample /> */}

      {/* 4. Eventhandler */}
      {/* <ClickEvent /> */}

      {/* 3.Conditional Rendering */}
      {/* <PackList /> */}

      {/* 2. Components and Props */}
      {/* <Avatar author={comment.author} />
      <Userinfo author={comment.author} /> 
      <Comment author={comment.author} text={comment.text} date={comment.date} /> */}

      <GreetingsComponent
        name="Mustafa"
        imgSource="https://i.imgur.com/7vQD0fPs.jpg"
      />
      <GreetingsComponent
        name="Anna"
        imgSource="https://i.imgur.com/YfeOqp2.jpg"
      />

      {/* 1. JSX */}
      {/* <Jsx /> */}
    </>
  );
}

export default App;
