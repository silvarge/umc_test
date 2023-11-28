// Read의 로직 처리 (GET 처리)
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { loginResponseDTO } from "../dtos/user.dto.js";
import { getMyReview, logInUser } from "../models/user.dao.js";

export const getLoginUser = async (email) =>{

    // id, pw를 통해 DAO
    if(typeof email == "undefined"){
        throw new BaseError(status.LOGIN_PARAM_NOT_EXIST);
    }else{
        const userData = await logInUser(email);
        
        if(userData == -1){
            throw new BaseError(status.LOGIN_ID_NOT_EXIST);
        }else{
            return loginResponseDTO(userData);
        }
    }

}

export const getUserReview = async (userId, query) => {

    const {reviewId = -1, size = 3} = query;

    if (!userId) {
        // 아이디 입력 안됨
        throw new BaseError(status.BAD_REQUEST);
    }else{
        const userData = await getMyReview(userId, reviewId, size);
        return userReviewResponseDTO(userData);
    }
}