import {
    Movie
} from "./movie";
import { MovieService } from "./movies.service";

const service = new MovieService();
const movies = service.get(movies => {
    movies.forEach(movie => ShowMovie(movie));
});

//ShowMovie(movies[1]);

function ShowMovie(movie){
    const {title, year, score} = movie;
    document.write(`<p>${title}, ${year}, ${score}</p>`);
}

