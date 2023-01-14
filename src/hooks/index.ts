import {AppDispatch, RootState} from "../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/*
* this is custom hook to get data about user's device window parameters
* such as window width and window height to make responsive pages
*/
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return [windowSize.innerWidth, windowSize.innerHeight]
}