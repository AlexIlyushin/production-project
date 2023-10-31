let profileId = '';

describe('пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('и профиль отображается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('и профиль редактируется', () => {
        cy.updateProfile('new', 'lastname');
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'lastname');
    });
});
