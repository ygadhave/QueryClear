import express from "express";
import dotenv from 'dotenv';
import cors from "cors"


dotenv.config();
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


const profiles = [{
    name: "abc",
    id: 1,
    semester: "firstyear",
    university: "LPU"

}, {
    name: "xyz",
    id: 2,
    semester: "secondyear",
    university: "LPU"

}, {
    name: "Abhay",
    id: 3,
    semester: "firstyear",
    university: "VIT"

}, {
    name: "john",
    id: 4,
    semester: "firstyear",
    university: "CU"

}, {
    name: "tom",
    id: 5,
    semester: "thirdyear",
    university: "LPU"

}]


// GET - List all profiles
app.get("/profile", (req, res) => {
    res.json(profiles);
});

// GET - Details of a specific profile by name 
app.get("/profile/:name", (req, res) => {
    const profile = profiles.find((c) => c.name === req.params.name);
    if (!profile) {
        res.status(404).send("Profile not found");
    } else {
        res.json(profile);
    }
});

// POST - Add new profile
app.post("/profile", (req, res) => {
    profiles.push(req.body);
    res.send("Profile added");
});

// PUT -  Modify information of a profile
app.put("/profile/:name", (req, res) => {
    const index = profiles.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Profile not found");
    } else {
        profiles[index] = { ...profiles[index], ...req.body };
        res.send("Profile updated");
    }
});

// PATCH - Update partial information of a profile
app.patch("/profile/:name", (req, res) => {
    const index = profiles.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Profile not found");
    } else {
        const profileToUpdate = profiles[index];
        // Update specific fields if they exist in the request body
        if (req.body.name) profileToUpdate.name = req.body.name;
        if (req.body.university) profileToUpdate.university = req.body.university;
        if (req.body.semester) profileToUpdate.semester = req.body.semester;

        res.send("Profile partially updated");
    }
});

// DELETE - Remove a course by name
app.delete("/profile/:name", (req, res) => {
    const index = profiles.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Profile not found");
    } else {
        profiles.splice(index, 1);
        res.send("Profile deleted");
    }
});

app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});