import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortBy: {q:string,text:string}[] = [
    {q:"popularity.desc", text:"Popularity"},
    {q:"vote_count.desc", text:"Most Voted"},
    {q:"release_date.desc", text:"Release Date"},
];
const genres: {id:string,text:string}[] = [
    {id:"28", text:"Action"},
    {id:"12", text:"Adventure"},
    {id:"35", text:"Comedy"},
    {id:"18", text:"Drama"},
    {id:"27", text:"Horror"},
    {id:"10749", text:"Romance"},
    {id:"53", text:"Thriller"},
    {id:"16", text:"Animation"},
];

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
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li key={item.q} className={styles.listItem}>
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li key={item.id} className={styles.listItem}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
