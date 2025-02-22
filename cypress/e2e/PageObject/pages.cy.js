class pages {
    statement() {
        cy.get("li.submenu__item")
          .should("exist")
          .contains("span", "Statements")
          .click();
      }
    number(){
        let allPage;
        cy.get(".results-header").then((e) =>{
            let newtext =e.text();
            allPage = newtext.substring((newtext.indexOf(">")+1),newtext.indexOf("results")-1)
            cy.log("allPage:" +allPage)
        }
    )
        
        
        }
    navigatepage(){
        let allPage=1 //if allpage is 3 and p>0 it goes upto 4 pages and if p>1 it goes upto 3 pages
        for(let p=1;p<=allPage;p++){
            if(p>1){
                cy.log("Active page===>" +p)
                cy.get('li.v4-pagination__item.button.v4-tooltip.v4-tooltip--bottom[data-tooltip="Next page"]').click()

            }
        }
    }    
    rowsnumber(){
        cy.get("ul.list-view.list-view--v4.edit li.v4-card.animate-repeat").should("have.length",50)
    }    

    readallrows(){
        cy.get("ul.list-view.list-view--v4.edit li.v4-card.animate-repeat")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                
            }

            )
        }

    )
    }
    
        
    


}
export default new pages()