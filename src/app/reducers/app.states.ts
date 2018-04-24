import { Article } from '../models/article';

export interface AppState {
	articleState: ArticleState;
}

export interface ArticleState {
	articles: Article[];
}