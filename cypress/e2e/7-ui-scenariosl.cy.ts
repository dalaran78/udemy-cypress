describe.skip("Click Chellange", () => {
  beforeEach(() => {
    cy.visit("/click");
  });
  it("class assertions", () => {
    cy.get("#badButton").click().should("have.class", "btn-success");
  });
  it("background assertion", () => {
    cy.get("#badButton")
      .click()
      .should("have.css", "background-color", "rgb(40, 167, 69)");
  });
});

describe("Hover challenge", () => {
  beforeEach(() => {
    cy.visit("/mouseover");
  });
  it("hover with cypress workaround", () => {
    cy.get(".text-primary").trigger("mouseover");
  });
  it("hover with cypress workaround", () => {
    cy.get(".text-primary").realHover();
  });
});
