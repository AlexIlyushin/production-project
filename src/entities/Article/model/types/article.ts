import { User } from 'entities/User';

export enum ArticleBlockType {
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
    CODE = 'CODE'
}

export interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT
    paragraphs: string[]
    title?: string
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE
    src: string
    title: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE
    code: string
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMIC = 'ECONOMIC'
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    user: User,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[]
}
