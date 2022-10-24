import {Router, Request, Response, NextFunction} from "express"

interface RequestWithBody extends Request{
    body: {[key:string]: string|undefined }
}

function requireAuth(req:Request, res:Response, next:NextFunction){
    if(req.session && req.session.loggedIn){
        next()
        return
    } else {
        res.status(403)
        res.send("Not Authed")
    }

}

const router = Router()

router.get("/", (req: Request, res:Response) => {
    if( req.session && req.session.loggedIn ){
        res.send(`Hello There from landing page, logged in, visit logout `)
    } else {
        res.send('not logged bro, visit login')
    }
})

router.get("/login", (req:Request, res:Response) => {
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
`)
})

router.post("/login", (req:RequestWithBody, res:Response) => {
    const {email, password} = req.body
    if (email && password){
        req.session = {loggedIn: true}
        // res.send(email + password)
        res.redirect("/")
    } else {
        res.send("Invalid email or password")
    }
})

router.get("/protected", requireAuth ,(req:Request, res:Response)=> {
    res.send("Welcome to protected route")
})

router.get("/logout", (req:Request, res:Response) => {
    req.session = undefined
    res.redirect("/")

})


export {router}