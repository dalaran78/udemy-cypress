describe("basics", () => {
  beforeEach(() => {
    cy.visit("/textinput");
  });
  it("visit explenation text input", () => {
    cy.url().then((url) => {
      cy.log(`Printing the URL: ${url}`);
      expect(url).to.contains("/textinput");
    });
  });

  // then in this case used to see the log and see something to be analyzed
  //in other cases best practice to use .should
  it("title validation", () => {
    cy.title().then((title) => {
      cy.log(title);
      expect(title).to.be.equal("Text Input");
    });
  });

  it("Input Challenge ", () => {
    cy.get("input#newButtonName").type("Hello from Input");
    cy.get("button#updatingButton")
      .click()
      .should("have.text", "Hello from Input");
  });
});
