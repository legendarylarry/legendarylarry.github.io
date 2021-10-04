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

      particlesJS("particles-js", {
        "particles": {
            "number": {"value": 80, "density": {"enable": true, "value_area": 400}},
            "color": {"value": "#a2a2a2"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#529cde", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": false, "mode": "repulse"},
                "onclick": {"enable": false, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Data Processing", "Machine Learning", "Ingest & Distribution", "Data Aggregation", "Organizational Awareness", "System Reliability Engineering"];
const typingDelay = 5;
const erasingDelay = 1;
const newTextDelay = 1400; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

if(textArray.length) setTimeout(type, newTextDelay + 250);

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

     graph = new flowjs.DiGraph();
     graph.addPaths([
        ["Data Source", "Extractor", "Metadata Extractor", "Metadata Loader", "Catalog"],
        ["Data Source", "Extractor ", "Metadata Extractor", "Metadata Loader", "Catalog"],
        ["Data Source", "Extractor  ", "Metadata Extractor", "Metadata Loader", "Catalog"],
        ["Data Source", "Extractor   ", "Metadata Extractor", "Metadata Loader", "Catalog"],
        ["Metadata Extractor", "Binary Loader", "Data Lake"],
        ["Metadata Extractor", "Binary Loader", "Data Lake"],
        ["Metadata Extractor", "Binary Loader", "Data Lake"],
        ["Metadata Extractor", "Binary Loader", "Data Lake"]

    ]);
    new flowjs.DiFlowChart("graph-scale-ingress", graph).draw();

    graph = new flowjs.DiGraph();
     graph.addPaths([
        ["Data Warehouse", "Distribution Node", "Load Balancer", "Consumer"],
        ["Data Warehouse", "Distribution Node ", "Load Balancer", "Consumer"],
        ["Data Warehouse", "Distribution Node  ", "Load Balancer", "Consumer"],
        ["Data Warehouse", "Distribution Node   ", "Load Balancer", "Consumer"]
    ]);
    new flowjs.DiFlowChart("graph-scale-egress", graph).draw();


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

