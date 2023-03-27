import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface CardsProps {
    className?: string;
}

export interface Movie {
    id: number;
    poster_path?: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const { state } = useContext(SearchContext);

    const { sortBy, genre, query } = state;

    useEffect(() => {
        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie?api_key=2c0383921b917af2bbb84d261d5ce099&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=2c0383921b917af2bbb84d261d5ce099&sort_by=${sortBy}&with_genres=${genre}`
        )
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, [sortBy, genre, query]);

    return (
        <div className={classNames(styles.root, className)}>
            {movies?.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
