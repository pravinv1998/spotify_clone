export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "ca170a4e2583489cbe464fc6148a09e";

const scope = [
  " user-read-currently-playing ",
  " user-read-currently-played ",
  " user-read-playback-state ",
  " user-top-read ",
  " user-modify-playback-state ",
];

// export const loginUrl = ` ${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri} `;
