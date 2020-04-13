describe ('testing ecolog', function(){

    it ('iniciar sesion', function(){
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
        cy.get('.MuiInputBase-input').type("108266322");
        cy.wait(5000);
        cy.get(':nth-child(3) > .MuiButtonBase-root').click();
        cy.wait(5000);
        cy.get('.jss2039').click();
    })

})
