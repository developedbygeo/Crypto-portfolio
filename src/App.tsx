import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppDispatch } from './app/hooks';

import Header from './components/Header/Header';
import { getInitialData } from './features/initialData/dataSlice';

// import Landing from './pages/Landing';
const Landing = React.lazy(() => import('./pages/Landing'));
const Markets = React.lazy(() => import('./pages/Markets'));

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getInitialData());
    }, []);

    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<p>Loading</p>}>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/markets" element={<Markets />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
};

export default App;
