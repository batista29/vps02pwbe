const Express = require('express');
const cors = require('cors');

const routes = require('./src/routes/routes');

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(routes);

app.listen(3055, () => {
    console.log("App ON");
});