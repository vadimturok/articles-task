import React, {FC} from 'react';
import CardItem from "../CardItem/CardItem";
import styles from './cardlist.module.scss'
import {Article} from "../../types/article-type";

const CardList: FC<{articles: Article[], keyword: string}> = ({articles, keyword}) => {
    return (
        <div className={styles.cardList}>
            {articles.map(article => <CardItem keyword={keyword} key={article.id} article={article}/>)}
        </div>
    );
};

export default CardList;