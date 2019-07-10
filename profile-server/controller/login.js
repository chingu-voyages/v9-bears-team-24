const cors = require('cors');

const logHandler = (req,res,bcrypt,database)=>{
	const { email,password } = req.body;
	if (!email || !password){
		return res.status(400).json("please fill in correctly");
	}
	database.select('hash','email').from('login')
	.where('email','=',email)
	.then(data =>{
		const isValid = bcrypt.compareSync(password, data[0].hash);
		if(isValid){
			return database.select('*').from('users')
			.where('email','=',email)
			.then(user =>{
				res.json(user[0]);
			})
			.catch(err=> res.status(400).json('cant collect userinfo'))
		}else{
			res.status(400).json('No user found!')
		}
	})
	.catch(err=>{
		res.status(400).json('No user found!')
	})
}

module.exports = {
	logHandler

}