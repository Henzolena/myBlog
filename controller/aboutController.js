const path = require('path');

exports.getAbout =  (req, res, next)=>{
    res.render('about.ejs', {
        pageTitle: 'About',
        path: '/about'
    });
};
