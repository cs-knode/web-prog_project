/* own js */

/* typewriting title bar */
function msgArray(n){
	this.length = n;
	return this.length;
}

message = new msgArray(3);
message[0] = "Test Your Knowledge";
message[1] = "Test Your Knowledge";
message[2] = "Test Your Knowledge";
repeat = 'infinite';
num = 5;
speed = 250;
delay = 1000;
var counter=1;
var current=0;
var text ="";
var i=0;
var TID = null;

function txtplay(){
	text=text+message[current].substring(i, i+1);
	document.title=text;
	sp=speed;
	i++;
	if (i==message[current].length){
		current++;
		i=0;
		text="";
		sp=delay;
	}
	if (current==message.length){
		if ((repeat == 'finite') && (counter==num)){
			clearTimeout(TID);
			return;
		}
		counter++;
		current=0;
	}
	TID = setTimeout("txtplay()", sp);
};

txtplay();

//game
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const itemnum = document.getElementById("q-num"); 
const pbar = document.getElementById("p-num");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Who invented the World Wide Web (WWW)?", 
    choice1: "ARPANET",
    choice2: "Charles Babbage",
    choice3: "Tim Berners-Lee",
    choice4: "Bill Gates",
    answer: 3
  },
  {
   question: "What does 'HTML' stands for?", 
    choice1: "Home Tool Markup Language",
    choice2: "Hyperlinks and Text Markup Language",
    choice3: "Hyper Text Markup Language",
    choice4: "Hyper Text Markup Link",
    answer: 3
  },
  {
    question: "Who is making the Web standards?", 
    choice1: "Microsoft",
    choice2: "Google",
    choice3: "The World Wide Web Consortium",
    choice4: "Tim Berners-Lee",
    answer: 3
  },
  {
    question: "The correct HTML element for the largest heading.", 
    choice1: "<h1>",
    choice2: "<heading>",
    choice3: "<head>",
    choice4: "<h6>",
    answer: 1
  },
  {
    question: "The correct HTML element for inserting a line break.", 
    choice1: "<hr>",
    choice2: "<br>",
    choice3: "<lb>",
    choice4: "<break>",
    answer: 2
  },
  {
    question: "What is the correct HTML for adding a background color?", 
    choice1: "<body style=''background-color:yellow;''>",
    choice2: "<background>yellow</background>",
    choice3: "<body bg=''yellow''>",
    choice4: "<body color='yellow'>",
    answer: 1
  },
  {
    question: "The correct HTML element to define important text.", 
    choice1: "<strong>",
    choice2: "<b>",
    choice3: "<i>",
    choice4: "<important>",
    answer: 1
  },
  {
    question: "The correct HTML element to define emphasized text.", 
    choice1: "<i>",
    choice2: "<italic>",
    choice3: "<em>",
    choice4: "All of the above",
    answer: 3
  },
  {
    question: "How can you open a link in a new tab/new window?", 
    choice1: "<a href='url' target=''new''>",
    choice2: "<a href='url' new>",
    choice3: "<a href='url' target=''_blank''>",
    choice4: "<a href='url' target='blank'>",
    answer: 3
  },
  {
    question: "Which of these elements are all <table> elements?", 
    choice1: "<table>, <tr>, <tt>",
    choice2: "<table>, head>, <tfoot>",
    choice3: "<thead>, <tbody>, <tr>",
    choice4: "<table>, <tr>, <td>",
    answer: 4
  },
  {
    question: "How can you make a numbered list?", 
    choice1: "<ol>",
    choice2: "<list>",
    choice3: "<dl>",
    choice4: "<ul>",
    answer: 1
  },
  {
    question: "How can you make a bulleted list?", 
    choice1: "<ol>",
    choice2: "<ul>",
    choice3: "<dl>",
    choice4: "<list>",
    answer: 2
  },
  {
    question: "Which character is used to indicate an end tag?", 
    choice1: "*",
    choice2: "/",
    choice3: "^",
    choice4: "<",
    answer: 2
  },
  {
    question: "What is the correct HTML syntax for making a text input field?", 
    choice1: "<textfield>",
    choice2: "<input type=''text''>",
    choice3: "<textinput type=''text''>",
    choice4: "<input type='textfield'>",
    answer: 2
  },
  {
    question: "Where can we use a <style> tag?", 
    choice1: "just in <head> element",
    choice2: "just in <body> element",
    choice3: "in <head> and in <body> elements",
    choice4: "just in <header> element",
    answer: 1
  },
  {
    question: "Which tag would you use to create a hyperlink?", 
    choice1: "<li>",
    choice2: "<img>",
    choice3: "<a>",
    choice4: "<dl>",
    answer: 3
  },
  {
    question: "How to write an HTML comment?", 
    choice1: "//This is an HTML comment",
    choice2: "<!--This is an HTML comment-->",
    choice3: "//This is an HTML comment//",
    choice4: "/*This is an HTML comment*/",
    answer: 2
  },
  {
    question: "A hyperlink tag can be applied to as:", 
    choice1: "Text",
    choice2: "Image",
    choice3: "Video",
    choice4: "All of the above",
    answer: 4
  },
  {
    question: "What is the use of forms in HTML?", 
    choice1: "To display contents of an e-mail",
    choice2: "To display animation effect",
    choice3: "To collect user's input",
    choice4: "None of the above",
    answer: 3
  },
  {
    question: "Which doctype is correct for HTML5?", 
    choice1: "<!DOCTYPE HTML5>",
    choice2: "<!DOCTYPE html>",
    choice3: "<!DOCTYPE HTML w3c>",
    choice4: "<html !DOCTYPE>",
    answer: 2
  },
  {
    question: "What does 'CSS' stand for?", 
    choice1: "Creating Style Sheets",
    choice2: "Computer Style Sheets",
    choice3: "Cascading Style Sheets",
    choice4: "Colorful Style Sheets",
    answer: 3
  },
  {
    question: "Which year did W3C develop CSS1? ", 
    choice1: "1990",
    choice2: "1992",
    choice3: "1994",
    choice4: "1996",
    answer: 4
  },
  {
    question: "An external style sheet is ideal when the style is applied to a:", 
    choice1: "Single page",
    choice2: "Few pages",
    choice3: "Many pages",
    choice4: "None of the above",
    answer: 3
  },
  {
    question: "Where in an HTML document is the correct place to refer to an external CSS?", 
    choice1: "<head> section",
    choice2: "<body> section",
    choice3: "<section> section",
    choice4: "<div> section",
    answer: 1
  },
  {
    question: "How do you insert a comment in a CSS file?", 
    choice1: "//This is a CSS comment",
    choice2: "<!--This is a CSS comment-->",
    choice3: "//This is a CSS comment//",
    choice4: "/*This is a CSS comment*/",
    answer: 4
  },
  {
    question: "Which HTML tag is used to define an internal CSS?", 
    choice1: "<script>",
    choice2: "<css>",
    choice3: "<style>",
    choice4: "<link>",
    answer: 3
  },
  {
    question: "Which is a correct CSS syntax?", 
    choice1: "body:color=blue;",
    choice2: "body {color:blue;}",
    choice3: "{body:color=blue;}",
    choice4: "{body;color:blue;}",
    answer: 2
  },
  {
    question: "Which CSS property is used to change the background color?", 
    choice1: "bgcolor",
    choice2: "background-color",
    choice3: "color",
    choice4: "bg-color",
    answer: 2
  },
  {
    question: "What property is used to change the text color of an element?", 
    choice1: "color:",
    choice2: "fontcolor:",
    choice3: "text-color:",
    choice4: "font-color:",
    answer: 1
  },
  {
    question: "Which CSS property controls the text size?", 
    choice1: "font-size",
    choice2: "text-style",
    choice3: "text-size",
    choice4: "font-style",
    answer: 1
  },
  {
    question: "What is the correct CSS syntax for making a bold text in a paragraph?", 
    choice1: "p {font-weight:bold;}",
    choice2: "<p style=''text-size: bold''>",
    choice3: "<p style=''font-size: bold;''>",
    choice4: "p {textsize:bold;}",
    answer: 1
  },
  {
    question: "How do you display hyperlinks without an underline?", 
    choice1: "a {underline:none;}",
    choice2: "a {text-decoration:no-underline;}",
    choice3: "a {decoration:no-underline;}",
    choice4: "a {text-decoration:none;}",
    answer: 4
  },
  {
    question: "Which property is used to change the font of an element?", 
    choice1: "font-style",
    choice2: "font-family",
    choice3: "font-weight",
    choice4: "font-height",
    answer: 2
  },
  {
    question: "How do you make a list that lists its items with squares? ", 
    choice1: "list:square;",
    choice2: "list-style-type:square",
    choice3: "list-type:square;",
    choice4: "type:square;",
    answer: 2
  },
  {
    question: "How do you select an element with an id 'demo'?", 
    choice1: "#demo",
    choice2: ".demo",
    choice3: "*demo",
    choice4: "demo",
    answer: 1
  },
  {
    question: "How do you select an element with a class 'demo'?", 
    choice1: "@demo",
    choice2: "#demo",
    choice3: "demo",
    choice4: ".demo",
    answer: 4
  },
  {
    question: "In the code 'margin: 5px 10px 3px 8px', what value is for the left margin?", 
    choice1: "3px",
    choice2: "10px",
    choice3: "5px",
    choice4: "8px",
    answer: 4
  },
  {
    question: "Which of the margin is commonly used to center a website?", 
    choice1: "margin:0px 0px 0px;",
    choice2: "margin:auto 0px;",
    choice3: "margin:0px auto;",
    choice4: "margin-align:center;",
    answer: 3
  },
  {
    question: "What property can you use to set the spacing in between lines of text?", 
    choice1: "line-spacing",
    choice2: "line-height",
    choice3: "spacing",
    choice4: "letter-spacing",
    answer: 2
  },
  {
    question: "This specifies whether a border should be solid, dashed, dotted, etc.", 
    choice1: "border-style",
    choice2: "border-weight",
    choice3: "border-decoration",
    choice4: "border-layout",
    answer: 1
  },
  {
    question: "Who is the inventor of JavaScript?", 
    choice1: "John Resig",
    choice2: "Brendan Eich",
    choice3: "Rasmus Lerdorf",
    choice4: "Guido van Rossum",
    answer: 2
  },
  {
    question: "When is JavaScript's initial release date?", 
    choice1: "December 4, 1995",
    choice2: "December 9, 1995",
    choice3: "December 15, 1995",
    choice4: "December 21, 1995",
    answer: 1
  },
  {
    question: "To insert a Javascript into an HTML page, which tag is used?", 
    choice1: "<script='javascript'>",
    choice2: "<javascript>",
    choice3: "<script>",
    choice4: "<js>",
    answer: 3
  },
  {
    question: "Where is the correct place to insert a javascript?", 
    choice1: "The <head> section",
    choice2: "The <body> section",
    choice3: "The <footer> section",
    choice4: "All of the above",
    answer: 4
  },
  {
    question: "What is the correct syntax for referring to an external JavaScript?", 
    choice1: "<script src=''xxx.js''></script>",
    choice2: "<script href=''xxx.js''></script>",
    choice3: "<a src=''xxx.js''></a>",
    choice4: "<a href=''xxx.js''></a>",
    answer: 1
  },
  {
    question: "How can you add a comment in JavaScript?", 
    choice1: "<!--This is a comment-->",
    choice2: "'This is a comment",
    choice3: "//This is a comment",
    choice4: "/This is a comment",
    answer: 3
  },
  {
    question: "How can you insert a comment with more than one line?", 
    choice1: "/*This comment is multi-line*/",
    choice2: "//This comment is multi-line//",
    choice3: "<!--This comment is multi-line-->",
    choice4: "//This comment is multi-line",
    answer: 1
  },
  {
    question: "Which is correct way to write a message in an alert box?", 
    choice1: "alert(''Hello World'');",
    choice2: "msg(''Hello World'');",
    choice3: "msgBox(''Hello World'');",
    choice4: "alertBox(''Hello World'');",
    answer: 1
  },
  {
    question: "What language defines the behavior of a web page?", 
    choice1: "HTML",
    choice2: "CSS",
    choice3: "XML",
    choice4: "JavaScript",
    answer: 4
  },
  {
    question: "What is the alternate name for JavaScript?", 
    choice1: "LimeScript",
    choice2: "ECMScript",
    choice3: "ECMAScript",
    choice4: "Java",
    answer: 3
  },
  {
    question: "The correct way to write a message on a web page in JavaScript.", 
    choice1: "System.out.println(''Hello World'')",
    choice2: "print(''Hello World'')",
    choice3: "document.write(''Hello World'')",
    choice4: "response.write(''Hello World'')",
    answer: 3
  },
  {
    question: "Which operator is used to assign a value to a variable?", 
    choice1: "=",
    choice2: "x",
    choice3: "*",
    choice4: "-",
    answer:1 
  },
  {
    question: "How do you create a function in JavaScript?", 
    choice1: "function:myFunction()",
    choice2: "function=myFunction()",
    choice3: "function myFunction()",
    choice4: "function-myFunction()",
    answer: 3
  },
  {
    question: "How do you declare a JavaScript variable?", 
    choice1: "variable carName;",
    choice2: "var carName",
    choice3: "v carName;",
    choice4: "All of the above",
    answer: 2
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?", 
    choice1: "onmouseclick",
    choice2: "onmouseover",
    choice3: "onclick",
    choice4: "onchange",
    answer: 3
  },
  {
    question: "Which attribute needs to be changed to make elements invisible?", 
    choice1: "visibility",
    choice2: "visible",
    choice3: "invisibility",
    choice4: "invisible",
    answer: 1
  },
  {
    question: "How do you round a float type number to the nearest integer?", 
    choice1: "rnd(7.25)",
    choice2: "Math.rnd(7.25)",
    choice3: "Math.round(7.25)",
    choice4: "round(7.25)",
    answer: 3
  },
  {
    question: "How would one declare a string variable?", 
    choice1: "var fName = ''Hey'';",
    choice2: "var names = ''2'';",
    choice3: "var fName = new String;",
    choice4: "Any of these",
    answer: 4
  },
  {
    question: "Why do Java and JavaScript have similar names?", 
    choice1: "JavaScript is Java",
    choice2: "Syntax of Javascript is based on Java",
    choice3: "Both support O.O.P.",
    choice4: "None of the above",
    answer: 2
  },
  {
    question: "Which of these will throw a SyntaxError?", 
    choice1: "if(x==1){}",
    choice2: "if(x=1){}",
    choice3: "if(x====1){}",
    choice4: "if(x===1){}",
    answer: 3
  },
  //Bootstrap Questions
  {
    question: "Who is the inventor of Bootstrap?", 
    choice1: "James Gosling",
    choice2: "Mark Jukervich",
    choice3: "Mark Otto and Jacob Thornton",
    choice4: "Tim Berners-Lee",
    answer: 3
  },
  {
    question: "Which of the following is Bootstrap's initial release date?", 
    choice1: "August 11, 2011",
    choice2: "August 19, 2011",
    choice3: "August 23, 2011",
    choice4: "August 29, 2011",
    answer: 2
  },
  {
    question: "What is the main plus point of using Bootstrap?", 
    choice1: "Browser compatibility",
    choice2: "Mobile-first approach",
    choice3: "Responsive features",
    choice4: "All of the above",
    answer: 4
  },
  {
    question: "Which of the following is a free front-end framework for faster and easier web development?", 
    choice1: "HTML5",
    choice2: "JQuery",
    choice3: "Bootstrap",
    choice4: "JavaScript",
    answer: 3
  },
  {
    question: "Bootstrap is written by using which of the following programming languages?", 
    choice1: "HTML, CSS",
    choice2: "JavaScript",
    choice3: "LESS, SASS",
    choice4: "All of the above",
    answer: 4
  },
  {
    question: "How many classes are there in Bootstrap grid system?", 
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "4",
    answer: 4
  },
  {
    question: "What is the maximum number of grids allowed in Bootstrap?", 
    choice1: "6 columns across the page",
    choice2: "12 columns across the page",
    choice3: "18 columns across the page",
    choice4: "24 columns across the page",
    answer: 2
  },
  {
    question: "Which of the following Bootstrap grid system class defines size of screen?", 
    choice1: "xs, sm, mid, lg",
    choice2: "x, sm, md, lg",
    choice3: "xs, sm, md, lg",
    choice4: "s, sm, mid, lg",
    answer: 2
  },
  {
    question: "Bootstrap 4 heading 'h4' font size?", 
    choice1: "18px",
    choice2: "24px",
    choice3: "28px",
    choice4: "32px",
    answer: 2 
  },
  {
    question: "Which of the following classes provides a responsive fixed width container?", 
    choice1: ".container-fixed",
    choice2: ".container-fluid",
    choice3: ".fluid-container",
    choice4: ".container",
    answer: 4
  },
  {
    question: "In Bootstrap, to add a footer to a panel, which class is used?", 
    choice1: ".footer",
    choice2: ".panel",
    choice3: ".panel-footer",
    choice4: ".footer-panel",
    answer: 3
  },
  {
    question: "The class used to create an image gallery is:", 
    choice1: ".img-thumbnail",
    choice2: ".thumbnail",
    choice3: ".gallery",
    choice4: ".slider",
    answer: 2
  },
  {
    question: "Which class shapes an image to a circle?", 
    choice1: ".img-circle",
    choice2: ".img-crl",
    choice3: ".circle-img",
    choice4: ".circle",
    answer: 1
  },
  {
    question: "It indicates a big box for calling extra attention to special content/info?", 
    choice1: "glyphicon",
    choice2: "pagination",
    choice3: "pager",
    choice4: "jumbotron",
    answer:4 
  },
  {
    question: "Which class adds borders on all sides of a table and cells?", 
    choice1: ".bordered-table",
    choice2: ".table-bordered",
    choice3: ".border-all",
    choice4: ".table-condensed",
    answer: 2
  },
  {
    question: "Which class applies hover effect to a specific row or cell of a table?", 
    choice1: ".active",
    choice2: ".success",
    choice3: ".warning",
    choice4: ".disabled",
    answer: 1
  },
  {
    question: "Which of the following indicates a dangerous or negative button? ", 
    choice1: ".btn-danger-button",
    choice2: ".btn-info",
    choice3: ".btn-danger",
    choice4: ".btn-warning",
    answer: 3
  },
  {
    question: "Which Bootstrap class indicates a dropdown menu?", 
    choice1: ".dropdown",
    choice2: ".dropdown-list",
    choice3: ".select",
    choice4: ".list-dropdown",
    answer: 1
  },
  {
    question: "Which class indicates uppercased text?", 
    choice1: ".uppercase",
    choice2: ".uppercase-text",
    choice3: ".text-capitalize",
    choice4: ".text-uppercase",
    answer: 4
  },
  {
    question: "Which class creates list of items?", 
    choice1: ".lst-group",
    choice2: ".list-group",
    choice3: ".menu-group",
    choice4: ".group-list",
    answer:2 
  },
  {
    question: "Which of the following are the inventors of Materialize?", 
    choice1: "Alvin Wang, Alan Chang, Alex Mark, and Kevin Louie",
    choice2: "Tim Berners-Lee and James Gosling",
    choice3: "Guido van Rossum, Rasmus Lerdorf, and Yukihiro Matsumoto",
    choice4: "None of the above",
    answer: 1
  },
  {
    question: "Which of the following is Materialize's initial release date?", 
    choice1: "June 6, 2014",
    choice2: "June 14, 2014",
    choice3: "June 25, 2014",
    choice4: "June 29, 2014",
    answer: 3
  },
  {
    question: "Who developed Materialize?", 
    choice1: "Microsoft",
    choice2: "Google",
    choice3: "Oracle",
    choice4: "Apple",
    answer: 2
  },
  {
    question: "Which of the following classes define size of screen in Materialize?", 
    choice1: "s, md, lg, xl",
    choice2: "sm, md, lg, xl",
    choice3: "s, m, l, xl",
    choice4: "xs, sm, md, lg, xl",
    answer: 3
  },
  {
    question: "Which of the following class defines a text color?", 
    choice1: ".blue-text",
    choice2: ".blue",
    choice3: ".text-blue",
    choice4: ".blue-color",
    answer: 1
  },
  {
    question: "How to apply a background color in Materialize?", 
    choice1: ".blue-background",
    choice2: ".blue-bg",
    choice3: ".background-blue",
    choice4: ".blue",
    answer: 4
  },
  {
    question: "How to signify a Materialize 'offset' class?", 
    choice1: ".off-m3",
    choice2: ".offset-m3",
    choice3: ".m3-offset",
    choice4: ".m3-off",
    answer: 2
  },
  {
    question: "Which class shapes an image to a responsive image?", 
    choice1: ".img-responsive",
    choice2: ".responsive",
    choice3: ".responsive-img",
    choice4: ".img-width-responsive",
    answer: 3
  },
  {
    question: "Which classes defines a Materialize pulse button?", 
    choice1: "btn btn-floating btn-pulse",
    choice2: "btn btn-floating pulse",
    choice3: "btn floating btn-pulse",
    choice4: "btn btn-floating pulse-btn",
    answer: 2
  },
  {
    question: "How to display a badge in Materialize?", 
    choice1: "<span clas=''badge-new''>",
    choice2: "<span clas=''new-badge''>",
    choice3: "<span clas=''text-badge''>",
    choice4: "<span clas=''badge''>",
    answer: 4
  },
  {
    question: "Which class is used to create an image card?", 
    choice1: ".img-card",
    choice2: ".image-card",
    choice3: ".card-img",
    choice4: ".card-image",
    answer: 4
  },
  {
    question: "How can you insert a search icon?", 
    choice1: "<i class=''material-icons''>search</i>",
    choice2: "<i class=''md-icons''>search</i>",
    choice3: "<i class=''icons-material''>search</i>",
    choice4: "<i class=''material-search''>search</i>",
    answer: 1
  },
  {
    question: "In Materialize, which class adds borders on all sides of a table and cells?", 
    choice1: ".table-bordered",
    choice2: ".bordered",
    choice3: ".bordered-table",
    choice4: ".bordered-all",
    answer: 2
  },
  {
    question: "How to define a Materialize scrollspy?", 
    choice1: "<div class=''section spy-scrollspy''>",
    choice2: "<div class=''section scrollspy''>",
    choice3: "<div class=''section scroll''>",
    choice4: "<div class=''section scroll-spy''>",
    answer: 2
  },
  {
    question: "In Materialize, which class defines a slide out menu?", 
    choice1: ".side-bar",
    choice2: ".side-menu",
    choice3: ".side-navigation",
    choice4: ".side-nav",
    answer: 4
  },
  {
    question: "Which of the following is a utility class in Materialize? ", 
    choice1: "Size utility class",
    choice2: "Alignment utility class",
    choice3: "Transformation utility class",
    choice4: "Hidden utility class",
    answer: 2
  },
  {
    question: "What are the classes of breadcrumb in Materialize?", 
    choice1: "nav-wrapper, breadcrumb",
    choice2: "nav-bar, b-crumb",
    choice3: "navigation, crumb",
    choice4: "bread-crumb, nav",
    answer: 1
  },
  {
    question: "In Materialize, it is a set of 'a' or 'li' items as avatar items.", 
    choice1: "avatar",
    choice2: "av",
    choice3: "avatar-item",
    choice4: "item-avatar",
    answer: 1
  },
  {
    question: "This class identifies a <u> HTML tag as a Materialize dropdown component.", 
    choice1: ".dropdown-html",
    choice2: ".drpdwn-u",
    choice3: ".dropdown-content",
    choice4: ".html-dropdown",
    answer: 1
  },
  {
    question: "Which Materialize class is used to highlight a table?", 
    choice1: ".table-highlight",
    choice2: ".highlight",
    choice3: ".highlighted-table",
    choice4: ".high-light",
    answer: 2
  }
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 100;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    window.alert("You got a "+score+" out of "+MAX_QUESTIONS+"!");
    return window.location.assign("../index.html");
  }
  questionCounter++;
  itemnum.innerText = `Question # ${questionCounter}`;
  pbar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
  score += num;
};

startGame();