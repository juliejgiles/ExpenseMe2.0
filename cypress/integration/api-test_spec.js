describe("Backend API routes", () => {
  beforeEach(() => {
    cy.request("POST", "/api/v1/transactions", {
      text: "Test transaction",
      id: 1,
      amount: 5,
    });

    cy.intercept("POST", "transactions").as("new-transaction");
    cy.wait("@new-transaction");

    it("successfullly loads", () => {
      cy.visit("/");
    });
  });
});
