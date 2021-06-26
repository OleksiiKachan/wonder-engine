import { createContext } from 'react';

interface WonderEngineContext {}

const defaultContext: WonderEngineContext = {};

const Context = createContext<WonderEngineContext>(defaultContext);

export default Context;
