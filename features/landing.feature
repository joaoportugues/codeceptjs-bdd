Feature: website navigation and formats
    As a user
    I want to be able to navigate the landing page options and see correct formats
    So I can perform different actions
    
    Background:
      Given the user has browsed to the homepage
      
    Scenario: check that landing page is correct
      Then user reads title "UI Testing Site"
      Then user sees company logo
      Then user sees "Welcome to the Docler Holding QA Department" with format "h1"
      Then user sees "This site is dedicated to perform some exercises and demonstrate automated web testing." with format "p"

    Scenario: check that form page pops up
      Then user navigates to "Form"
      Then user reads title "UI Testing Site"
      Then user sees "Form" button is active
      Then user sees company logo
       
    Scenario: check that error page pops up
      Then user reads title "UI Testing Site"
      
 	Scenario: check that error page pops up
      Then user reads title "UI Testing Site"