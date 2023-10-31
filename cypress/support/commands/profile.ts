export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: '123',
        },
        body: {
            id: profileId,
            first: 'test',
            lastname: 'user',
            age: 465,
            currency: 'EUR',
            country: 'Ukraine',
            city: 'Moscow',
            username: 'testuser',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
