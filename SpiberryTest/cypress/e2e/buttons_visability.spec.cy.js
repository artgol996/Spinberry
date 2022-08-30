describe("Revved Wilds", () => {
    
   it ("Buttons visability", () => {
        cy.visit("http://192.168.208.5:8000/?gameCode=Test&token=DEMO_PP_36c3b39c-11e9-4960-befc-f876624bd0ce&homeUrl=&rgsUrl=http://192.168.208.153:42509/Pariplay9&lang=EN&DebugMode=False&currencyCode=USD&ExtraData=networkId%3DPP&HideCoins=True&CoinsDefault=True")
        cy.viewport(1920,1080);
        cy.wait(60000);
        cy.realPress("Space"); 
        cy.get(".button.button__buy-feature").should("be.visible");
        //Buy feature button is visible 
        cy.get(".quantity.quantity__wrapper").should("be.visible");
        // Stake button is visible
        cy.get(".button.button__rounded-xl").should("be.visible");
        //Spin button is visible
        cy.get('.controls__autoplay > .button').should("be.visible");
        // Auto button is visible
        cy.get('.menu__wrapper > .menu__controls > .hamburger').should("be.visible");
        // Burger button is visible 
        cy.get('.win').should("be.visible");
        // Win amount is visible
        cy.get('.menu__wrapper > .menu__controls > .hamburger').click();
        // Click the Burger button
        cy.get('.menu__wrapper > .menu__controls > :nth-child(6)')
        // Settings button is visible
        cy.get('._info').should("be.visible");
        // Info button is visible
        cy.get('.menu__wrapper > .menu__controls > :nth-child(4)').should("be.visible");
        // Turbo button is visible
        cy.get('.menu__wrapper > .menu__controls > :nth-child(3)').should("be.visible");
        // Full screen button is visible
        cy.get('.menu__wrapper > .menu__controls > :nth-child(2)').should("be.visible");
        // Sound button is visible
        cy.get('.menu__wrapper > .menu__controls > .hamburger').should("be.visible");
        // Exit button is visible
    });
    

    it ("Buy feature", () => {
        cy.visit("http://192.168.208.5:8000/?gameCode=Test&token=DEMO_PP_36c3b39c-11e9-4960-befc-f876624bd0ce&homeUrl=&rgsUrl=http://192.168.208.153:42509/Pariplay9&lang=EN&DebugMode=False&currencyCode=USD&ExtraData=networkId%3DPP&HideCoins=True&CoinsDefault=True")
        cy.viewport(1920,1080);
        cy.wait(60000);
        cy.realPress("Space"); 
        cy.get(".button.button__buy-feature").click();
        cy.get(':nth-child(2) > .quantity > .display > :nth-child(1)').should("have.value", "8");

        //cy.get(':nth-child(2) > .quantity > :nth-child(3)')
    });
    
        
});




    

