import {Article} from "../../types/article-type";

export default class ArticleService{
    static async getArticles(): Promise<Article[]>{
        const response = await fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=8')
        const data = await response.json()
        return data
    }

    static async getArticleById(articleId: number): Promise<Article>{
        const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`)
        const data = await response.json()
        return data
    }
}