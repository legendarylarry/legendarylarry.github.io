document.addEventListener("DOMContentLoaded", function() {

  let pages = document.querySelectorAll(".page");
    pages.forEach(function(page) {
      page.style.display = "none";
    });
    document.querySelector('#home').style.display = "block";

    let navlinks = document.querySelectorAll("[data-page]");
     navlinks.forEach(function(navlink) {
      navlink.addEventListener('click', function(e){
          let target = navlink.getAttribute('data-page');
          if (target){
               let pages = document.querySelectorAll(".page");
                pages.forEach(function(page) {
                  page.style.display = "none";
                });
                document.querySelector('#' + target).style.display = "block";
          }
      })
    });

    hljs.highlightAll();

    var graph = new flowjs.DiGraph();
    graph.addPaths([
        ["Bamboo", "API Extractor", "SQS"],
        ["Cloudwatch", "API Extractor", "SQS"],
        ["IAMAnalyzer", " API Extractor ", "SQS"],
        ["Suricata", " API Extractor ", "SQS"],
        ["Uptrends", "  API Extractor  ", "SQS"],
        ["Cloudfront", "  API Extractor  ", "SQS"],
        ["SQS", "JsonTransformer", "Loader", "ElasticSearch"],
        ["SQS", "LogTransformer", "Loader", "ElasticSearch"],
        ["SQS", "XMLTransformer", "Loader", "ElasticSearch"]

    ]);

    new flowjs.DiFlowChart("graph-prime", graph).draw();

    graph = new flowjs.DiGraph();
     graph.addPaths([
        ["OpenSearch", "API Extractor", "Kafka", "Metadata Loader", "PostgreSQL"],
        ["OpenDAP", "API Extractor", "Kafka", "Metadata Loader", "PostgreSQL"],
        ["FTP", "API Extractor", "Kafka", "Metadata Loader", "PostgreSQL"],
        ["API Extractor", "Binary Loader", "Data Lake"],
        ["API Extractor", "Binary Loader", "Data Lake"],
        ["API Extractor", "Binary Loader", "Data Lake"]

    ]);
    new flowjs.DiFlowChart("graph-granules", graph).draw();

    graph = new flowjs.DiGraph();
     graph.addPaths([
        ["JIRA", "API Extractor", "JsonTransformer", "Loader", "ElasticSearch"],
        ["Confluence", "API Extractor", "JsonTransformer", "Loader", "ElasticSearch"],
        ["Slack", " API Extractor ", "JsonTransformer", "Loader", "ElasticSearch"],
        ["Mattermost", " API Extractor ", "JsonTransformer", "Loader", "ElasticSearch"]

    ]);
    new flowjs.DiFlowChart("graph-comms", graph).draw();


});

(function() {

  let canvases = document.querySelectorAll("canvas");
   canvases.forEach(function(canvas) {

       // const canvas = document.getElementById('prime');
       const context = canvas.getContext('2d');

       // resize the canvas to fill browser window dynamically
       window.addEventListener('resize', resizeCanvas, false);

       function resizeCanvas() {
           canvas.width = window.innerWidth * .7;
           canvas.height = window.innerHeight;
           canvas.height = 500;

           /**
            * Your drawings need to be inside this function otherwise they will be reset when
            * you resize the browser window and the canvas goes will be cleared.
            */
           drawStuff();
       }

       resizeCanvas();

       function drawStuff() {
           // do your drawing stuff here
       }
   });
})();