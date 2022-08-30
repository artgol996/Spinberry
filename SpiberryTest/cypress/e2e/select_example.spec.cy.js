describe("Drop the Wilds start page", () => {
    
    it ("Run RGS2RGS", () => {

        cy.visit("https://hub-operator.pariplaydev.com/");
        cy.viewport(1920,1080);
        cy.get('#UserName').type("gbp");
        cy.get('#Password').type("gbp");
        cy.get('#OperatorUserName').type("t");
        cy.get('#OperatorPassword').type("t").type('{enter}');
        cy.get ('#vendors').select("Pariplay RGS2RGS");
        cy.get ('#games').select("Revved Wilds 91 / SB_HTML5_RevvedWilds91");
        cy.get ('#launch-btn').click();
        cy.wait(60000);
        cy.realPress("Space")

        

        
       // cy.wait(60000);
       //cy.trigger('keydown', {keyCode: 32, which: 32});
        //cy.wait(100000);
        //cy.type ('{space}')
       // cy.get('.button.button__slider-play.button__rounded-xl').should('be.visible').click();
        
        //cy.contains("#PLAY").realHover('mouse')
        //cy.get("space")
        //cy.xpath ('//html/body/div/div[1]/div/div[3]/button[2]').click();
                //cy.get('body').type('{space}')
        //cy.wait(60000).type('{space}');
          
        //cy.get('body').trigger('space', { keyCode: 32});
       // cy.wait(50000);
       // cy.get('body').trigger('keyup', { keyCode: 32});
        //cy.get('#root > div.slider > div > div.slider__controls-wrapper > button.button.button__slider-play.button__rounded-xl').click();
        
        
            
       
        //var e = new KeyboardEvent('keydown',{'keyCode':32,'which':32},{timeout: 60000});
        //cy.get ("button[class*='button__rounded-xl']").click();
        //cy.wait(60000).type('{space}');
       // сy.get ('[tabindex="-1"]', {timeout: 60000}).click();
       // cy.get("input[id='gameCode_flexselect']").type("Drop The Wilds 91 / SB_HTML5_DropTheWilds91").type('{enter}');
        //cy.get ('#userId').select("201, USD , Michael Salih");
        //cy.get ('#play-real-btn').click();
    });
});