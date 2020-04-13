describe ('Crear y Eliminar Carpeta Aprendizaje', function(){

    it ('Login', function(){
        cy.visit("https://ecolog.softdev.team/auth/login");
        cy.get('#email').type("ramses48@hotmail.com");
        cy.get('#password').type("ecolog2020");
        cy.get('.MuiButton-label').click();
    })

    it ('Aprendizaje', function(){
      cy.wait(2000);
      cy.get('.MuiListItem-root-537').click();
      cy.wait(2000);
    })

    it ('Crear Carpeta Aprendizaje', function(){
      cy.wait(2000);
      cy.get(':nth-child(4) > .MuiButtonBase-root').click();
      cy.wait(2000);
      cy.get('#name').type("test2");
      cy.get('.MuiButton-textPrimary').click();
      cy.wait(2000);
      cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();
    })

    it ('Busqueda Carpeta', function(){
      cy.wait(2000);
      cy.get('.MuiInputBase-input').type("test2");
      cy.wait(2000);
      cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
    })

    it ('Eliminar Carpeta', function(){
        cy.wait(5000);
        cy.get(':nth-child(1) > .jss708').click();
        cy.wait(2000);
        cy.get('.MuiButton-textPrimary > .MuiButton-label').click();
        cy.wait(2000);
        cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();
        })

})
