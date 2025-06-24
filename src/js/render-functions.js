import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, });

export const createGallery = images => {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
    <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}"/>
    </a>
    <div class="info">
    <p class="properties">Likes <span class="value">${likes}</span></p>
    <p class="properties">Views <span class="value">${views}</span></p>
    <p class="properties">Comments <span class="value">${comments}</span></p>
    <p class="properties">Downloads <span class="value">${downloads}</span></p>
    </div>

    </li>`).join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
};

export const clearGallery = () => {
    gallery.innerHTML = "";
};

export const showLoader = () => {
    loader.classList.remove("hidden");
};

export const hideLoader = () => {
    loader.classList.add("hidden");
};