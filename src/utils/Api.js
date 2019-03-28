import openSocket from "socket.io-client";

const socket = openSocket(process.env.API_URL);

export function getCards(limit = 6, cb) {
  socket.emit("getCards", limit);
  socket.on("cardsResponse", data => cb(null, data));
}

export function getMockData(cb) {
  socket.emit("getMockData");
  socket.on("mockDataResponse", data => cb(null, data));
}
