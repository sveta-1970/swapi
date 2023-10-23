/*
function request() {
  let data = null;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://swapi.dev/api/");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = xhr.responseText;
    }
  };
  xhr.send();
  return data;
}
*/
/*
async function request(url) {
  const data = await fetch(url)
    .then((value) => {
      return value.json();
    })
    .then((value) => {
      return value;
    })
    .catch((error) => {
      console.error(error);
    });
  return data;
}

export default {request};
*/

export const request = async (url) => {
  const data = await fetch(url);
  return data.json();
};
