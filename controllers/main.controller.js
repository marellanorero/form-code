const axios = require('axios')

const home = (req, res) => {
    res.render('index')
}

const users = (req, res) => {
    res.render('users')
}

const register = (req, res) => {
    const { body, files } = req;
    console.log(body);
    console.log(files);

    const { avatar } = files;
    
    avatar.mv('./public/avatars/'+avatar.name)

    res.redirect('/');
}

module.exports = {
    home, 
    register, 
    users
}