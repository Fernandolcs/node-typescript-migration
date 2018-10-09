import * as express from "express";

const expressApp = {
    init: () => {
        const app = express();
        const jsRoutes = require('./js-routes').registerRoutes(app);
        app.listen(3000, () => console.log('Example app listening on port 3000!'));
    }
}

function myFunc(a: string): number {
    const b = a;
    return 2;
}

module.exports = expressApp;