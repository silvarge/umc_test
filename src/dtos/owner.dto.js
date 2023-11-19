import moment from "moment";

export const registMissionResponseDTO = (data) => {
    return {
        "mission_id" : data.mission_id,
        "restaurant": data.restaurant_name,
        "content": data.mission_content,
        "point": data.mission_point,
        "deadline": moment(data.mission_deadline).format()
    };
}