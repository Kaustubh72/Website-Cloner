const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');
const express =require("express")
const bodyparser = require("body-parser")
var cons = require('consolidate');
const app= express()

app.engine('html', cons.swig)
app.set('view engine', 'html');


app.use('/',express.static(path.join(__dirname,'views')))


app.use(bodyparser.json())

app.use(bodyparser.urlencoded({
    extended: true
  }));


  app.get("/",(req,res) =>{
    res.render("index.html")
});

app.get("/clone",(req,res) =>{
    res.render("index.html")
});

app.post('/clone', async (req,res) => {
    
    const uri=req.body.website;
    const path_to_save=req.body.path;
    const pts= path_to_save+"\\cloned";
    //return res.json({url : uri,path :path_to_save})
    //return res.json({url : uri});
    try{
    await scrape({
       
        urls: [uri],
       
        directory: pts,
        
        plugins: [ 
            new PuppeteerPlugin({
                launchOptions: { 
                    // If you set  this to true, the headless browser will show up on screen
                    headless: true
                },
                scrollToBottom: {
                    timeout: 10000, 
                    viewportN: 10 
                } 
            })
        ]
        
    });
        }
    catch(e)
        {
            res.json({Error : e+" Cloned directory already exists either in C:\ drive or in given folder"});
        }

    res.render("success.html")
    
});


app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is Running at Port 3000")
})