const User = require("../Models/user");

module.exports.createUser = async function (req, res) {
	const { name, email, password, phone, bio } = req.body;

	if (!email || !password || !phone || !bio || !name) {
		return res.status(403).json({ message: "Please enter all details." });
	}

	if (password.length < 6) {
		return res.status(403).json({ message: "Password must be at least 6 characters" });
	}

	const user = await User.create({
		name: name,
		email: email,
		password: password,
		phone: phone,
		bio: bio,
	});

	if(user){
        return res.json({
            name,
            email,
            phone,
            bio,
        });
    } 
};
