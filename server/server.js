import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
const app = express();
const port = 4000;

dotenv.config()
app.use(cors({origin: 'http://localhost:3000'}))

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/listings-latest', async (req, res) => {
  	const requestOptions = {
		method: 'get',
		baseURL: 'https://pro-api.coinmarketcap.com',
		headers: {
			"Content-Type": "application/json",
			"X-CMC_PRO_API_KEY": String(process.env.CMC_KEY),
			// "Access-Control-Allow-Origin": "https://pro-api.coinmarketcap.com"
		}
	}

	const response = await axios.get("/v1/cryptocurrency/listings/latest", requestOptions)
	.then(result => result.data.data)
	.catch(error => console.log('error', error));
	
	res.send(JSON.stringify(response))
})
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});