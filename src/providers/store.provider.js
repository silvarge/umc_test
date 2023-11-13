import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { previewReviewResponseDTO } from "../dtos/store.dto";
import { getPreviewReview } from "../models/store.dao";

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    // default 값 넣기

    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}