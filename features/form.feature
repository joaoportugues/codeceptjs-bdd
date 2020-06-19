Feature: form functionalities
    As a user
    I want to be able to use the form page
    So I can send different types of data
    
    Background:
      Given the user has browsed to the homepage
      Then user navigates to "Form"
      
	@REQ-UI-01 @REQ-UI-02 @REQ-UI-05 @REQ-UI-06 @REQ-UI-11 @REQ-UI-12
    Scenario Outline: check that user can submit and read data in the Form page
      Then user reads title "UI Testing Site"
      Then user sees "Form" button is active
      Then user sees company logo
      Then user sees "1" element of type "input box"
      Then user sees "1" element of type "SUBMIT"
      When user types "<value>" and click submit
      Then user has greeting "<result>"
      Then user reads title "UI Testing Site"
      Then user sees company logo
      
	  Examples:
      |value   |result         |
      |John    |Hello John!    |
      |Sophia  |Hello Sophia!  |
      |Charlie |Hello Charlie! |
      |Emily   |Hello Emily!   |

