import styles from './favorite-card.module.scss';
import classNames from 'classnames';

export interface FavoriteCardProps {
    className?: string;
    movie: {
        id: string;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img />
            <h1></h1>
            <span>text</span>
        </div>
    );
};
