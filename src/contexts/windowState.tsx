import {createContext} from 'react'

interface windowStateType {
    isClosed: boolean;
    toggleClosed: () => void;
}

const windowState = createContext<windowStateType | undefined>(undefined);

export default windowState;