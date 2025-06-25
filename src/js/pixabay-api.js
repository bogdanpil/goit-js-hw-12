import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "50819756-11248eda55a36e78284ebe321";
const PER_PAGE = 15;

export const getImagesByQuery = async (query, page = 1) => {
    const params = {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: PER_PAGE,
    };

    try {
        const response = await axios.get(URL, { params });
        return response.data;
    } catch (error) {
        throw new Error("Халепа! Щось пішло не так. Спробуй ще раз пізніше.");
    }

};