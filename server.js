var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles =
{
    'articleOne':
    {
    name:`vijay`,
    age:`21`,
    fathername:`kannan`,
    linkpage:`/article-two`
    },
    'articleTwo':
    {
    name:`suhail`,
    age:`22`,
    fathername:`sahul`,
    linkpage:'/article-three'
    },
    'articleThree':
    {
    name:`vel`,
    age:`23`,
    fathername:`venayagam`,
    linkpage:'/'
    }
};

function htmltemplate(data)
{
    var name=data.name,age=data.age,fathername=data.fathername;
    
    var content=`
        <!doctype html>
<html>
    <head>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
        <br>
        <div class="center text-big bold">
			${name}<br> 
			${age}<br>
			${fathername}<br>
			<a href="${linkpage}">next</a><br>
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
    `;
}



app.get('/:articleName', function(req, res) {
    //articleName = articl-one
    //articles[articleName] == {} content object for article one
  var articleName = req.paramas.articleName;
  res.send(htmltemplate(articles[articleName]));
  //function(variable[object])
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
