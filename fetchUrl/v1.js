
// Define the URL of the JSON feed
var feedUrl = "/feeds/posts/default?alt=json&max-results=1000";

// Array to store the post URLs
var links = [];

// Fetch the JSON feed
fetch(feedUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the post URLs from the JSON data
    var entries = data.feed.entry;
    if (entries) {
      entries.forEach(entry => {
        var url = entry.link.find(link => link.rel === "alternate").href;
        links.push(url);
      });
    }

    // Use the links array as needed
    console.log(links);
  })
  .catch(error => {
    console.error("Error fetching JSON feed:", error);
  });
