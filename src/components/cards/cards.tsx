import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { useEffect, useState } from 'react';

export interface CardsProps {
    className?: string;
}

export interface Movie {
    id: string;
    poster_path?: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=2c0383921b917af2bbb84d261d5ce099')
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
