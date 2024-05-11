import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addUser } from "../store/noteSlice";

const Welcome = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col  gap-4 items-center h-[90vh] md:h-auto bg-white mx-auto w-[90%] md:max-w-[45rem] px-8 py-32 rounded-xl">
      <h2 className="text-4xl md:text-4xl font-bold">👋 Welcome!</h2>
      <h3 className="text-lg">Please start by telling us your name:</h3>
      <input
        type="text"
        placeholder="Your full name"
        onChange={(e) => setUserName(e.target.value)}
        className="px-4 py-2 rounded-lg text-lg border-grey "
      />
      {userName && (
        <div>
          <Button
            onClick={() => dispatch(addUser(userName))}
            className="text-xl py-2 px-4"
          >
            Start writing!
          </Button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
