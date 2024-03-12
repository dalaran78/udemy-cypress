describe("LOCATORS", () => {
  beforeEach(() => {
    cy.visit("/dynamicid");
  });
  it("Cy.contains example", () => {
    cy.contains("Button with Dynamic ID").should(
      "have.text",
      "Button with Dynamic ID"
    );
  });
  it("Cy.get + cy.find example ", () => {
    cy.get("div").find("button").should("have.text", "Button with Dynamic ID");
  });
  it("CSS selector usin an atribute", () => {
    cy.get(`button[class="btn btn-primary"]`).should(
      "have.text",
      "Button with Dynamic ID"
    );
  });
  it("CSS selector usin a class", () => {
    cy.get(`.btn-primary`).should("have.text", "Button with Dynamic ID");
  });
});
