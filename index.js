import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/books.js';

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.json());

app.use('/',routes);

app.listen(port,()=>console.log(`server started at localhost:${port}`));