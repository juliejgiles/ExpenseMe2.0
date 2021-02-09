describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("The Goal tracker page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/holidays");
    cy.url().should("include", "holidays");
  });
});

describe("The Money Tips page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/moneytips");
    cy.url().should("include", "moneytips");
  });
});

describe("The Tools page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/tools");
    cy.url().should("include", "tools");
  });
});

describe("The current goals page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/current-goal");
    cy.url().should("include", "current-goal");
  });
});

describe("The entry page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/entry");
    cy.url().should("include", "entry");
  });
});
