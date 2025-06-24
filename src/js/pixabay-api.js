import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "50819756-11248eda55a36e78284ebe321";

export const getImagesByQuery = query => {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    };

    return axios
        .get(URL, { params })
        .then(response => response.data)
        .catch(error => {
            throw new Error("Oops! Something went wrong. Please try again later.");
        });
};