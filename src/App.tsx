import React, {FC, useEffect} from 'react';
import AppRoutes from "./components/Router/AppRoutes";
import {useAppDispatch} from "./hooks";
import {fetchArticles} from "./store/reducers/articles/actionCreators";

const App: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch])

    return (
        <AppRoutes/>
    );
};

export default App;