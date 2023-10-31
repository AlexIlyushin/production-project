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
});
