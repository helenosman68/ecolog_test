describe ('Crear Usuaurop', function(){

    it ('Login', function(){
        cy.visit("https://ecolog.softdev.team/auth/login");
        cy.get('#email').type("ramses48@hotmail.com");
        cy.get('#password').type("ecolog2020");
        cy.get('.MuiButton-label').click();
    })

    it ('Perfil Actualizado', function(){
        cy.visit("https://ecolog.softdev.team/");

      cy.wait(5000);
      cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
      cy.wait(2000);
      cy.get('#fullName').clear();
      cy.get('#fullName').type("Ramses Emmanuel 49");
      cy.wait(2000);
      cy.get('#charge').clear();
      cy.get('#charge').type("Desarrollador Webtest");
      cy.wait(2000);
      cy.get('#companySelect').click();
      cy.wait(1000);
      cy.get('[data-value="IQOT263BSmTjZVehbErl"]').click();
      cy.wait(5000);
      cy.get('.jss823 > .MuiGrid-align-items-xs-center > .MuiButtonBase-root').click();
      cy.wait(5000);
      cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();
    })

    it ('Perfil anterior', function(){
      cy.get('#fullName').clear();
      cy.get('#fullName').type("Ramses Emmanuel 48");
      cy.wait(2000);
      cy.get('#charge').clear();
      cy.get('#charge').type("Desarrollador Web");
      cy.wait(5000);
      cy.get('.jss823 > .MuiGrid-align-items-xs-center > .MuiButtonBase-root').click();
      cy.wait(5000);
      cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();
    })

})
