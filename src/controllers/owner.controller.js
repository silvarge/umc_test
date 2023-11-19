import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { registMission } from "../services/owner.service.js";

export const addMission = async (req, res, next) => {
    res.send(response(status.SUCCESS, await registMission(req.body)));
}