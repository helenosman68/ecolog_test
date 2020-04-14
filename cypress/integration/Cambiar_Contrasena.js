describe ('testing ecolog', function(){

    it ('iniciar sesion', function(){
        cy.visit("https://ecolog.softdev.team/auth/login");
        cy.get('#email').type("ramses48@hotmail.com");
        cy.get('#password').type("ecolog2020");
        cy.get('.MuiButton-label').click();
        cy.wait(1000);
    })

    it ('Cambio de Contraseña', function(){
      cy.visit("https://ecolog.softdev.team/");
      cy.wait(5000);
      cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
      cy.wait(2000);
      cy.get('#vertical-tab-1').click();
      cy.get('#currentPassword').type("ecolog2020");
      cy.wait(1000);
      cy.get('#newPassword').type("ecolog2021");
      cy.wait(1000);
      cy.get('#verifyNewPassword').type("ecolog2021");
      cy.wait(5000);
      cy.get('.MuiBox-root > form > :nth-child(1) > .MuiGrid-align-items-xs-center > .MuiButtonBase-root').click();
      cy.wait(5000);
      cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();

    })

    it ('Configuracion de contraseña anterior', function(){
      cy.wait(2000);
      cy.get('#email').type("ramses48@hotmail.com");
      cy.get('#password').type("ecolog2021");
      cy.wait(2000);
      cy.get('.MuiButtonBase-root').click();
      cy.wait(5000);
      cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
      cy.wait(2000);
      cy.get('#vertical-tab-1').click();
      cy.wait(2000);
      cy.get('#currentPassword').type("ecolog2021");
      cy.wait(1000);
      cy.get('#newPassword').type("ecolog2020");
      cy.wait(1000);
      cy.get('#verifyNewPassword').type("ecolog2020");
      cy.wait(5000);
      cy.get('.MuiBox-root > form > :nth-child(1) > .MuiGrid-align-items-xs-center > .MuiButtonBase-root').click();
      cy.wait(5000);
      cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();
    })

})
