Feature: website navigation and formats
    As a user
    I want to be able to navigate the landing page options and see correct formats
    So I can perform different actions
    
    Background:
      Given the user has browsed to the homepage
      
    @REQ-UI-01 @REQ-UI-02 @REQ-UI-04 @REQ-UI-09 @REQ-UI-10
    Scenario: check that landing page is correct
      Then user reads title "UI Testing Site"
      Then user sees "Home" button is active
      Then user sees company logo
      Then user sees "Welcome to the Docler Holding QA Department" with format "h1"
      Then user sees "This site is dedicated to perform some exercises and demonstrate automated web testing." with format "p"
	
	@REQ-UI-01 @REQ-UI-02 @REQ-UI-05 @REQ-UI-06
    Scenario: check that form page is correct
      When user navigates to "Form"
      Then user reads title "UI Testing Site"
      Then user sees "Form" button is active
      Then user sees company logo
       
	@REQ-UI-01 @REQ-UI-02 @REQ-UI-08
    Scenario: check that UI Testing redirects to Home
      When user navigates to "Form"
      Then user reads title "UI Testing Site"
      Then user sees "Form" button is active
      Then user sees company logo
      When user navigates to "UI Testing"
      Then user reads title "UI Testing Site"
      Then user sees "Home" button is active
      Then user sees company logo

	@REQ-UI-01 @REQ-UI-02 @REQ-UI-03 @REQ-UI-04 @REQ-UI-05 @REQ-UI-06
    Scenario: check that user can navigate back to Home
      When user navigates to "Form"
      Then user reads title "UI Testing Site"
      Then user sees "Form" button is active
      Then user sees company logo
      When user navigates to "Home"
      Then user reads title "UI Testing Site"
      Then user sees "Home" button is active
      Then user sees company logo
      
    @REQ-UI-07
    Scenario: check Error page behavior
      When user navigates to "Error"
      Then user gets "404" HTTP response code
  
            