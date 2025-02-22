// describe("HTTP Requests",()=>{


//     it("GET Call", ()=>{
//         cy.request('GET', 'https://reqres.in/api/users/2') //method,url
//         .its('status')
//         .should('equal', 200); //in get we dont send any body

//     })

//     it("Post Call", ()=>{ //Post is to create new record

//         cy.request( {
//                    method: 'POST',
//                     url: 'https://reqres.in/api/users',
//                     body:   {
//                             name: "morpheus",
//                             job: "leader"
//                            }
//                 } )
//         .its('status')
//         .should('equal', 201); //201 is created

//     })

//     it("Put Call",  ()=> //Put is to update the entire record
//         {
    
//             cy.request( {
//                         method: 'PUT',
//                         url: "https://reqres.in/api/users/2",
//                         body: {
//                             name: "morpheus",
//                             job: "zion resident"
//                          }
//                         } )    
//             .its('status')
//             .should('equal', 200);
//         })

//         it("Delete Call", ()=> //No bdy
//             {
//                  cy.request({  
//                              method: 'DELETE',
//                              url: "https://reqres.in/api/users/2"
//                     })
//              .its('status')
//              .should('equal', 204);
     
//             })    

//             it("Patch Call",  ()=> //Patch is to update the single entry
//             //in put if u pass only 1 entry rest will be deleted hence Patch is useful
//             {
        
//                 cy.request( {
//                             method: 'PATCH',
//                             url: "https://reqres.in/api/users/2",
//                             body: {
//                                 name: "morpheus",
                                
//                              }
//                             } )    
//                 .its('status')
//                 .should('equal', 200);
//             })    
        
// })