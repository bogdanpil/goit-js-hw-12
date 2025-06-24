import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.error({
            message: "Please enter a search term!",
            position: "topRight",
        });
        return;
    };

clearGallery();   
showLoader();

getImagesByQuery(query)
    .then(data => {
        if (!data.hits.length) {
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
            });
            return;
        };
        createGallery(data.hits);
    })
    .catch(error => {
        iziToast.error({
            message: "Oops! Something went wrong. Please try again later.",
            position: "topRight"
        });
    })
    .finally(() => {
        hideLoader(); 
        input.value = "";
    });
});