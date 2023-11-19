import moment from "moment/moment";
import { registMissionResponseDTO } from "../dtos/owner.dto"
import { addDBToMission } from "../models/owner.dao";

export const registMission = async (data) => {

    const { storeId, content, deadline, point } = data;
    const deadline_D = moment(deadline).format();

    const result = await addDBToMission(storeId, content, deadline_D, point);

    console.log(result);

    return registMissionResponseDTO(result);
}