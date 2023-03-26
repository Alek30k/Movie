import styles from './favorite-card.module.scss';
import classNames from 'classnames';

export interface FavoriteCardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorite-cards-and-templates
 */
export const FavoriteCard = ({ className }: FavoriteCardProps) => {
    return <div className={classNames(styles.root, className)}>FavoriteCard</div>;
};
