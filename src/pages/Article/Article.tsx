import React, {useEffect} from 'react';
import styles from './article.module.scss'
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setSelectedArticle} from "../../store/reducers/articles/articlesSlice";

const ArticlePage = () => {
    const {selectedArticle, articles} = useAppSelector(state => state.articles)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {articleId} = useParams()

    useEffect(() => {
        dispatch(setSelectedArticle(Number(articleId)))
    }, [articleId, dispatch, articles])
    return (
        <div className={styles.article}>
            {Object.keys(selectedArticle).length > 0 &&
                <div className={styles.inner}>
                    <div className={styles.top}>
                        <img className={styles.articleImage} src={selectedArticle.imageUrl} alt="article"/>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.title}>{selectedArticle.title}</div>
                        <div className={styles.text}>
                            {selectedArticle.summary.repeat(10)}
                        </div>
                        <div className={styles.bottom}>
                            <div onClick={() => navigate('/')} className={styles.homeButton}>← Back to home page</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ArticlePage;