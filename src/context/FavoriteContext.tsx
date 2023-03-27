export interface Movie {
   
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
   
}

interface State {
   
        favorites: Movie[];
}

const INITIAL_STATE= {
    favorites:[]
}