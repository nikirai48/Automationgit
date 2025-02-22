class frame {
  content(){
    cy.get("#module-contentHub").click()
  }
  mouseover(){
    cy.get('.v4-tooltip--right').trigger('mouseover')
  }
  rightclick(){
    cy.get(".v4-card__body").first().rightclick()
  }
  new(){
    cy.get('.fabs > .button').click()
  }
  textbox(){
    cy.get('[ui-tinymce="vm.bodyOptions"]').click().type("Welcome {ctrl+a}");
  }
  bold(){
    cy.get(".mce-ico.mce-i-bold").click()
  }
  scroll(){
    cy.get('.selected').scrollIntoView()
  }


  
}
export default new frame()