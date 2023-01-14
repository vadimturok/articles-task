import {createAsyncThunk} from "@reduxjs/toolkit";
import ArticleService from "../../../services/article/articleService";

export const fetchArticles = createAsyncThunk('articles/fetchArticles',
    async (args, thunkAPI) => {
    try{
        const data = await ArticleService.getArticles()
        return {data}
    }catch(e){
        return thunkAPI.rejectWithValue('Error while fetching articles')
    }
})