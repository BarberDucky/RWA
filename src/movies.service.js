import { Movie } from "./movie";

export class MovieService {
    constructor(){
        this.movies = [];   
        this.movies.push(new Movie("Rambo", 1985, 10));
        this.movies.push(new Movie("Rocky", 1987, 8));
        this.movies.push(new Movie("Expendables", 2015, 9));
        this.movies.push(new Movie("Mrak film", 2005, 2));
    }
    get(cbFunc){
        setTimeout(() => cbFunc(this.movies), 2000);
        //return this.movies;
    }
}