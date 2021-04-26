const Twitter = require("./Librarys/build/twitter.js");
const axios = require("axios").default;
const credentials = require('./Librarys/build/helpers/credentials');

async function main() {
  let tweetList = [];
  const client = new Twitter(await credentials.fromCommandLine());


  const stream = client.stream("tweets/sample/stream");
  setTimeout(() => {
    stream.close();
    addListToDataBase();
  }, 3000);

  for await (const { data } of stream) {
    // console.log(`${data.id}: ${data.text.replace(/\s/g, ' ')}`);
    //impliment something like above to keep strings - strings
    tweetList.push(data.text);
  }

  function addListToDataBase() {
    axios
      .post("http://localhost:3000/tweets", { tweetList })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
