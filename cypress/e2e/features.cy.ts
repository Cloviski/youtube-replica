const apiKey = Cypress.env("api_key");

describe("Test the main features of the application", () => {
  const [name, email, password] = ["Joe Drops", "test@gmail.com", "123456789"];

  beforeEach(() => {
    cy.visit("/");
  });

  it("youtube api videos received", () => {
    cy.get('[data-cy="video-home"]').children().should("have.length.gte", 30);
  });

  it("searches for videos", () => {
    cy.get('[data-cy="search-input"]').clear().type("Pagani");
    cy.get('[data-cy="search-button"]').should("have.css", "cursor");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="video-search"]').children().should("have.length.gte", 10);
    cy.url().should("include", "/search");
    cy.get('[data-cy="youtube-logo"]').should("have.css", "cursor");
    cy.get('[data-cy="youtube-logo"]').click();
  });

  describe("Authentication", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("[data-cy='sign-in-button']").click();
      cy.url().should("include", "/login");
    });

    it("access sign up", () => {
      cy.get('[data-cy="sign-up"]').click();
      cy.url().should("include", "/sign-up");
      cy.get('[data-cy="name-input"]').type(name);
      cy.get('[data-cy="email-input"]').type(email);
      cy.get('[data-cy="password-input"]').type(password);
      cy.get('[data-cy="show-password"]').check();
      cy.get('[data-cy="create-user"]').click();
    });

    it("displays error message on invalid sign-in attempt", () => {
      const invalidEmail = "invalid-emailexample.com";
      const invalidPassword = "invalid-password";

      cy.get('[data-cy="email-field"]').type(invalidEmail);
      cy.get('[data-cy="password-field"]').type(invalidPassword);
      cy.get('[data-cy="login-button"]').click();
      cy.get('[data-cy="error"]').should("have.css", "display", "flex");
    });

    it("successfully signs in with valid credentials", () => {
      cy.get('[data-cy="email-field"]').type(email);
      cy.get('[data-cy="password-field"]').type(password);
      cy.get('[data-cy="show-password"]').check();
      cy.get('[data-cy="login-button"]').click();
      cy.url().should("include", "/");
    });
  });
});
