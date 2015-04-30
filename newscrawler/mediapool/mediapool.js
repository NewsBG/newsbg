var request = require('request')
var cheerio = require('cheerio')

function getFrontPageStories() {
  request('http://www.mediapool.bg', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      console.log('Links:');
      var $ = cheerio.load(html);
      var headline = 'div.hot_news > div.big_title > a';
      var other = 'a.news_in_a';
      $(headline).add(other).each(function (i) {
        console.log((i+1) + "." + $(this).attr('title'));
        console.log($(this).attr('href'));
      });
    }
    else {
      console.log(error);
    }
  });
}

getFrontPageStories();
