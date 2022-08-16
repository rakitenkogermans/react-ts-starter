import {FC} from 'react';
import './styles/main.css';
import {NAME} from './constants/environment';

type AppProps = {};

const App: FC<AppProps> = ({}) => {
    return <div>App, {NAME}</div>;
};

export {App};
