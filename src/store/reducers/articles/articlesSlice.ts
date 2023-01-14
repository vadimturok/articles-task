import {Article} from "../../../types/article-type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchArticles} from "./actionCreators";

interface ArticlesState{
    articles: Article[];
    selectedArticle: Article;
    isLoading: boolean;
    error: string;
}

const initialState: ArticlesState = {
    articles: [],
    selectedArticle: {} as Article,
    isLoading: true,
    error: ''
}

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setSelectedArticle(state: ArticlesState, action: PayloadAction<number>){
            const foundArticle = state.articles.find(article => article.id === action.payload)
            if(foundArticle){
                state.selectedArticle = foundArticle
            }
        }
    },
    extraReducers: {
        [fetchArticles.pending.type]: (state: ArticlesState, action) => {
            state.articles = []
            state.error = ''
            state.isLoading = true
        },
        [fetchArticles.fulfilled.type]: (state: ArticlesState, action: PayloadAction<{data: Article[]}>) => {
            state.isLoading = false
            state.articles = action.payload.data
        },
        [fetchArticles.rejected.type]: (state: ArticlesState, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default articlesSlice.reducer

export const {
    setSelectedArticle
} = articlesSlice.actions