import moment from "moment";

// login response DTO
export const loginResponseDTO = (data) => {
    return {"email": data[0].email};
}

// sign in response DTO
export const signinResponseDTO = (user, prefer) => {

    const preferFood = [];

    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }

    console.log("DTO", prefer);
    console.log("DTO>length", prefer[0].length);
    console.log("DTO>CATEGORY", preferFood);


    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const challengeMissionResponseDTO = (result) => {
    return {
        "challenge_mission_id": result.u_mission_id,
        "store": result.restaurant_name,
        "mission": result.mission_content,
        "deadline": moment(result.mission_deadline).format('YYYY-MM-DD HH:mm')
    };
}

export const userReviewResponseDTO = (result) => {

    const reviewResult = [];

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
        reviewResult.push({
            "userId": result[i].user_id,
            "userName": result[i].user_name,
            "reviewId": result[i].review_id,
            "rate": result[i].rate,
            "reviewContext": result[i].review_content,
            "date": moment(result[i].created_at).format('YYYY-MM-DD')
        })
    }

    return {"review": reviewResult};
}