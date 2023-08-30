import React from "react";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const { value: userData, setValue: setUserData } = useLocalStorage(
    "userKey",
    {
      username: "",
      email: "",
      token: "",
      role: "",
    }
  );

  const saveUser = () => {
    setUserData({
      username: "Brian",
      email: "brian@gmail.com",
      token: "fGHe752bhf",
      role: "admin",
    });
  };

  console.log(userData);

  // Another example
  // const { value, setValue } = useLocalStorage(
  //   "myKey",
  //   "default value"
  // );

  return (
    <div>
      <button
        className="px-6 py-2 text-white bg-[#0bab7c] hover:bg-[#0bab7c]/80 rounded-md"
        onClick={saveUser}
      >
        Save user
      </button>
      <p className="mt-2">
        click the above button and then check your local Storage and console
      </p>
    </div>
  );
};

export default App;
