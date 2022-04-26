import { titlePage } from "./home";
import { apiFilmes } from "./services/api";
import { data, FlickityEvents, prototype } from "flickity";
import * as Flickity from "flickity";

const carrossel: HTMLDivElement = document.querySelector(".teste");

new Flickity(carrossel, {
  autoPlay: 1500,
  wrapAround: true,
});

// $(".teste").slick({
//   infinite: false,
//   slidesToShow: 3,
// });

async function teste() {
  try {
    const response = await apiFilmes.get("/3/movie/76341");

    titlePage.textContent = response.data.original_title;

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

teste();
