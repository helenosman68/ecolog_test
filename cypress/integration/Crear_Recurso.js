describe ('Crear Usuaurop', function(){

    it ('Login', function(){
        cy.visit("https://ecolog.softdev.team/auth/login");
        cy.get('#email').type("ramses48@hotmail.com");
        cy.get('#password').type("ecolog2020");
        cy.get('.MuiButton-label').click();
    })

    it ('Recurso', function(){
      cy.wait(2000);
      cy.get('.MuiListItem-root-439').click();

    })

    it ('Crear Recurso', function(){
      // cy.wait(2000);
      // cy.get('.MuiGrid-justify-xs-center > .MuiButtonBase-root').click();
      // cy.wait(5000);
      // cy.get('.MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl');

      // var doc = Math.floor(Math.random()*(1-10000000+1)+10000000);
      // var correo = Math.floor(Math.random()*(1-10000+1)+10000);

    })
})
