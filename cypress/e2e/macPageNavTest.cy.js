import { products } from '../../data/products';

describe('Mac Page Product Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.chapternav-items').should('be.visible').log('Navigation menu loaded');
  });

  //this option is better in terms of performance, but it is less visual
  it('should verify all product navigation links', () => {
    products.forEach((item) => {
      cy.get('.chapternav-items')
        .find('.chapternav-item')
        .contains(item.label)
        .should('be.visible')
        .within(() => {
          cy.get('.chapternav-label')
            .parent()
            .should('have.attr', 'href', item.href)
            .and('have.attr', 'data-analytics-title', item.label.toLowerCase());

          if (item.hasNewTag) {
            cy.get('.chapternav-new').should('be.visible').and('have.text', 'New');
          } else {
            cy.get('.chapternav-new').should('not.exist');
          }
        });
    });
  });

  //the menu testing process becomes more visual. For every block "it" we run block "beforeEach" and we get problems with performance
  products.forEach((item) => {
    it(`should verify ${item.label} navigation link`, () => {
      cy.get('.chapternav-items')
        .find('.chapternav-item')
        .contains(item.label)
        .should('be.visible')
        .within(() => {
          cy.get('.chapternav-label')
            .parent()
            .should('have.attr', 'href', item.href)
            .and('have.attr', 'data-analytics-title', item.label.toLowerCase());

          if (item.hasNewTag) {
            cy.get('.chapternav-new').should('be.visible').and('have.text', 'New');
          } else {
            cy.get('.chapternav-new').should('not.exist');
          }
        });
    });
  });
});
