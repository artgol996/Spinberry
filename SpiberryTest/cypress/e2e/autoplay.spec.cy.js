describe("Revved Wilds", () => {
    it ("The game is loaded ", () => {
        cy.visit("http://192.168.208.153:8000/?gameCode=Test&token=DEMO_PP_36c3b39c-11e9-4960-befc-f876624bd0ce&homeUrl=&rgsUrl=http://192.168.208.153:42509/Pariplay9&lang=EN&DebugMode=False&currencyCode=USD&ExtraData=networkId%3dPP&HideCoins=True&CoinsDefault=True")
        cy.viewport(1920,1080);
        cy.wait(60000);
        cy.realPress("Space"); 
        cy.wait(10000)
    }); 


    it ("The Autoplay settings don't change when the 'Autoplay' pop-up is opened and closed ", () => {
        cy.get('.controls__autoplay > .button').should('be.visible').click();
        cy.wait(3000)
        cy.get('.button__primary').should('be.visible').click();
        cy.get('.autoplay__container > :nth-child(1) > .quantity > .display > :nth-child(1)').should('be.visible').should('have.text', '10')
    });

    it ("The amount of choosing autobets is correspod to the button's label", () => {
        cy.get('.controls__autoplay > .display > span').should('have.text', '9');
        

    });

    it ("Autoplay settings is saved when when the 'Exit' button is pressed ", () => {
        cy.wait(120000)
        cy.get('.error__controls > :nth-child(2)').should('be.visible').click();
        cy.get('.controls__autoplay > .button').should('be.visible').click();
        cy.get('.autoplay__container > :nth-child(1) > .quantity > :nth-child(3)').should('be.visible').click();
        cy.wait(5000)
        cy.get('.autoplay__container > :nth-child(1) > .quantity > .display > :nth-child(1)').should('be.visible').should('have.text', '20')
        cy.wait(5000)
        cy.get(':nth-child(2) > .quantity > :nth-child(3)').should('be.visible').click();
        cy.wait(5000)
        cy.get(':nth-child(2) > .quantity > .display > :nth-child(1)').should('be.visible').should('have.text', '$200.00')
        cy.wait(2000)
        cy.get(':nth-child(4) > .quantity > :nth-child(3)').should('be.visible').click();
        cy.wait(2000)
        cy.get(':nth-child(4) > .quantity > .display > :nth-child(1)').should('be.visible').should('have.text', '$200.00')
        cy.wait(2000)
        cy.get('._rounded').should('be.visible').click();
        cy.wait(2000)
        cy.get("input[type='checkbox']")

    });


});