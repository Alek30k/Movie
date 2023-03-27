import styles from './card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className={styles.cardImg}
            />
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_average}</span>
                <p className={styles.desc}>{movie.overview.substring(0, 220)}</p>
                <button className={styles.button}>+</button>
            </div>
        </div>
    );
};
