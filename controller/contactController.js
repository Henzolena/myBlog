exports.getContact = (req, res, next)=>{
    res.render('contact.ejs', {
        pageTitle: 'Contact',
        path: '/contact'
    });
};
