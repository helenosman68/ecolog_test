describe ('Crear Carpeta Aprendizaje', function(){

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

    // it ('Busqueda Carpeta', function(){
    //   cy.wait(2000);
    //   cy.get('.MuiInputBase-input').type("uni");
    //   cy.wait(2000);
    //   cy.get(':nth-child(3) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
    // })
    //
    // it ('Eliminar Carpeta', function(){
    //     cy.wait(2000);
    //     cy.get('.jss708').click();
    //     cy.wait(2000);
    //     cy.get('.MuiButton-textPrimary').click();
    //     cy.wait(2000);
    //     cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click()
    //     })

    // it ('Crear Aprendizaje', function(){
    //    var carpeta = Math.floor(Math.random()*(1-100000+1)+100000);
    //     cy.wait(2000);
    //     cy.get('.MuiGrid-justify-xs-center > .MuiButtonBase-root').click();
    //     cy.wait(1000);
    //     cy.get('#instructions').type("instuccion");
    //     cy.wait(1000);
    //     cy.get('.MuiInputBase-root > #name').type("nombre");
    //     cy.wait(1000);
    //     cy.get('.jss3926 > .MuiButtonBase-root').click();
    //     cy.wait(1000);
    //     cy.get('[aria-label="Sun Apr 05 2020"]').click();
    //     cy.wait(1000);
    //     cy.get('.DayPicker-Body > :nth-child(6) > [tabindex="-1"]').click();
    //     cy.wait(1000);
    //     cy.get('.MuiDialogActions-root > :nth-child(2)').click();
    //     cy.wait(1000);
    //     cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > :nth-child(1) > .MuiGrid-spacing-xs-2 > :nth-child(1) > .MuiButton-root').click();
    //     cy.wait(1000);
    //     cy.get('#url').type("url");
    //     cy.wait(1000);
    //     cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardContent-root > :nth-child(1) > :nth-child(2) > .MuiGrid-container.MuiGrid-grid-xs-12 > :nth-child(1)').type("pregunta")
    //     cy.get('.MuiGrid-justify-xs-center > .MuiList-root > :nth-child(1)').type("1")
    //     cy.get('.MuiGrid-justify-xs-center > .MuiList-root > :nth-child(2)').type("2")
    //     cy.get('#newAnswer').type("3");
    //     cy.wait(1000);
    //     cy.get('[for="check13"] > .MuiSvgIcon-root').click();
    //     cy.wait(1000);
    //     cy.get('  :nth-child(6) > .MuiPaper-root > .MuiCardContent-root > :nth-child(1) > .MuiGrid-spacing-xs-2 > :nth-child(1) > .MuiButton-root').click();
    //     cy.wait(1000);
    //     cy.get(':nth-child(2) > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .MuiIconButton-label > .jss4097').click();
    //     cy.wait(1000);
    //     cy.get('[type="submit"]').click();
    //     cy.wait(1000);
    //     cy.get('.MuiPaper-root > .MuiGrid-root > .MuiButtonBase-root').click();
    //
    //     })










})
