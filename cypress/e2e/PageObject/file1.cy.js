class file{
    content(){
        cy.get("#module-contentHub").click()
      }
    mouseover(){
        cy.get('button[data-tooltip="Contact PR Manager Support"]').realHover();

    }  
    resourcelibrary(){
        cy.get('.main-menu__middle.show .submenu__item:nth-child(3)')
  .click();

    }  
    newfile(){
        cy.get('.button__icon').click()
        cy.get('.v4-tooltip[data-tooltip="Upload file"]').click()

    }
    upload(){
        // Locate the input element by using the file type input selector
 cy.get('input[type="file"][ngf-select]').attachFile({filePath: 'butterfly.jpg' , fileName: 'oxford.jpg'});  // Attach the file from the fixtures folder and renaming it
cy.get('.button--primary[ng-click="vm.onUpload(vm.currentUploads)"]').click()
        //cy.get(".dropzone.dropzone--full").attachFile("image.png",{ subjectType: 'drag-n-drop' });
        //cy.get('input[type="file"][ngf-select]').attachFile(["butterfly.jpg","image.png"])




    }

back(){
    cy.go('back')
    cy.reload()
}

}

export default new file()