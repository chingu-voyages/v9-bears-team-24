require("./.env")
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require("./controller/register");
const login = require("./controller/login");

const database = knex({
	client:APP_ENV,
	connection:{
		host:DB_HOST,
		user:'postgres',
		password:DB_PASS,
		database:'profiler'
	}
});

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req,res)=>{
	res.send("we are in business teneneneneh")
})
app.post('/login',(req,res)=>{login.logHandler(req,res,bcrypt,database)});
app.post("/register", (req,res) => {register.regHandler(req,res,bcrypt,database)});

app.listen(3003, ()=>{
	console.log("App running on port 3003");
})