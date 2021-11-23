import { useEffect, useState } from "react";
import { GetRequest } from "./Utilities/Network/Index";

let a = 10;
const UF = (props: any) => {
  const [searchInput, setSearchInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    console.log("Component did mount");

    const getProfile = async () => {
      const apiResponse = await GetRequest(
        "https://api.github.com/users/xdankit"
      );

      if (!apiResponse) {
        return;
      }

      console.log({ apiResponse });
      setUserProfile(apiResponse);
    };

    getProfile();
  }, []);

  useEffect(() => {
    console.log("Component loading everytime");
  });

  useEffect(() => {
    console.log("userProfile.login " + userProfile.login);
  }, [userProfile?.login]);

  useEffect(() => {
    console.log("Data changing: ", a);
  }, [a]);

  const _handleSearchProfile = async () => {
    const apiResponse = await GetRequest(
      `https://api.github.com/users/${searchInput}`
    );

    if (!apiResponse) {
      return;
    }

    console.log({ apiResponse });
    setUserProfile(apiResponse);
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button onClick={_handleSearchProfile}>Search</button>
      </div>
      <p>
        {userProfile.name} | {userProfile.login} | {a}
      </p>
      <img width={10} height={10} src={userProfile.avatar_url} />
      <p>Counter 1 {counter}</p>
      <p>Counter 2 {counter2}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          a = a + 10;
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        New Increment
      </button>
    </>
  );
};

export default UF;