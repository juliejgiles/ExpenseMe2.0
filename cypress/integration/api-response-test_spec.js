describe("Transactions crud actions", () => {
  it("should add a new transaction successfully", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:5000/api/v1/transactions",
      headers: {
        "content-type": "application/json",
      },
      body: {
        text: "income",
        amount: 500,
      },
    }).then((response) => {
      expect(response.status).to.be.equal(201);
    });
  });

  it("should read a transaction successfully", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/transactions/",
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.data[0].text).not.equal(undefined);
      expect(response.body.data[0].amount).not.equal(0);
    });
  });
});

describe("Contributions crud actions", () => {
  it("should add a new contribution successfully", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:5000/api/v1/contributions",
      headers: {
        "content-type": "application/json",
      },
      body: {
        text: "installment",
        amount: 200,
      },
    }).then((response) => {
      expect(response.status).to.be.equal(201);
    });
  });

  it("should read a contribution successfully", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/transactions/",
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.data[0].text).not.equal(undefined);
      expect(response.body.data[0].amount).not.equal(0);
    });
  });
});

describe("Goals crud actions", () => {
  it("should add a new goal successfully", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:5000/api/v1/goals",
      headers: {
        "content-type": "application/json",
      },
      body: {
        text: "test",
        amount: 50,
      },
    }).then((response) => {
      expect(response.status).to.be.equal(201);
    });
  });

  it("should read a goal successfully", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:5000/api/v1/goals/",
    }).then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.data[0].text).not.equal(undefined);
      expect(response.body.data[0].amount).not.equal(undefined);
    });
  });
});
