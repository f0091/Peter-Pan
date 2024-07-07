describe("HTTP_requests", () => {
    let accessToken = "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";

    it("GET_Call", () => {
        cy.request('GET', 'https://api.github.com/repos/f0091/Amazon')
            .its('status')
            .should('equal', 200);
    });

    it("POST_Call", () => {
        cy.request({
            method: 'POST',
            url: 'https://api.github.com/user/repos',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Accept': 'application/vnd.github+json'
            },
            body: {
                "name": "Thor",
                "description": "Repository update"
            }
        }).then((resp) => {
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(201); // Checking if the repository creation was successful
            expect(resp.body).to.have.property('name', 'Thor');
            expect(resp.body).to.have.property('description', 'Repository update');
        });
    });
});
