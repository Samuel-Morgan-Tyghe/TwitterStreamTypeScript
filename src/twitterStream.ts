
const Twitter = require( "./Librarys/build/twitter.js");
const axios = require("axios").default;
const credentials = require('./Librarys/build/helpers/credentials');

async function main() {
  // let tweetList:String[] = []
  const client = new Twitter(await credentials.fromCommandLine());
  let tweetList:String[] = []


  const stream = client.stream("tweets/sample/stream");
  setTimeout(() => {
    stream.close();
    addListToDataBase();
  }, 3000);

  for await (const { data } of stream) {
    // console.log(`${data.id}: ${data.text.replace(/\s/g, ' ')}`);
    //impliment something like above to keep strings - strings
    tweetList.push(data.text);
    console.log(typeof tweetList)
  }

  function addListToDataBase() {
    axios
      .post("http://localhost:3000/tweets", { tweetList })
      .then(function (response: object) {
        // console.log(typeof response);
      })
      .catch(function (error: Error) {
        console.log(error);
      });
  }
}

if (require.main === module) {
  main().catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
}
 export { } from '.'
