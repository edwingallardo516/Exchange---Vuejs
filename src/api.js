const url = "https://api.coincap.io/v2/assets?limit=20";

function getAssets() {
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

/* function getAsset(coin) {
  return fetch(`https://api.coincap.io/v2/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data);
} */

async function getAsset(coin) {
  let res = await fetch(`https://api.coincap.io/v2/assets/${coin}`);
  res = await res.json();
  return res.data;
}


function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `https://api.coincap.io/v2/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json())
    .then((res) => res.data);
}

/* function getMarkets(coin){
  return fetch(
    `https://api.coincap.io/v2/assets/${coin}/markets?limit=5`)
      .then((res) => res.json())
      .then((res) => res.data);
} */

async function getMarkets(coin){
  let res = await fetch(`https://api.coincap.io/v2/assets/${coin}/markets?limit=5`);
  res = await res.json();
  //console.log(res.data);

  return res.data;
}

/* function getExchange(id){
  return fetch(`https://api.coincap.io/v2/exchanges/${id}`)
    .then((res) => res.json())
    .then((res) => res.data);
} */

async function getExchange(id){
  let res = await fetch(`https://api.coincap.io/v2/exchanges/${id}`);
  res = await res.json();
  //console.log(res.data);

  return res.data;
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
};
