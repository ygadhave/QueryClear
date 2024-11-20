import express from "express";
import dotenv from 'dotenv';
import cors from "cors"


dotenv.config();
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


//schedule
let schedules = {
    students: [{
        name: "abc",
        id: 1,
        semester: 2,
        university: "LPU",
        timing: "10-11"
    },
    {
        name: "aman",
        id: 2,
        semester: 2,
        university: "LPU",
        timing: "10-11"
    },
    {
        name: "saurab",
        id: 3,
        semester: 5,
        university: "VIT",
        timing: "9-11"
    },
    {
        name: "xyz",
        id: 4,
        semester: 4,
        university: "CU",
        timing: "1-3"
    },],

    teachers: [{
        name: "anand",
        id: 1,
        semester: 2,
        university: "LPU",
        timing: "10-11"
    },
    {
        name: "pqr",
        id: 2,
        semester: 7,
        university: "VIT",
        timing: "9-12"
    },
    {
        name: "aisha",
        id: 3,
        semester: 5,
        university: "GTU",
        timing: "1-3"
    },]
}

// GET - Welcome
app.get("/schedule", (req, res) => {
    res.json(schedules);
});

// GET - Students Schedule
app.get("/schedule/students/:name", (req, res) => {
    const schedule = schedules.students.find((c) => c.name === req.params.name);
    res.json(schedule);
});

// GET - Teachers Schedule
app.get("/schedule/teachers/:name", (req, res) => {
    const schedule = schedules.teachers.find((c) => c.name === req.params.name);
    res.json(schedule);
});

// POST - Add schedule in students column
app.post("/schedule/students", (req, res) => {
    schedules.students.push(req.body);
    res.send("Schedule added");
});

// POST - Add schedule in teachers column
app.post("/schedule/teachers", (req, res) => {
    schedules.teachers.push(req.body);
    res.send("Schedule added");
});

// PUT - Modify information of a course
app.put("/schedule/students/:name", (req, res) => {
    const index = schedules.students.findIndex((c) => c.name === req.params.name);
    if (index === -1) {
        res.status(404).send("Schedule not found");
    }
    else {
        schedules.students[index] = { ...schedules.students[index], ...req.body };
        res.send("Schedule updated in students column");
    }

})

// PATCH - Update partial information of a profile
app.patch("/schedule/students/:name",(req,res)=>{
    const index=schedules.students.findIndex((c) => c.name === req.params.name);
    if (index === -1) {
        res.status(404).send("Schedule not found");
    }
    else{
        const scheduleToUpdate = schedules.students[index];
        // Update specific fields if they exist in the request body
        if (req.body.name) scheduleToUpdate.name = req.body.name;
        if (req.body.university) scheduleToUpdate.university = req.body.university;
        if (req.body.semester) scheduleToUpdate.semester = req.body.semester;

        res.send("Profile partially updated");
    }
})

// DELETE - Remove a schedule by name
app.delete("/schedule/students/:name", (req, res) => {
    const index = schedules.students.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Schedule not found");
    } else {
        schedules.students.splice(index, 1);
        res.send("Schedule deleted");
    }
});

app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});

//Starting server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})