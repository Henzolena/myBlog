exports.getResume = (req, res, next)=>{
    res.render('resume.ejs', {
        pageTitle: 'Resume',
        path: '/resume'
    });
};