import express from 'express'

const app = express()
const port: number = 3000;


app.listen(port, ()=> console.log("App is running...."))