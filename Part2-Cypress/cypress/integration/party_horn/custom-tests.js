describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
});

// Test if the image and sound sources change when you select the party horn radio button
describe('Party Horn Tests -- walked through', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('change volume number', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75);
    })
  });

  it('change volume slider', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    })
  });

  it('check volume on input change', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33);
    })
  });
});



// describe('Test 3', () => {
//   beforeEach(() => {
//     cy.visit('http://127.0.0.1:5500/');
//   });

//   it('check volume on input change', () => {
//     cy.get('#volume-slider').invoke('val',33).trigger('input');
    
//     cy.get('#horn-sound').then($el => {
//       expect($el).to.have.prop('volume', 0.33);
//     })
//   });
// });


describe('Party horn tests -- implemented', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('check img and sound change after selecting radio button', () => {
    cy.get('#radio-party-horn').check();
    
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg");
    })
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    })

    cy.get('#radio-air-horn').check();
    
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', "./assets/media/audio/air-horn.mp3");
    })

    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/images/air-horn.svg");
    })

    cy.get('#radio-car-horn').check();
    
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', "./assets/media/audio/car-horn.mp3");
    })

    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/images/car.svg");
    })
  });

  it ('check if volume image changes when volume changes', ()=>{
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-0.svg");
    })
    cy.get('#volume-number').clear().type('20');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-1.svg");
    })
    cy.get('#volume-number').clear().type('35');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-2.svg");
    })
    cy.get('#volume-number').clear().type('80');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', "./assets/media/icons/volume-level-3.svg");
    })
    
  });

  it ('check honk button disabled when volume is string or empty', ()=>{
    cy.get('#volume-number').clear().type('test-str');
    cy.get('#honk-btn').then($el => {
      expect($el).to.be.disabled;
    })

    cy.get('#volume-number').invoke('val', '');
    cy.get('#honk-btn').then($el => {
      expect($el).to.be.disabled;
    })
  });

  it('check error message when volume out of range', ()=>{
    cy.get('#volume-number').clear().type('12');
    cy.get('#volume-number:invalid').should('not.exist');
    cy.get('#volume-number').clear().type('120');
    cy.get('#volume-number:invalid').should('exist');
  });
});
