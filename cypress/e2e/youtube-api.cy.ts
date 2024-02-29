const apiKey = Cypress.env("api_key");

describe("Youtube API video receiving", () => {
  const [name, email, password] = ["Joe Drops", "test@gmail.com", "123456789"];

  beforeEach(() => {
    cy.visit("/");
  });

  it("youtube api home videos", () => {
    cy.get('[data-cy="video-home"]').children().should("have.length.gte", 30);
  });

  it("search for videos", () => {
    cy.get('[data-cy="search-input"]').clear().type("Pagani");
    cy.get('[data-cy="search-button"]').should("have.css", "cursor");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="video-search"]').children().should("have.length.gte", 10);
    cy.url().should("include", "/search");
    cy.get('[data-cy="youtube-logo"]').should("have.css", "cursor");
    cy.get('[data-cy="youtube-logo"]').click();
    cy.url().should("include", "/");
  });
});
