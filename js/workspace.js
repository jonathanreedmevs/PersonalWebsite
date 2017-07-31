
// var newsapiKEY = 2461bdbe914f4494a27aa8374d7d976a;
var breitbartURL = "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=latest&apiKey=2461bdbe914f4494a27aa8374d7d976a";

$.ajax({
    url: breitbartURL
}).done(function(data){
    console.log(data);
    var article = data.articles[0];
    var author = article.author;
    var headline = article.title;
    var description = article.description;
    var img = article.urlToImage;
    $("body").append("<h1>" + headline + "</h1>");
    $("body").append("<h2> Author: " + author + "</h2>");
    $("body").append("<p>" + description + "</p>");
    $("body").append("<img src=" + img + ">");
    $("body").append("<a class=\"twitter-timeline\" href=\"https://twitter.com/BreitbartNews\">Tweets by BreitbartNews</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
});