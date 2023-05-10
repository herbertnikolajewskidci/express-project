import express from "express";

import {
    getFriend,
    getFriends,
    postFriend,
} from "../controllers/friends.controller.js";

const friendsRouter = express.Router();

friendsRouter.get("/", getFriends);
friendsRouter.post("/", postFriend);
friendsRouter.get("/:friendId", getFriend);

export default friendsRouter;
