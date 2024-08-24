import  express from "express";
import mongoose from "mongoose";
import  dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";



const app = express();
// app.use(cors(
//   {
//     origin:["https://deploy"]
//   }
// ));

app.use(cors(
  {
    origin:["https://book-store-app-frontend.vercel.app/"],
    method:["POST","GET"],
    credentials:true
  }
));
app.use(express.json());
mongoose.connect('mongodb+srv://shuvom2023:shuvom@2002@cluster0.76pix.mongodb.net/');

dotenv.config();


const PORT=process.env.PORT  || 4000;
const URI=process.env.MongoDBURI;


//connect to mongoDB
try {
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error",error);
}

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);

//deployment
// if(process.env.NODE_ENV=="production"){
//      const dirPath=path.resolve();
//      app.use(express.static("FrontEnd/dist"));
//      app.get("*",(req,res)=>{
//       res.sendFile(path.resolve(dirPath,"FrontEnd","dist","index.html"));
//      })
// }

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
