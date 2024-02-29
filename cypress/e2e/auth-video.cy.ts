describe("Authentication of sign up and sign in", () => {
  const [name, email, password] = ["Joe", "joe@gmail.com", "123456789"];
  const invalidEmail = "invalid-emailexample.com";
  const invalidPassword = "invalid-password";

  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy='sign-in-button']").click();
    cy.url().should("include", "/login");
  });

  it("displays error message on invalid sign-up attempt", () => {
    cy.get('[data-cy="sign-up"]').click();
    cy.url().should("include", "/sign-up");
    cy.get('[data-cy="create-user"]').click();
    cy.get('[data-cy="name-error"]').should("have.css", "display", "flex");
    cy.get('[data-cy="email-error"]').should("have.css", "display", "flex");
    cy.get('[data-cy="password-error"]').should("have.css", "display", "flex");
  });

  it("access sign up and creating user", () => {
    cy.get('[data-cy="sign-up"]').click();
    cy.url().should("include", "/sign-up");
    cy.get('[data-cy="name-input"]').type(name);
    cy.get('[data-cy="email-input"]').type(email);
    cy.get('[data-cy="password-input"]').type(password);
    cy.get('[data-cy="show-password"]').check();
    cy.get('[data-cy="create-user"]').click();
  });

  it("displays error message on invalid sign-in attempt", () => {
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

  describe("Video sending functionality", () => {
    const [thumbnail, title, description] = [
      "https://images3.alphacoders.com/248/248497.jpg",
      "How I lost my sanity in Dubai...",
      "Discover a post-apocalyptic Dubai in the skin of Captain Martin Walker",
    ];

    beforeEach(() => {
      cy.visit("/");
      cy.get("[data-cy='sign-in-button']").click();
      cy.url().should("include", "/login");
      cy.get('[data-cy="email-field"]').type(email);
      cy.get('[data-cy="password-field"]').type(password);
      cy.get('[data-cy="show-password"]').check();
      cy.get('[data-cy="login-button"]').click();
      cy.url().should("include", "/");
    });

    it("access and create video", () => {
      cy.get("[data-cy='your-videos']").click();
      cy.url().should("include", "/your-videos");
      cy.get("[data-cy='create-video-modal']").click();
      cy.get('[data-cy="video-thumbnail-input"]').type(thumbnail);
      cy.get('[data-cy="video-title-input"]').type(title);
      cy.get('[data-cy="video-description-input"]').type(description);
      cy.get('[data-cy="create-video"]').click();
      cy.get('[data-cy="video-container"]').should("have.length.gte", 1);
      cy.reload();
    });
  });
});
