import React from 'react'
import { mount } from 'cypress/react18'
import { ListItem } from '../../src/ListItem';

describe('<ListItem />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<ListItem />)
  });

  it('add todo', () => {
    cy.visit('http://localhost:3000')
    cy.get('#add-todo').type(`Lorem ipsum`);
    cy.get('Enter').click()
    cy.get('list-item').contains(`Lorem ipsum`)
  });

  it('move todo to done', () => {
    cy.get('list-item').type(`Lorem ipsum`)
    cy.get('list-item li:first-child input[type="checkbox"]').check()
    cy.get('list-item').contains(`Lorem ipsum`)
  })
})



 

 

