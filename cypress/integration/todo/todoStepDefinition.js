/***************************Given Block************************/
Given('The user visits the todo app in a browser', () => {
    cy.visit("https://todomvc.com/examples/angular2/");
});

Given('User adds {string} todo item in the list', (todoCount) => {
    for (let i = 1; i <= todoCount; i++) {
        cy.get('input[placeholder="What needs to be done?"]').should('be.visible').type('todo' + i).type('{enter}');
    }

});

Given('There are {string} items in the todo list', (todoCount) => {
    cy.visit("https://todomvc.com/examples/angular2/");
    for (let i = 1; i <= todoCount; i++) {
        cy.get('input[placeholder="What needs to be done?"]').should('be.visible').type('todo' + i).type('{enter}');
    }
});

/************************When Block************************/

When('User hovers over a todoItem and clicks on red cross', () => {
    cy.get('.destroy').invoke('show').last().click();
});

When('User check marks a todo item', () => {

    cy.get(':nth-child(1) > .view > .toggle').click();
});

When('Clicks on Clear completed',()=>{
    cy.get('.clear-completed').should('be.visible').click();
});

When('User presses enter without text in the what needs to be done textbox',()=>{
    cy.get('input[placeholder="What needs to be done?"]').type('{enter}');
});

When('User edits the first todo item to {string}',(todoText)=>{
    cy.get(':nth-child(1) > .view > label').should('be.visible').dblclick();
    if(todoText===""){
        cy.get('.edit').type('{selectall}').type('{del}').type('{enter}');
    }
    else{
        cy.get('.edit').type('{selectall}').type('{del}').type(todoText).type('{enter}');
    }
    
});

When('User refreshes the URL',()=>{
    cy.reload();
})

/*********************************Then Block**************************************/
Then('The title and header of the page should be displayed', () => {
    cy.title().should('eq', 'Angular2 • TodoMVC');
    cy.contains('todos').should('be.visible');
});

Then('The todo count should be {string}', (todoCount) => {
    cy.get('.todo-list > li').should(($lis) => expect($lis).to.have.length(todoCount));
    cy.get('.todo-count').find('strong').should('be.visible').should('contain', todoCount);
});

Then('The todo item should be striked Off and todoCount should show {string} items left', (todoCount) => {
    cy.get('.completed > .view > label').should('be.visible');
    cy.get('.todo-count').find('strong').should('be.visible').should('contain', todoCount);
});

Then('Todo item should not be created',()=>{
    cy.get('.todo-list > li').should('not.exist');
});

Then('The value in first todo item should be {string}',(todoText)=>{
    cy.get(':nth-child(1) > .view > label').should('be.visible').should('contain',todoText);
});

Then('Todo item list should not change',()=>{
    cy.get(':nth-child(1) > .view > label').should('contain','todo1');
    cy.get(':nth-child(2) > .view > label').should('contain','todo2');
});