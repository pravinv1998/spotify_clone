import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValues } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, set_Token] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValues();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((_user) =>
        dispatch({
          type: "SET_USER",
          user: _user,
        })
      );

      spotify.getUserPlaylists().then((_playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: _playlist,
        });
      });
    }
  }, []);

  // console.log("user--->", user);
  // console.log("token--->", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
