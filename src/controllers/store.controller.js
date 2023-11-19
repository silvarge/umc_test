import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { getReview } from "../providers/store.provider.js";
import { registReview } from "../services/store.service.js";

export const reviewPreview = async (req, res, next) => {
    res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}

export const addReview = async (req, res, next) => {
    res.send(response(status.SUCCESS, await registReview(req.params.storeId, req.body)));
}