# NodeJs-Scraper-cheerio-request

1. First Start with "npm install" in the root folder

2. Then run the server using "npm start"

3. Post the Data to path "http://localhost:8000/scrape/url" 
    as formated 
   /POST 
   {
    "url:" "http://www.amazon.com/Apple-iPhone-16gb-Space-Unlocked/dp/B00NQGP42Y/"
   }

4. Then the Response back from the Server must be as

 {
   "title": "Apple iPhone 6, 16gb, Space Gray, Unlocked",
   "description": "Built on 64-bit desktop-class architecture, the new A8 chip delivers more power.",
   "images": [
             "http://amazon.com/sample_image1.jpg",
             "http: //amazon.com/sample_image2.jpg"
            ]
 }
 
 5. The Folder src/* contains the server.js file which is the entry point.
 
 
 
