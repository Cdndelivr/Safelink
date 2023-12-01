var feedUrl = "/feeds/posts/default?alt=json&max-results=1000";
var links = [];

fetch(feedUrl)
  .then(response => response.json())
  .then(data => {
    var entries = data.feed.entry;
    if (entries) {
      entries.forEach(entry => {
        var url = entry.link.find(link => link.rel === "alternate").href;
        links.push(url);
      });
    }
  })
 .catch(error => {
    console.error("Error fetching Posts:");
  });
