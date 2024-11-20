import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors"



dotenv.config();

const app=express()
app.use(express.json())
app.use(cors());


const uri = `mongodb+srv://user_01:${process.env.MONGODB_PASSWORD}@cluster0.2aepu2v.mongodb.net/Courses?retryWrites=true&w=majority`;
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const StudentSchema = new mongoose.Schema({
    uid:{
        type:Number,
        required:true,
        unique:true,
    },
    sem1:{
        type:Number,
        required:true,
        
    },
    sem2:{
        type:Number,
        required:true,
        
    },
    cgpa:{
        type:Number,
        required:true,
       
    },
});
  
const StudentDocument = mongoose.model("StudentCgpa", StudentSchema,"StudentCgpa");

app.get("/students",async(req,res)=>{
    try{
        const data=await StudentDocument.find()
        res.json(data)
    }
    catch(error){
        res.status(500).send(error)

    }
})

// Create a route for adding a new student data
app.post("/students", async (req, res) => {
    try {
      // Get the data from the req.body
      const { uid, sem1, sem2, cgpa } = req.body;
  
      // Create a new document with the data
      const newStudent = new StudentDocument({
        uid,
        sem1,
        sem2,
        cgpa,
      });
  
      // Save the new document to the database
      await newStudent.save();
  
      // Send a success message
      res.status(201).json({ message: "Student data added successfully" });
    } catch (error) {
      // Handle any errors
      res.status(500).send(error);
    }
  });
  

app.put("/students/:uid", async (req, res) => {
    try {
        const  uid  = req.params.uid; 
        const updatedInfo = req.body; 

        
        const existingStudent = await StudentDocument.findOne({ uid: uid });

        if (existingStudent) {
            
            await StudentDocument.updateOne({ uid: uid }, { $set: updatedInfo });
            res.status(200).send("Student information updated successfully");
        } else {
            res.status(404).send("Student record not found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error);
    }
});

app.patch("students/v1/:uid",async(req,res)=>{
    try{
        const  uid  = req.params.uid; 
        const updatedInfo = req.body; 

        
        const updatedStudent = await StudentDocument.findOneAndUpdate(
            { uid: uid },
            { $set: updatedInfo }, // Set the updated information
            { new: true } // Return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).send("Student not found");
        }

        res.status(200).json(updatedStudent);

    }
    catch(error){
        console.error("Error:", error);
        res.status(500).send(error);

    }
})

app.delete("/students/d1/:uid",async(req,res)=>{
    try {
        const  uid  = req.params.uid; 

        const existingStudent = await StudentDocument.findOne({ uid: uid });

        if (existingStudent) {
            
            await StudentDocument.deleteOneOne({ uid: uid });
            res.status(200).send("Student information updated successfully");
        } else {
            res.status(404).send("Student record not found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error);
    }
 
})

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
