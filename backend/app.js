const express = require('express');

const app = express();




app.use( '/api/posts', (req, res, next ) => {

  const posts = [
    {
      id: '244242341',
      title: 'Title 1',
      content: 'Some content 1'
    },
    {
      id: '244242342',
      title: 'Title 2',
      content: 'Some content 2'
    },
    {
      id: '244242343',
      title: 'Title 3',
      content: 'Some content 3'
    }

  ]

   res.status(200).json( {
      message: 'Seccess !',
      posts: posts
   } ) ;

  // next();

  }


);

module.exports = app;
