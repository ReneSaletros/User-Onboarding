describe("Form Application", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const name = () => cy.get('[data-cy=name]');
    const email = () => cy.get('[data-cy=email]');
    const password = () => cy.get('[data-cy=password]');
    const termsOfService = () => cy.get('[data-cy=termsOfService]');
    const submitBtn = () => cy.get('[data-cy=submitBtn]');

    it("Must fill out all", () => {
        name()
            .should('have.value', '')
            .type('Rene Saletros')
            .should('have.value', 'Rene Saletros');

        email()
            .should('have.value', '')
            .type('admin@rene-s.com')
            .should('have.value', 'admin@rene-s.com');

        password()
            .should('have.value', '')
            .type('qwerty')
            .should('have.value', 'qwerty');
    }); 

    it("Do you agree to TOS", () => {
        termsOfService()
            .check()
            .should('be.checked');
    });

    it("Click me to submit", () => {
        cy.contains(/Rene Saletros/i).should('not.exist');
        name().type('Rene Saletros');
        email().type('admin@rene-s.com');
        password().type('qwerty');
        termsOfService().check();
        submitBtn().click();
        cy.contains(/Rene Saletros/i).should('exist');
    });

    it("Can't click if name is blank", () => {
        name().should('have.value', '');
        email().type('admin@rene-s.com');
        password().type('qwerty');
        termsOfService().check();
        submitBtn().should('be.disabled');
    });

    it("Can't click if email is blank", () => {
        name().type('Rene Saletros');
        email().should('have.value', '');
        password().type('qwerty');
        termsOfService().check();
        submitBtn().should('be.disabled');
    });

    it("Can't click if password is blank", () => {
        name().type('Rene Saletros');
        email().type('admin@rene-s.com');
        password().should('have.value', '');
        termsOfService().check();
        submitBtn().should('be.disabled');
    });

    it("Can't click if you don't agree to TOS", () => {
        name().type('Rene Saletros');
        email().type('admin@rene-s.com');
        password().type('qwerty');
        termsOfService().should('not.be.checked');
        submitBtn().should('be.disabled');
    });
});