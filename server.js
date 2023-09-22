const express = require("express");
const cors = require("cors");
// const libretranslate = require('libretranslate');
// const axios = require('axios');
// const cheerio = require('cheerio');
// const translate = require('translate');
// const libretranslate = require('libretranslate');


const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));


app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Welcome to our application." });
});

// app.post('/translate', async (req, res) => {
//  console.log( req.query);
//  res = await fetch("https://libretranslate.com/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "hello guys",
// 		source: "auto",
// 		target: "hi",
// 		format: "text"
    
	
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(await res.json());
  
// });
// app.post('/translate', async (req, res) => {
//   const textToTranslate = 'Hello, how are you?';
// const sourceLanguage = 'en'; // Source language (e.g., English)
// const targetLanguage = 'es'; // Target language (e.g., Spanish)
//   try {
//     const response = await axios.get(`https://translate.google.com/#view=home&op=translate&sl=${sourceLanguage}&tl=${targetLanguage}&text=${encodeURIComponent(textToTranslate)}`);
    
//     if (response.status === 200) {
//       const $ = cheerio.load(response.data);
//       //const translation = $('.translation').text();
//       const translation = $('span.ryNqvb[jsaction="click:E6Tfl,GFf3ac,tMZCfe; contextmenu:Nqw7Te,QP7LD; mouseout:Nqw7Te; mouseover:E6Tfl,c2aHje"][jsname="W297wb"]').text();
     
//       return translation.trim();
//     } else {
//       throw new Error('Failed to fetch translation');
//     }
//   } catch (error) {
//     console.error(error.message);
//     return null;
//   }
// }

// // Example usage

// );


// async function translateString(text, options) {
//   return await translate(text, options);
// }
// app.post('/translate', async (req, res) => {
  

//   translateString('Hello World!', options)
//       .then(result => console.log(result))
//       .catch(error => console.error(error));
  
//   // Usage example 2 (in async scope):
 
//   const options = { from: 'eng', to: 'pl' };
  
//   try {
//       const result = await translateString('Hello World!', options);
//       console.log(result);
//   } catch (error) {
//       console.error(error);
//   }

// });

// app.post('/translate', async (req, res) => {
//   const textToTranslate = 'Hello, how are you?';
// const sourceLanguage = 'en'; // Source language (e.g., English)
// const targetLanguage = 'es'; // Target language (e.g., Spanish)
//   try {
//     const translatedText = await translate(text, {
//       from: sourceLang,
//       to: targetLang,
//     });

//     return translatedText;
//   } catch (error) {
//     console.error('Translation error:', error);
//     return null;
//   }
// });

// app.post('/translate', async (req, res) => {
//   const translator = libretranslate({
//     apiKey: null, // Set to null since LibreTranslate does not require an API key
//     endpoint: 'https://libretranslate.de', // The default endpoint for LibreTranslate
//     language: 'en', // The source language (e.g., English)
//     to: 'es', // The target language (e.g., Spanish)
//   });
//   const textToTranslate = 'Hello, how are you?';

// translator.translate(textToTranslate)
//   .then(result => {
//     console.log(`Translated text: ${result}`);
//   })
//   .catch(error => {
//     console.error('Translation error:', error);
//   });

  
// });

const db = require("./Model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  
require("./routes/tutorial.routes")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

