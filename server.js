import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'


const app = express()
const PORT = process.env.PORT || 3000

dotenv.config()

app.use( cors( { origin: '*', credentials: true } ) )
app.use( cookieParser() )
app.use( express.urlencoded( { extended: true } ) )
app.use( express.json() )


app.listen( PORT, () => {
    console.log( "Server listening at " + PORT )
} )