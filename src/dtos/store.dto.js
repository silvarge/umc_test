export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }

    return {"reviewData": reviews, "cursorId": data[data.length-1].review_id};
}

export const registReviewResponseDTO = (data) => {
    return {"username": data.user_name, "rate": data.rate, "content": data.review_content, "created_at": formatDate(data.created_at)};
}



const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}

