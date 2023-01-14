import React, {FC} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Article} from "../../types/article-type";
import moment from 'moment'
import {useNavigate} from "react-router-dom";
import TextBox from "../TextBox/TextBox";
import styles from './carditem.module.scss'

const CardItem: FC<{article: Article, keyword: string}> = ({article, keyword}) => {
    const description = article.summary.substring(0, 100)
    const navigate = useNavigate()
    return (
        <Card className={styles.card} onClick={() => navigate(`/articles/${article.id}`)} sx={{ maxWidth: 345, marginBottom: '20px', cursor: 'pointer' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={article.imageUrl}
                title="green iguana"
            />
            <CardContent className={styles.cardContent}>
                <Typography sx={{color: '#363636', opacity: '0.6', fontSize: '14px', fontWeight: '400', display: 'flex', alignItems: 'center', gap: '3px'}} variant={'caption'}>
                    <CalendarTodayIcon sx={{fontSize: '14px'}}/>
                    {moment(article.publishedAt).format('MMMM Do, YYYY')}
                </Typography>
                <Typography sx={{color: '#363636'}} gutterBottom variant="h5" component="div">
                    <TextBox text={article.title} keyword={keyword}/>
                </Typography>
                <Typography sx={{color: '#363636'}} variant="body2" >
                    <TextBox isDescription text={description} keyword={keyword}/>
                </Typography>
            </CardContent>
            <button className={styles.readMoreButton}>Read more →</button>
        </Card>
    );
};

export default CardItem;