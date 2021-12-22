import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path'
import express from 'express';
const app = express();
const port = process.env.PORT || 4000

if (process.env.NODE === "development")
	// adds dotenv in dev
	dotenv.config()

app.use(express.static(path.join('..', 'build')));
app.use(cors({origin: 'http://localhost:3000'}))

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