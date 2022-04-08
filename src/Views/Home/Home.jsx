import React, { useEffect, useState } from "react";

import { CardsContainer } from "./Home.styles";
import Cards from "../../Components/Cards/Cards";
import Loader from "../../Components/Loader/Loader";
import { url } from "../../Assets/Externals";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const request = async () => {
      const fetching = await fetch(url);
      const response = await fetching.json();
      setUsers(response);
    };
    request();
  }, []);
  return (
    <div>
      <CardsContainer>
        {users.length > 0 ? (
          users?.map((info) => (
            <Cards
              key={info.id}
              id={info.id}
              name={info.login}
              avatar={info.avatar_url}
            />
          ))
        ) : (
          <Loader />
        )}
      </CardsContainer>
    </div>
  );
};

export default Home;
