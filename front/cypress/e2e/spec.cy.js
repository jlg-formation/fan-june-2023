describe("template spec", () => {
  it("adds and removes an article", () => {
    cy.visit("http://localhost:9000");

    cy.contains("Gestion Stock");
    cy.contains("Mentions Légales");
    cy.contains("a", "Voir le stock").click();

    cy.get("a[title='Ajouter']").click();

    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const name = `outil-${id}`;

    cy.get("input").eq(0).clear().type(name);
    cy.get("input").eq(1).clear().type("1.23");
    cy.get("input").eq(2).clear().type("34");

    cy.contains("button", "Ajouter").click();

    cy.contains("tbody tr td", name).click();

    cy.get("button[title='Supprimer']").click();
  });
});
