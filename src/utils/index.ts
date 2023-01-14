import {Article} from "../types/article-type";

export const filterByKeyword = (keyword: string, articles: Article[]) => {
    const keywords = keyword.split(' ')
    return articles.filter(article => {
        if(!keyword){
            return article
        }else if(article.title.toLowerCase().split(' ').some(titleWord => keywords.includes(titleWord))
            || article.summary.toLowerCase().split(' ').some(titleWord => keywords.includes(titleWord))
            ){
            return article
        }
    })
}

export const isYellow = (word: string, keyword: string) => {
    return keyword.toLowerCase().split(' ').includes(word.toLowerCase())
}