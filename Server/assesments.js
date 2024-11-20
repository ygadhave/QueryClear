import express from "express";
import dotenv from 'dotenv';
import cors from "cors"



dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());


const test = [{
    name: "Aptitude",
    test_id: 1,
    duration: "2 hrs",
    difficulty: "easy",


}, {
    name: "DSA",
    test_id: 2,
    duration: "2 hrs",
    difficulty: "medium"

}, {
    name: "OS",
    test_id: 3,
    duration: "1 hrs",
    difficulty: "medium"

}, {
    name: "EE",
    test_id: 4,
    duration: "2 hrs",
    difficulty: "medium"

}, {
    name: "CN",
    test_id: 5,
    duration: "2 hrs",
    difficulty: "easy"

}, {
    name: "Maths",
    test_id: 6,
    duration: "2 hrs",
    difficulty: "difficult"

},]

// GET - List all tests
app.get("/tests", (req, res) => {
    res.json(test);
});

// GET - Details of a tests course by name
app.get("/tests/:name", (req, res) => {
    const tests = test.find((c) => c.name === req.params.name);
    if (!tests) {
        res.status(404).send("Test not found");
    } else {
        res.json(tests);
    }
});

// POST - Create a new tests
app.post("/tests", (req, res) => {
    test.push(req.body);
    res.send("Tests added");
});

// PUT - Modify information of a tests
app.put("/tests/:name", (req, res) => {
    const index = test.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Test not found");
    } else {
        test[index] = { ...test[index], ...req.body };
        res.send("Test updated");
    }
});

// PATCH - Update partial information of a tests
app.patch("/tests/:name", (req, res) => {
    const index = test.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Test not found");
    } else {
        const testToUpdate = test[index];
        // Update specific fields if they exist in the request body
        if (req.body.name) testToUpdate.name = req.body.name;
        if (req.body.duration) testToUpdate.duration = req.body.duration;
        if (req.body.difficulty) testToUpdate.difficulty = req.body.difficulty;

        res.send("Test partially updated");
    }
});

// DELETE - Remove a course by tests
app.delete("/tests/:name", (req, res) => {
    const index = test.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Test not found");
    } else {
        test.splice(index, 1);
        res.send("Test deleted");
    }
});


app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});