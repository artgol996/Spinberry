describe("Revved Wilds", () => {
    it ("Run the game ", () => {
        cy.visit("http://192.168.208.153:8000/?gameCode=Test&token=DEMO_PP_36c3b39c-11e9-4960-befc-f876624bd0ce&homeUrl=&rgsUrl=http://192.168.208.153:42509/Pariplay9&lang=EN&DebugMode=False&currencyCode=USD&ExtraData=networkId%3dPP&HideCoins=True&CoinsDefault=True")
        cy.viewport(1920,1080);
        cy.wait(60000);
        cy.realPress("Space"); 
        cy.wait(10000)

    }); 

    it ("Buy feature button is clickable ", () => {
        cy.get('._buy-feature-button').click();
        cy.wait(10000)

    });

    it ("The FREE SPINS OPTION AVALIABLE is 8, 10, 15 and price is changed for different free spins amount ", () => {
        cy.get(':nth-child(2) > .quantity > .display > :nth-child(1)').should("have.text", "8");
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$87.50");
        cy.get(':nth-child(2) > .quantity > :nth-child(3)').click();
        cy.get(':nth-child(2) > .quantity > .display > :nth-child(1)').should("have.text", "10");
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$4.50");
        cy.get(':nth-child(2) > .quantity > :nth-child(3)').click();
        cy.get(':nth-child(2) > .quantity > .display > :nth-child(1)').should("have.text", "15");
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$6.50");
        cy.get(':nth-child(2) > .quantity > :nth-child(3)').click();
        cy.get(':nth-child(2) > .quantity > .display > :nth-child(1)').should("have.text", "8");
        cy.wait(10000)

   });

   it ("The price is no more than 100 ", () => {
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$3.50");
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $0.10")
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$7.00")
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $0.20");
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$17.50");
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $0.50")
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$35.00")
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $1.00");
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$52.50");
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $1.50")
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$70.00");
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $2.00")
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$87.50");
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $2.50")
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.content > :nth-child(1) > .quantity > .display > :nth-child(1)').should("have.text", "$3.50");
        cy.get('._with-button > .item__title').should("have.text", "WITH BET $0.10")
        cy.wait(6000)

    });

    it ("The Buy Feature starts with 0.10 stake", () => {
        cy.get('.item__with-subtext > .button').should("be.visible").click({force: true})
        cy.get('.quantity > .display > .amount').should("have.text", "$0.10")
        cy.wait(7000)
    });
    
    it ("The Buy Feature pop- up is displayed ", () => {  
        cy.get('.banner__container').should("be.visible") 
        cy.wait(3000)
    });

    it ("The START button is clickable and run the Buy Feature ", () => {  
        cy.get(".button.button__primary").should("be.visible").click()
        cy.get('.double__info-box > :nth-child(1)').should("be.visible").should("have.text", "Free Spins")
        cy.wait(3000)
    });

    it ("The balance is decreased for the price amount($3.50)", () => {  
        cy.get('.balance').should("have.text", "BALANCE$999996.50")
        cy.wait(3000)
    
    });

    it ("The Buy Feature button is disable during the Buy Feature ", () => {  
        cy.get('._buy-feature-button').should("be.disabled")
        cy.wait(3000)
    });

    it ("The AUTO button is disable during the Buy Feature ", () => {  
        cy.get('.controls__autoplay > .button').should("be.disabled")
        cy.wait(3000)
    });

    it ("The '-' button is disable during the Buy Feature ", () => {  
        cy.get('.quantity > :nth-child(1)').should("be.disabled")
        cy.wait(3000)
    });

    it ("The '+' button is disable during the Buy Feature ", () => {  
        cy.get('.quantity > :nth-child(3)').should("be.disabled")
        cy.wait(3000)
    });

    it ("The 'Burger menu' button is enable during the Buy Feature ", () => {  
        cy.get('.menu__wrapper > .menu__controls > .hamburger').should("not.be.disabled").click() 
        cy.wait(3000)

    });

    it ("The 'Info' button is disable during the Buy Feature ", () => { 
        cy.get('._info').should("be.disabled");
       
    });

    it ("The 'Turbo' button is enable during the Buy Feature ", () => { 
        cy.get('.menu__wrapper > .menu__controls > :nth-child(4)').should("not.be.disabled");
    });

    it ("The 'Full Screen' button is enable during the Buy Feature ", () => { 
        cy.get('.menu__wrapper > .menu__controls > :nth-child(3)').should("not.be.disabled");
    });

    it ("The 'Settings' button is disable during the Buy Feature ", () => { 
        cy.get('.menu__wrapper > .menu__controls > :nth-child(6)').should("be.disabled");
    });
    
    it ("The 'Sound' button is enable during the Buy Feature ", () => { 
        cy.get('.menu__wrapper > .menu__controls > :nth-child(2)').should("not.be.disabled");
    });

    it ("The 'Exit' button is enable during the Buy Feature ", () => { 
        cy.get('.menu__wrapper > .menu__controls > .hamburger').should("not.be.disabled");
        cy.wait(60000)
    });

    it ("The stake amount remains unchanged when the price is scrolled and exit button is pressed", () => { 
        cy.get('._buy-feature-button').click();
        cy.get('.content > :nth-child(1) > .quantity > :nth-child(3)').click();
        cy.get('.popup__button-wrapper > .button').click();
        cy.get('.quantity > .display > .amount').should("have.text", "$0.10")
        
    });
});