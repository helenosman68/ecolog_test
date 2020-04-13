describe ('Crear Usuaurop', function(){

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

    it ('Crear Usuarios', function(){

      var doc = Math.floor(Math.random()*(1-10000000+1)+10000000);
      var correo = Math.floor(Math.random()*(1-10000+1)+10000);

        cy.get('.MuiButton-label').click();
        cy.get('#fullName').type("Alex Osman");
        cy.get('#userDocument').type("10" +  doc);
        cy.get('#email').type("helenn+" + correo + "@softdev.team");
        cy.get('#charge').type("conductor");
        cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click();
        cy.wait(1000);
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click();
        cy.wait(1000);
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get('#EPS').type("susalud");
        cy.get('#pensions').type("proteccion");
        cy.get('#layoffs').type("proteccion");
        cy.get('#ARL').type("suramericana");
        cy.get('#caja').type("comfama");
        cy.get(':nth-child(3) > .jss2728 > .MuiGrid-align-items-xs-center > .MuiFormControl-root > .MuiInputBase-root').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get('#allergies').type("ninguna");
        cy.get('#fullNameEmergency').type("Gloria Ramirez");
        cy.get(':nth-child(5) > .jss2728 > .MuiGrid-align-items-xs-center > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click();
        cy.wait(1000);
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get('#phoneEmergency').type("2175867");
        cy.get('.MuiGrid-grid-xs-12 > .MuiButtonBase-root').click();
        cy.wait(5000);
        cy.get('.jss224 > .MuiButton-contained').click();
    })
})
