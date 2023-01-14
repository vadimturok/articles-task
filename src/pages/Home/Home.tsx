import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './home.module.scss'
import CardList from "../../components/CardList/CardList";
import {useAppSelector} from "../../hooks";
import {Article} from "../../types/article-type";
import {filterByKeyword} from "../../utils";
import InputField from "../../components/InputField/InputField";
import Loader from "../../components/Loader/Loader";


const Home = () => {
    const {isLoading, error, articles} = useAppSelector(state => state.articles)
    const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
    const [keyword, setKeyword] = useState('')

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
        setFilteredArticles(filterByKeyword(e.target.value, articles))
    }

    useEffect(() => {
        if(articles.length > 0){
            setFilteredArticles(articles)
        }
    }, [articles])

    return (
        <div className={styles.home}>
            <InputField keyword={keyword} onChange={onInputChange}/>
            {
                error ? <div>Error...</div> : (isLoading || !filteredArticles) ? <Loader/> :
                <div className={styles.results}>
                    <div className={styles.resultsTitle}>Results: {articles.length}</div>
                    <div className={styles.line}/>
                    <CardList keyword={keyword} articles={filteredArticles}/>
                </div>
            }
        </div>
    );
};

export default Home;