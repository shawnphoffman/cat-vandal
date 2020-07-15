module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const url =
    Math.floor(Math.random() * 5) < 4
      ? "http://thecatapi.com/api/images/get?format=src&type=gif"
      : "https://i.imgur.com/Yd8dXQ0.gif";

  context.res.status(302);
  context.res.header("Location", url);
  context.done();
};
