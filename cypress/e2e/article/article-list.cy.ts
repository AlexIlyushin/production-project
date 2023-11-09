describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login().then((_) => {
            cy.visit('/articles');
        });
    });
    it('и статьи подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('и статьи подгружаются (на стабах)', () => {
        cy.intercept('GET', `**/articles?*`, {
            fixture: 'articles.json',
        });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('пример заскипаного теста', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.get('dddddd').should('exist');
    });
});
