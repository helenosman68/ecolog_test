describe ('Deshabilitar y Habilitar Usuario', function(){

    it ('Login', function(){
        cy.visit("https://ecolog.softdev.team/auth/login");
        cy.get('#email').type("ramses48@hotmail.com");
        cy.get('#password').type("ecolog2020");
        cy.get('.MuiButton-label').click();
    })
    it ('Usuarios', function(){
        cy.get('.MuiTypography-root-409')
        cy.get('.MuiListItem-root-381')
        cy.get('.MuiListItemIcon-root-392').click();
    })


    it ('Usuarios Búsqueda', function(){
        cy.get('.MuiInputBase-input').type("105943740");
        cy.wait(1000);
        cy.get(':nth-child(3) > .MuiButtonBase-root').dblclick();
        cy.wait(1000);
    })


    it ('Desabilitar Usuario ', function(){
      cy.wait(1000);
      cy.get('.jss2039').click();
      cy.get('.jss5757').check();
      cy.get('.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12 > .MuiButtonBase-root').click();
      cy.wait(1000);
      cy.get('.jss224 > .MuiButton-contained').click();
      cy.wait(1000);
    })

    it ('Habilitar Usuario ', function(){
      cy.wait(1000);
      cy.get('[style="margin: 5px; opacity: 0.4;"] > .MuiGrid-grid-xs-12 > .jss8875 > .MuiPaper-root > .jss8877').click();
      cy.get('.jss11418').uncheck();
      cy.get('.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-center.MuiGrid-grid-xs-12 > .MuiButtonBase-root').click();
      cy.wait(1000);
      cy.get('.jss224 > .MuiButton-contained').click();
      cy.wait(1000);
    })

})
