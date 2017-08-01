/**
 * Jonathan Reed Mevs
 * July 31, 2017
 * Beginning stages of the News App
 */


// var newsapiKEY = 2461bdbe914f4494a27aa8374d7d976a;
// var breitbartURL = "https://newsapi.org/v1/articles?source=breitbart-news&sortBy=latest&apiKey=2461bdbe914f4494a27aa8374d7d976a";


/**
 * The data structure initialized below is here for embedding the timelines
 * into the webpage. Twitter provides the links to this code.
 * They are updated in the function makeRequestAndDisplay
 * when there is the need to specify a data-height so it fits inside the parent element.
 */
var twitterHTMLCodeMap = new Map();
twitterHTMLCodeMap.set("cnn", "<a class=\"twitter-timeline\" href=\"https://twitter.com/CNN\">Tweets by CNN</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");
twitterHTMLCodeMap.set("huffpost", "<a class=\"twitter-timeline\" href=\"https://twitter.com/HuffPost\">Tweets by HuffPost</a> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>");

var cnnURL = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";
var huffingtonpostURL = " https://newsapi.org/v1/articles?source=the-huffington-post&sortBy=top&apiKey=2461bdbe914f4494a27aa8374d7d976a";

makeRequestAndDisplay("cnn", cnnURL, "#cnn-news-col", "#cnn-twitter-col", "cnn-top-link");
makeRequestAndDisplay("huffpost", huffingtonpostURL, "#huff-post-news-col", "#huff-post-twitter-col", "huff-post-top-link");

function makeRequestAndDisplay(source, newsSourceURL, newsColID, newsTwitterID, topLinkName) {
    $.ajax({
        url: newsSourceURL
    }).done(function (data) {
        var picID = "\"" + source + "-pic\"";
        var article = data.articles[0];
        var author = article.author;
        var headline = article.title;
        var description = article.description;
        var link = article.url;
        var imgSource = article.urlToImage;
        var twitterLinkCode = twitterHTMLCodeMap.get(source);
        //display the headline
        $(newsColID).append("<h1>" + headline + "</h1>")
        //if the author is null, it says written by Null. Nothing will be displayed if that is the case.
        if(author != null){
            $(newsColID).append("<h2>Written by: " + author + ".");
        }
        //display a description
        $(newsColID).append("<p>" + description + "</p>");
        //link to the article itself
        $(newsColID).append("<a target=\"_blank\" id=\"" + topLinkName + "\"href=" + "\"" + link + "\"" + ">");
        //for id referencing
        topLinkName = "#".concat(topLinkName);
        //Adding text to be displayed with the link
        $(topLinkName).append("View Article Here");
        //displaying the article's image
        $(newsColID).append("<img class=\"news-pic\" id=" + picID + "src=" + imgSource + ">");
        //for referencing purposes
        source = "#".concat(source);
        /**
         * Here we are getting the height of the parent div element. 
         * For embedded timelines, twitter offers the option of data-height, to 
         * specify the height, in px, of the timeline to be displayed.
         */
        var height = $(source).height();
        var dataHeight = " data-height=" + height;
        //these lines are so I can enter it in the twitter code that is already provided
        //and stored in our map.
        var temp = twitterLinkCode.substring(0,2) + dataHeight + twitterLinkCode.substring(2, twitterLinkCode.length + 1);
        twitterLinkCode = temp;
        //we don't need to "#" we appended earlier
        twitterHTMLCodeMap.set(source.slice(1), twitterLinkCode);
        $(newsTwitterID).append(twitterLinkCode);
    });
}


