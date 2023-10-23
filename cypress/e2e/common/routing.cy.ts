import { selectByTestId } from '../../helpers/selectByTestId';

describe('Роутинг', () => {
    describe('пользователь не авторизован', () => {
        it('переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('переход на несуществующую страницу', () => {
            cy.visit('/prof232332323ile/1');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });

        it('переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('переход на страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
