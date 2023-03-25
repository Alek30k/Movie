import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ['Popularity', 'Most Voted', 'Release Date'];

export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://user-images.githubusercontent.com/101005998/226206349-363d1be5-a9bc-475b-8a33-f6fa4d32f965.png"
                    className={styles.logoImg}
                />
                <span className={styles.logoText}>Alemovie</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul>
                {sortBy.map((item) => (
                    <li className={styles.list} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
