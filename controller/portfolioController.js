exports.getPortfolio = (req, res, next)=>{
    res.render('portfolio.ejs', {
        pageTitle: 'Portfolio',
        path: '/portfolio'
    });
};
