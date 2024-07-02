import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorhandler from './app/middlewares/globalErrorhandler';
import { notFountRoute } from './app/middlewares/notFountRoute';

const app:Application=express();

// parser
app.use(cors({origin:["https://portfolio-pink-ten-95.vercel.app","https://portfolio-dashboard-one.vercel.app"],credentials:true}))
app.use(express.json())

app.use('/api/v1',router)

app.get('/',async(req:Request,res:Response)=>{
    res.send('Hello user');
})

app.use(globalErrorhandler)
app.use(notFountRoute)

export default app;
