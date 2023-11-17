// Read의 로직 처리 (GET 처리)
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { loginResponseDTO } from "../dtos/user.dto.js";
import { logInUser } from "../models/user.dao.js";

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