import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getMessages(req, res) {
    res.sendFile(
        path.join(__dirname, "..", "public", "images", "skimountain.jpg")
    );
}

function postMessages(req, res) {
    console.log("Updateing messages ...");
}

export { getMessages, postMessages };
