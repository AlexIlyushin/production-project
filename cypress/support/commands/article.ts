import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Test article',
    subtitle: 'Test article subtitle',
    img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['ECONOMICS'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/articles`,
        headers: {
            Authorization: '123',
        },
        body: article ?? defaultArticle,
    }).then(({ body }) => body);
};

export const removeArticle = (articleId: string) =>
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: {
            Authorization: '123',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
