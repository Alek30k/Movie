import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 43,
                overview:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque pariatur ducimus cumque sint eum totam ipsam repellat soluta exercitationem, quisquam, repellendus cupiditate doloribus voluptate quis delectus dignissimos a animi repudiandae!',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 3,
                poster_path: 'https://purodiseno.lat/wp-content/uploads/2022/05/AVATAR.jpg',
            }}
        />
    ),
    environmentProps: {
        canvasWidth: 100,
    },
});
