describe("Environment Variable Demo", () => {
  it("Demo", () => {
    cy.log(`Printing Environment Variavble Value: ${Cypress.env("demoVar")}`);
  });
});
