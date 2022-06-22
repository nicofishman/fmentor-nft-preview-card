import React, { FC } from 'react';

import Card from './Components/Card';

interface AppProps {

};

const App: FC<AppProps> = () => {
    return (
        <div className="bg-dark-blue-main-bg text-white flex h-screen w-full justify-center items-center text-3xl">
            <Card />
        </div>
    );
};

export default App;
