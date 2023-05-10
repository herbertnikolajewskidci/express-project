import express from "express";

const app = express();

const PORT = 3000;

const friends = [
    { id: 0, name: "Albert Einstein" },
    { id: 1, name: "Sir Isaac Newton" },
    { id: 2, name: "Nicola Tesla" },
];

app.get("/friends", (req, res) => {
    res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            errror: "Friend does not exist",
        });
    }
});

app.get("/messages", (req, res) => {
    res.send("<ul><li>Helloo Albert!</li></ul>");
});

app.post("/messages", (req, res) => {
    console.log("Updateing messages ...");
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
