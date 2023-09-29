import "./App.css";
import {
  BsEmojiSmileFill,
  BsFillEmojiHeartEyesFill,
  BsFillHeartFill,
} from "react-icons/bs";

function App() {
  return (
    <>
      <div>
        <h1>
          Hello Friend!
          <BsEmojiSmileFill className="smile" />
          Thanks for you time to check out on my work. Soon I will updating
          them.
          <BsFillEmojiHeartEyesFill className="heart-eye" />
        </h1>

        <h2>
          I hope You have an amazing time and be blessed.
          <BsFillHeartFill className="heart" />
        </h2>
      </div>
    </>
  );
}

export default App;

// BsFillEmojiHeartEyesFill
// BsFillEmojiKissFill;
// BsFillHeartFill;
// BsEmojiSmileFill;
