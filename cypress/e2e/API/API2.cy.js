describe('API Testing - Login', () => {
    it('should successfully log in and return a token', () => {
      cy.request({
        method: 'POST',
        url: '',  // Change this to match your PR Manager login API endpoint
        body: {
          username: 'testuser',  // Replace with actual test credentials
          password: 'password123'
        }
      }).then((response) => {
        // ✅ Validate response status
        expect(response.status).to.eq(200);
  
        // ✅ Validate response structure
        expect(response.body).to.have.property('token');
  
        // ✅ Save the token for further tests
        Cypress.env('authToken', response.body.token);
      });
    });
  });
  