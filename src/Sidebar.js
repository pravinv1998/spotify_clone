import React from "react";
import SidearOption from "./SidearOption";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValues } from "./DataLayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValues();
  return (
    <div className="sidebar">
      <img
        className=" sidebar__logo "
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt=""
      />

      <SidearOption Icon={HomeIcon} title="Home" />
      <SidearOption Icon={SearchIcon} title="Search" />
      <SidearOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidearOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
