Feature: form functionalities
    As a user
    I want to be able to use the form page
    So I can send different types of data
    
    Background:
      Given the user has browsed to the homepage
      Then user navigates to "Form"

    Scenario: check that landing page is correct
      Then user reads title "UI Testing Site"
      Then user sees "Form" button is active
