import Tweet from "./Tweet";

const Tweets = ({ tweets }) => {
console.log("🚀 ~ file: TweetList.js ~ line 4 ~ Tweets ~ tweets", tweets)
    console.log(tweets)
  return (
    <>
      {/* {tweets.map((tweet) => (
        <Tweet
          key={tweets.id}
          tweet={tweet}
        />
      ))} */}
    </>
  );
};

export default Tweets;
