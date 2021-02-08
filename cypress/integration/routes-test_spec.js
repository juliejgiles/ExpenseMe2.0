describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("The Goal tracker page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/holidays");
  });
});

describe("The Money Tips page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/moneytips");
  });
});

describe("The Tools page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/tools");
  });
});

describe("The entry page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000/entry");
  });
});
