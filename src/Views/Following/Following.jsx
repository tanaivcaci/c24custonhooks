import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardsContainer } from "../Home/Home.styles";
import { url } from "../../Assets/Externals";
import Loader from "../../Components/Loader/Loader";
import Cards from "../../Components/Cards/Cards";

const Following = () => {
  const { username } = useParams();
  const [followingData, setFollowingData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const fetching = await fetch(`${url}/${username}/following`);
      const response = await fetching.json();
      setFollowingData(response);
    };
    request();
  }, [username]);
  return (
    <div>
      <CardsContainer>
        {followingData.length > 0 ? (
          followingData?.map((info) => (
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

export default Following;
