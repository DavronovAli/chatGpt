const axios = require("axios");

const options = {
  method: "POST",
  url: "https://chatgpt53.p.rapidapi.com/",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "c599e6d7bemsha444140bdd02a61p1adf92jsn40764aba220d",
    "X-RapidAPI-Host": "chatgpt53.p.rapidapi.com",
  },
  data: {
    messages: [
      {
        role: "user",
        content: "Hello",
      },
    ],
    temperature: 1,
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
