const express = require('express')
const next = require('next')


const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler()

const bodyParser = require('body-parser')





require('dotenv').config()




// ─── MY MODULES ─────────────────────────────────────────────────────────────────
const mongoConnect = require('./utils/database').mongoConnect;



// ─── ROUTE ──────────────────────────────────────────────────────────────────────
const adminRoutes = require("./routes/admin/admin.routes")


app.prepare().then(() => {

    const server = express()
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());


    // ─── ROUTES ─────────────────────────────────────────────────────────────────────
    server.use("/api/admin", adminRoutes)


    mongoConnect(() => {
        server.use(handle).listen(PORT, (err) => {
            if (err) throw err
            console.log('> Ready on port ' + PORT)
        })
    })
})