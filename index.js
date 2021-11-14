//third party package import
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const PORT = 8000;
const app = express();

// change to desired url
const url =
  "https://www.wishesmsg.com/inspirational-messages-quotes-about-life/";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const qutoes = [];

    // search for specific class withing the specified url. change the ".m" to the desired class
    $(".m", html).each(function () {
      const quote = $(this).text();

      qutoes.push({ quote });
    });

    if (qutoes.length) {
      let position = Math.floor(Math.random() * (qutoes.length - 1) + 1);
      console.log(qutoes[position]);
    }
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
