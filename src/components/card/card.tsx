import styles from './card.module.scss';
import classNames from 'classnames';

export interface CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img />
            <div>
                <h1 />
                <span>text</span>
                <p>This is a paragraph.</p>
                <button>Button</button>
            </div>
        </div>
    );
};
