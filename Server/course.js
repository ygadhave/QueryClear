// import express from "express";
// const app = express();
// const port = 8000;

// app.use(express.json());

// let courses = {
//     cse: [
//         {
//             course: "frontend",
//             courseId: 1,
//             cohort: 10,
//             college: "LPU",
//             semester: 2,
//             averageRating: 0,
//             studentsVoted: 0,
//         },
//         {
//             course: "backend",
//             courseId: 2,
//             cohort: 11,
//             college: "GTU",
//             semester: 3,
//             averageRating: 9.25,
//             studentsVoted: 12,
//         },
//         {
//             course: "design",
//             courseId: 3,
//             cohort: 10,
//             college: "LPU",
//             semester: 2,
//             averageRating: 0,
//             studentsVoted: 0,
//         },
//         {
//             course: "dsa",
//             courseId: 4,
//             cohort: 10,
//             college: "VIT",
//             semester: 2,
//             averageRating: 4,
//             studentsVoted: 3,
//         },
//     ],
// };

// // GET - List all courses
// app.get("/courses", (req, res) => {
//     res.json(courses.cse);
// });

// // GET - Details of a specific course by name
// app.get("/courses/:courseName", (req, res) => {
//     const course = courses.cse.find((c) => c.course === req.params.courseName);
//     if (!course) {
//         res.status(404).send("Course not found");
//     } else {
//         res.json(course);
//     }
// });

// // GET - Average rating of a specific course
// app.get("/courses/:courseName/rating", (req, res) => {
//     const course = courses.cse.find((c) => c.course === req.params.courseName);
//     if (!course) {
//         res.status(404).send("Course not found");
//     } else {
//         res.json({ averageRating: course.averageRating });
//     }
// });

// // POST - Create a new course
// app.post("/courses", (req, res) => {
//     courses.cse.push(req.body);
//     res.send("Course added");
// });

// // POST - Add a rating to a course
// app.post("/courses/:courseName/rating", (req, res) => {
//     const course = courses.cse.find((c) => c.course === req.params.courseName);
//     if (!course) {
//         res.status(404).send("Course not found");
//     } else {
//         const rating = req.body.rating;
//         course.averageRating =
//             (course.averageRating * course.studentsVoted + rating) /
//             (course.studentsVoted + 1);
//         course.studentsVoted++;
//         res.send("Rating updated");
//     }
// });

// // PUT - Modify information of a course
// app.put("/courses/:courseName", (req, res) => {
//     const index = courses.cse.findIndex(
//         (c) => c.course === req.params.courseName
//     );
//     if (index === -1) {
//         res.status(404).send("Course not found");
//     } else {
//         courses.cse[index] = { ...courses.cse[index], ...req.body };
//         res.send("Course updated");
//     }
// });

// // PATCH - Update partial information of a course
// app.patch("/courses/:courseName", (req, res) => {
//     const index = courses.cse.findIndex(
//         (c) => c.course === req.params.courseName
//     );
//     if (index === -1) {
//         res.status(404).send("Course not found");
//     } else {
//         const courseToUpdate = courses.cse[index];
//         // Update specific fields if they exist in the request body
//         if (req.body.cohort) courseToUpdate.cohort = req.body.cohort;
//         if (req.body.college) courseToUpdate.college = req.body.college;
//         if (req.body.semester) courseToUpdate.semester = req.body.semester;

//         res.send("Course partially updated");
//     }
// });

// // DELETE - Remove a course by name
// app.delete("/courses/:courseName", (req, res) => {
//     const index = courses.cse.findIndex(
//         (c) => c.course === req.params.courseName
//     );
//     if (index === -1) {
//         res.status(404).send("Course not found");
//     } else {
//         courses.cse.splice(index, 1);
//         res.send("Course deleted");
//     }
// });

// app.get("/*", (req, res) => {
//     res.send("You are on worng route. Here's the list of possible routes");
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });

import express from "express";
import cors from "cors"
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Replace with your MongoDB connection string
const uri = `mongodb+srv://user_01:${process.env.MONGODB_PASSWORD}@cluster0.2aepu2v.mongodb.net/Courses?retryWrites=true&w=majority`;
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Since the data is stored in an array within a single document,
// we will create a schema and model for the document that contains the 'cse' field.
const CourseSchema = new mongoose.Schema({
  cse: [
    {
      course: String,
      courseId: Number,
      cohort: Number,
      college: String,
      semester: Number,
      averageRating: Number,
      studentsVoted: Number,
    },
  ],
});

const CoursesDocument = mongoose.model("subjects", CourseSchema);

// Routes
app.get("/courses", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    res.json(doc.cse);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/courses/:courseName", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    const course = doc.cse.find((c) => c.course === req.params.courseName);
    res.json(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/courses/:courseName/rating", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    const course = doc.cse.find((c) => c.course === req.params.courseName);
    res.json({ averageRating: course.averageRating });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/courses", async (req, res) => {
  try {
    const doc = await CoursesDocument.findOne();
    doc.cse.push(req.body);
    await doc.save();
    res.status(201).send("Course added successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/courses/:courseName', async (req, res) => {
  const { courseName } = req.params;
  try {
    const updatedDocument = await CoursesDocument.findOneAndUpdate(
      { cse: { $elemMatch: { course: courseName } } },
      { $pull: { cse: { course: courseName } } }
    );

    if (!updatedDocument) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});