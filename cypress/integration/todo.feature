Feature: As a user of the todo app, I should be able to add, edit, delete and mark todo items as complete.

    # 6 Positive Scenarios are listed below

    Scenario: Check user's access to the todo app
        Given The user visits the todo app in a browser
        Then The title and header of the page should be displayed

    Scenario: Add a todo item
        Given The user visits the todo app in a browser
        And User adds "2" todo item in the list
        Then The todo count should be "2"

    Scenario: Deleting a todo item
        Given There are "3" items in the todo list
        When User hovers over a todoItem and clicks on red cross
        Then The todo count should be "2"

    Scenario: Marking a todo item complete
        Given There are "3" items in the todo list
        When User check marks a todo item
        Then The todo item should be striked Off and todoCount should show "2" items left

    Scenario: Clear completed items
        Given There are "4" items in the todo list
        When User check marks a todo item
        And Clicks on Clear completed
        Then The todo count should be "3"

    Scenario: Editing a todo item
        Given There are "2" items in the todo list
        When User edits the first todo item to "editedValueOf-todoItem"
        Then The value in first todo item should be "editedValueOf-todoItem"

    # 04 Negative scenarios are listed below
    Scenario: Blank todo item should not be created
        Given The user visits the todo app in a browser
        When User presses enter without text in the what needs to be done textbox
        Then Todo item should not be created

    Scenario: Replacing an existing todo item text with blank value
        Given There are "1" items in the todo list
        When User edits the first todo item to ""
        Then Todo item should not be created

    Scenario: Refreshing the URL after adding the todo items
        Given There are "2" items in the todo list
        When User refreshes the URL
        Then Todo item list should not change

    Scenario: Refreshing the URL after editing a todo item
       Given There are "2" items in the todo list
        When User edits the first todo item to "editedValueOf-todoItem"
        And User refreshes the URL
        Then The value in first todo item should be "editedValueOf-todoItem"