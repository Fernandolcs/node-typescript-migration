const jsRoutes = {
    registerRoutes: (app) => {
        app.get('/js', (req, res) => {
            res.send('Hello World!')
        });
        console.log(' > Javascript Routes registered!');
    }
}

module.exports = jsRoutes;