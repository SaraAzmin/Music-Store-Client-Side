import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const StartPage = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <h2 className="text-2xl font-semibold  text-center pt-5 uppercase">
        Hello <span className="text-rose-700">{user.displayName}</span>
      </h2>
      <h2 className="text-xl font-semibold text-center pt-2 pb-5 uppercase border-b-2 border-red-100">
        Welcome to your Dashboard
      </h2>
    </div>
  );
};

export default StartPage;
