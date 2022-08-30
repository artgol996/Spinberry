

describe("Revved Wilds", () => {
    it ("The game is loaded ", () => {
        cy.visit("http://192.168.208.153:8000/?gameCode=Test&token=DEMO_PP_36c3b39c-11e9-4960-befc-f876624bd0ce&homeUrl=&rgsUrl=http://192.168.208.153:42509/Pariplay9&lang=EN&DebugMode=False&currencyCode=USD&ExtraData=networkId%3dPP&HideCoins=True&CoinsDefault=True")
        cy.viewport(1920,1080);
        cy.wait(60000);
        cy.realPress("Space"); 
        cy.wait(10000)

    });

    it ("The Feature Spin Button is visible and clickable ", () => {
        cy.get('._feature-spin-button').should("be.visible").click ()

    });
    
    it ("The Burger Menu button is avalable during Feature Spins ", () => {
        cy.get('.menu__wrapper > .menu__controls > .hamburger').should("not.be.disabled").click();


    });

    it ("The SETTINGS button is avalable during Feature Spins ", () => {
        cy.get('.menu__wrapper > .menu__controls > :nth-child(6)').should("not.be.disabled").click();
        cy.get('.tabs').should('be.visible');
        cy.get('._active').should('be.visible').should('have.text','SETTINGS');
        cy.get('.tabs__list > :nth-child(2)').should('be.visible').should('have.text','LANGUAGE');
        
        cy.get(':nth-child(1) > .settings__title').should('be.visible').should('have.text','Turbo');
        cy.get(':nth-child(3) > .settings__title').should('be.visible').should('have.text','Music');
        cy.get(':nth-child(4) > .settings__title').should('be.visible').should('have.text','Sound');
        cy.get(':nth-child(6) > .settings__title').should('be.visible').should('have.text','Gamble');
        cy.get(':nth-child(7) > .settings__title').should('be.visible').should('have.text','Bet Chance');
        cy.get(':nth-child(9) > .settings__title').should('be.visible').should('have.text','Left hand mode');
        cy.get(':nth-child(10) > .settings__title').should('be.visible').should('have.text','Spacebar to spin');
        cy.get(':nth-child(1) > .checkbox > ._rounded').should("be.visible");
        cy.get(':nth-child(3) > .checkbox > ._rounded').should("be.visible");
        cy.get(':nth-child(4) > .checkbox > ._rounded').should("be.visible");
        cy.get(':nth-child(6) > .checkbox > ._rounded').should("be.visible");
        cy.get(':nth-child(7) > .checkbox > ._rounded').should("be.visible");
        cy.get(':nth-child(9) > .checkbox > ._rounded').should("be.visible");
        cy.get(':nth-child(10) > .checkbox > ._rounded').should("be.visible");
        cy.get('.popup__button-wrapper > .button').click();

        
    });

    it ("The INFO button is avalable during Feature Spins ", () => {
        cy.get('._info').should("not.be.disabled").click();



    });

    it ("The TURBO button is avalable during Feature Spins ", () => {
        cy.get('.menu__wrapper > .menu__controls > :nth-child(4)').should("not.be.disabled")


    });

    it ("The FULL SCREEN button is avalable during Feature Spins ", () => {
        cy.get('.menu__wrapper > .menu__controls > :nth-child(3)').should("not.be.disabled")

    });

    it ("The SOUND button is avalable during Feature Spins ", () => {
        cy.get('.menu__wrapper > .menu__controls > :nth-child(2)').should("not.be.disabled")


    });

    it ("The EXIT button is avalable during Feature Spins ", () => {
        cy.get('.menu__wrapper > .menu__controls > .hamburger').should("not.be.disabled")


    });

    it ("The BUY FEATURE button is disable during Feature Spins ", () => {
        cy.get('._buy-feature-button').should('be.disabled')
    });

    it ("The FEATURE SPIN button is disable during Feature Spins ", () => {
        cy.get('._feature-spin-button').should('not.be.disabled')
    });

    it ("The '-' button is enable during the Buy Feature ", () => {  
        cy.get('.quantity > :nth-child(1)').should("not.be.disabled")
        cy.wait(3000)
    });

    it ("The '+' button is enable during the Buy Feature ", () => {  
        cy.get('.quantity > :nth-child(3)').should("not.be.disabled")
        
    });

    it ("The AUTO button is enable during the Buy Feature ", () => {  
        cy.get('.controls__autoplay > .button').should("not.be.disabled")
       
    });

    it ("The AUTO button is enable during the Buy Feature ", () => {  
        cy.get('.button__rounded-xl').should("not.be.disabled")
       
    });

    it ("The Game logo is displayed during the Buy Feature ", () => { 
        cy.get('.logo > img').should('be.visible')
    });

    it ("The WIN meter is displayed during the Buy Feature ", () => { 
        cy.get('.win').should('be.visible')
    });

    it ("The WIN meter is displayed during the Buy Feature ", () => { 
        cy.get('.win').should('be.visible')
    });

    it ("The CREDIT meter is displayed during the Buy Feature ", () => { 
        cy.get('.balance').should('be.visible')
    });



});













