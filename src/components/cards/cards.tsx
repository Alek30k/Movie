import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { useEffect, useState } from 'react';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/550?api_key=2c0383921b917af2bbb84d261d5ce099')
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};
