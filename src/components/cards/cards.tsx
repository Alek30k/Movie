import styles from './cards.module.scss';
import classNames from 'classnames';
import { Search } from '../search/search';
import { Cards as Cards0 } from './cards';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card />
        </div>
    );
};
