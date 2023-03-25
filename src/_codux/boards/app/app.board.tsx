import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 697,
        canvasWidth: 1086,
        windowHeight: 1157,
        windowWidth: 1032,
    },
});
