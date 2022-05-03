/// <reference types="cypress" />

context("Network Requests", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";

  it('comments returns 200 and 500 body length', () => {
    // https://on.cypress.io/request
    cy.request(`${baseUrl}/comments`).should((response) => {
      expect(response.status).to.eq(200);
      // the server sometimes gets an extra comment posted from another machine
      // which gets returned as 1 extra object
      expect(response.body).to.have.property('length').and.be.oneOf([500, 501]);
    });
  });

  it("Can create new user on /posts", () => {
    // resource will not be really updated on the server but it will be faked as if
    cy.request("POST", `${baseUrl}/posts`, {
        "userId": 11,
        "title": "Cypress Test",
        "body": "any body"
    })
      // note that the value here is the returned value of the request
      // which is the new post object
      .then((response) => {
        cy.log(response);
        // expect the response status to be 201
        expect(response.status).to.eq(201);
        // expect the response body to contain the title = "Cypress Test"
        expect(response.body).to.have.property('title', 'Cypress Test');
      });
  });

  it("Can update posts", async () => {
    // a PUT is used to update an existing entity
    //TODO what method should be used in cy.request()?
    const response = await cy.request("PUT", `${baseUrl}/posts/1`, {
      id: 1,
      userId: 11,
      title: "foo",
      body: "bar",
    })

      //TODO expect response.status to equal what status code?
      expect(response.status).to.eq(200);
      //TODO expect response.statusText to equal what string?
      expect(response.statusText).to.eq("OK");
      //TODO expect response.body to contain what title?
      expect(response.body).to.have.property('title', "foo");

  });
});
