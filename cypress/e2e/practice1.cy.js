describe("radiobuttons",()=>{
    it("select function", ()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get('#zcf_address_country')
        .select('France')
        .should('have.value','France')
        cy.get('#searchInput[name="search"]').type('delhi')
    })

    cy.get('.exmaple>a').click()

}

)