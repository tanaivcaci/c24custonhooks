import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardsContainer } from "../Home/Home.styles";
import { url } from "../../Assets/Externals";
import Loader from "../../Components/Loader/Loader";
import Cards from "../../Components/Cards/Cards";

const Followers = () => {
  const { username } = useParams();
  const [followersData, setFollowersData] = useState([]);

  useEffect(() => {
    const request = async () => {
      const fetching = await fetch(`${url}/${username}/followers`);
      const response = await fetching.json();
      setFollowersData(response);
    };
    request();
  }, [username]);
  return (
    <div>
      <CardsContainer>
        {followersData.length > 0 ? (
          followersData?.map((info) => (
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

export default Followers;
