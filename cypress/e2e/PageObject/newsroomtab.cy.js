class newsroom {
  contenthub(){
    cy.get("#module-contentHub").click()
  }
  newstab(){
    cy.get('li[ui-sref="app.newsroom"]').then((e)=>{
        let url=e.prop('href')
         cy.log(url);
         cy.visit("https://prgloo-dev-newsroom-itcrowd-01.azurewebsites.net/");
         
    })
    

  }


}
export default new newsroom()