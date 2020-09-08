
//some Libraries Used for server and extracting information 

const express = require('express')
const bodyP = require('body-parser')
const cors = require('cors')
const cherio = require('cheerio')
const request = require('request')

//router variables 

const route = express.Router()
const app = express()
const port = process.env.PORT || 8000;


// app.use() function binds utilities 

app.use(cors());
app.use(bodyP.urlencoded({extended:true}));
app.use(bodyP.json());


//POST Method to get response from user

route.post('/url',(req,res,next) => {
     if(req.body){
                 
        amzurl = req.body.url;
        console.log(amzurl);


        // request used to fetch html source code using 'amzurl' variable contains 
        // url requested through POST method API call. 
         

        request(amzurl, function(error,server_response,body){
                if(error) return error;
         
                const $ = cherio.load(body);

                var json = {
                    title: "",
                    description: "",
                    images: []
                }
           
                //extracting title of product
                
                $('.a-section a-spacing-none').find('div').each(function(i,element){
                     let title = $(this).find('span').text().trim();
                     json.title = title;
                })
                

                //extracting description of product

                
                $('.a-section a-spacing-small').find('div').each(function(i,element){
                    let description = $(this).find('p').text().trim();
                    json.description = description;
                })

                //extracting images urls of product
                
               

                $('.a-fixed-left-grid-col a-col-left').find('div').each(function(i,element){
                    let imageuri = $(this).find('img').attr('src');
                    if(imageuri && json.images.indexOf(image) == -1){
                        json.images.push = imageuri;
                    }
                })
                
                console.log(json);
                res.send(json);

        

        })

      

     }
     else{
         console.log('Invalid Post Request...')
     }
})

// declares path of the application.

app.use('/scrape',route);
app.listen(port, () => console.log('listening server at '+ port));



