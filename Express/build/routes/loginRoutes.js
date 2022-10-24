"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send("Not Authed");
    }
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`Hello There from landing page, logged in, visit logout `);
    }
    else {
        res.send('not logged bro, visit login');
    }
});
router.get("/login", (req, res) => {
    res.send(`
    <form method="POST">
        <div> 
            <label> Email </label>
            <input name="email" />
        </div>
        <div>
            <label> Password </label>
            <input name="password" />
        </div>
        <button> Submit </button>
    </form>
`);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        req.session = { loggedIn: true };
        // res.send(email + password)
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to protected route");
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
