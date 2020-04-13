describe ('testing ecolog', function(){

    it ('iniciar sesion', function(){
        cy.visit("https://ecolog.softdev.team/auth/login");
        cy.get('#email').type("ramses48@hotmail.com");
        cy.get('#password').type("ecolog2020");
        cy.get('.MuiButton-label').click();
    })

    it ('Cerrar sesion', function(){
      cy.wait(5000);
      cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
      cy.wait(1000);
      cy.get('#vertical-tab-3 > .MuiTab-wrapper').click();
      cy.wait(1000);
      cy.get('.MuiButton-textPrimary > .MuiButton-label').click();
    })

})
