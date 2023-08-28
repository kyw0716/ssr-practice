const express = require('express');
const ReactDOMServer = require('react-dom/server');
const App = require('./client/App').default;

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const template = `
    <html>
        <head>
            <title>SSR 연습</title>
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;

  res.send(template);
});

app.listen(4000, () => {
  console.log('4000번 포트에서 서버 구동...');
});
