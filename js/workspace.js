
// var newsapiKEY = 2461bdbe914f4494a27aa8374d7d976a;
// var breitbartURL = "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=latest&apiKey=2461bdbe914f4494a27aa8374d7d976a";


var cnnURL = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a"
var huffingtonpostURL = " https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";

// makeRequestAndDisplay("cnn", cnnURL, "#cnn-news-col", "#cnn-twitter-col", "cnn-top-link");
// makeRequestAndDisplay("huffpost", huffingtonpostURL, "#huff-post-news-col", "#huff-post-twitter-col", "huff-post-top-link");


// function makeRequestAndDisplay(source, newsSourceURL, newsColID, newsTwitterID, topLinkName) {
//     $.ajax({
//         url: newsSourceURL
//     }).done(function (data) {
//         picid = source + "-top-pic";
//         var article = data.articles[0];
//         var author = article.author;
//         var headline = article.title;
//         var description = article.description;
//         var link = article.url;
//         var img = article.urlToImage;
//         $(newsColID).append("<h1>" + headline + "</h1>")
//         if(author != null){
//             $(newsColID).append("<h2>Written by: " + author + ".");
//         }
//         $(newsColID).append("<p>" + description + "</p>");
//         $(newsColID).append("<a target=\"_blank\" id=\"" + topLinkName + "\"href=" + "\"" + link + "\"" + ">");
//         topLinkName = "#".concat(topLinkName);
//         $(topLinkName).append("LINK");
//         $(newsColID).append("<img id=" + picid +  "\" src=" + img + ">");
//         picid = "#".concat(picid);
//         console.log(picid);
//         $(picid).css("width", "100%");
//         $(picid).css("height", "100%");
//         $(newsTwitterID).append("<a class=\"twitter-timeline\" href=\"https://twitter.com/CNN\">Tweets by CNN</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
//     });
// }

$.ajax({
    url: cnnURL
}).done(function (data) {
    console.log(data);
    var article = data.articles[0];
    var author = article.author;
    var headline = article.title;
    var description = article.description;
    var link = article.url;
    var img = article.urlToImage;
    $("#cnn-news-col").append("<h1>" + headline + "</h1>");
    if(author != null){
        $("#cnn-news-col").append("<h2>Written by: " + author + ".");
    }
    $("#cnn-news-col").append("<p>" + description + "</p>");
    $("#cnn-news-col").append("<a target=\"_blank\" id=\"link\"href=" + "\"" + link + "\"" + ">");
    $("#link").append("LINK");
    $("#cnn-news-col").append("<img id=\"top-pic\" src=" + img + ">");
    $("#top-pic").css("width", "100%");
    $("#cnn-twitter-col").append("<a class=\"twitter-timeline\" href=\"https://twitter.com/CNN\">Tweets by CNN</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
});