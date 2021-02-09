describe("GETs data from the /api/v1/goals route", () => {
  it("returns JSON data", () => {
    cy.visit("http://localhost:3000/current-goal");
    cy.request("/api/v1/goals")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});

describe("GETs data from the /api/v1/transactions route", () => {
  it("returns JSON data", () => {
    cy.visit("http://localhost:3000/");
    cy.request("/api/v1/transactions")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});

describe("GETs data from the /api/v1/contributions route", () => {
  it("returns JSON data", () => {
    cy.visit("http://localhost:3000/current-goal");
    cy.request("/api/v1/contributions")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });
});
