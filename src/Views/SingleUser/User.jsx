import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../Assets/Externals";
import { UserContainer, TitleUser, Wrapper, anchorUser } from "./User.style";
import SingleUserCard from "../../Components/SingleUserCard/SingleUserCard";
import Loader from "../../Components/Loader/Loader";

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const request = async () => {
      const fetching = await fetch(`${url}/${username}`);
      const response = await fetching.json();
      setUser([response]);
    };
    request();
  }, [username]);
  console.log(user);
  return (
    <UserContainer>
      <Wrapper>
        <TitleUser>User Name: {username}</TitleUser>
        <a href='#' rel='nonreferrer' style={anchorUser}>
          Back Home
        </a>
      </Wrapper>
      <div>
        {user.length > 0 ? (
          user?.map((info) => (
            <SingleUserCard
              key={info.id}
              avatar={info.avatar_url}
              bio={info.bio}
              name={info.name}
              followers={info.followers}
              following={info.following}
              repos={info.public_repos}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </UserContainer>
  );
};

export default User;
