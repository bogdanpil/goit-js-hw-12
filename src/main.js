import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = form.elements["search-text"];
const loadMoreBtn = document.querySelector(".load-more-button");

let searchQuery = "";
let currentPage = 1;
let totalHits = 0;

form.addEventListener("submit", async event => {
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
hideLoadMoreButton();  
showLoader();

searchQuery = query;
currentPage = 1;

   try {
    const data = await getImagesByQuery(searchQuery, currentPage);
    totalHits = data.totalHits;

    if (!data.hits.length) {
            iziToast.error({
                message: "Вибач! Немає зображень за твоїм запитом. Будь ласка, спробуй знову!",
                position: "topRight",
            });
            return;
        }
        createGallery(data.hits);
        if (totalHits > data.hits.length) {
            showLoadMoreButton();
        }
    } catch(error) {
        iziToast.error({
            message: "Oops! Something went wrong. Please try again later.",
            position: "topRight"
        });
    } finally {
        hideLoader(); 
        input.value = "";
    }
});

loadMoreBtn.addEventListener("click", async () => {
    currentPage += 1;
    showLoader();
    hideLoadMoreButton();
  
    try {
      const data = await getImagesByQuery(searchQuery, currentPage);
      createGallery(data.hits);
  
      const { height: cardHeight } = document
        .querySelector(".gallery-item")
        .getBoundingClientRect();
  
      window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth"
      });
  
      const totalLoaded = document.querySelectorAll(".gallery-item").length;
      if (totalLoaded >= totalHits) {
        hideLoadMoreButton();
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: "topRight"
        });
      } else {
        showLoadMoreButton();
      }
    } catch (error) {
      iziToast.error({
        message: "Failed to load more images.",
        position: "topRight"
      });
    } finally {
      hideLoader();
    }
  });