import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 65,
        canvasWidth: 1066,
        windowHeight: 1157,
    },
});
