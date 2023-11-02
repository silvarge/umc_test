import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signinResponseDTO } from "../dtos/user.dto"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao";

// 회원가입 시 필요한 param 찾아 넣어야됨~
export const joinUser = async (body) => {
    //    (email, name, gender, birthYear, birthMonth, birthDay, address, specAddress, phone, category) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const reg_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    
    if(!reg_email.test(body.email)){
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }

    const joinUserData = await addUser({
        'email': body.email,
        'name': body.name,
        'gender': body.gender,
        'birth': birth,
        'addr': body.addr,
        'specAddr': body.specAddr,
        'phone': body.phone
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}