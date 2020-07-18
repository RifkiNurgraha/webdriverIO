Feature: Login

    @test @desktop @critical @ID-01
    Scenario: User Successfully Login with Email
        Given user go to login page
        Then user at login page
        When User fill "username" "your_email@gmail.com" at login page
            And User fill "password" "your_password" at login page
            And User click "login" at login page
        Then user at main page "with login"

    @test @desktop @critical @ID-02
    Scenario: User Successfully Login with Username
        Given user go to login page
        Then user at login page
        When User fill "username" "pepi628" at login page
            And User fill "password" "your_password" at login page
            And User click "login" at login page
        Then user at main page "with login"

    @test @desktop @critical @ID-03
    Scenario: User Successfully Login with No Handphone
        Given user go to login page
        Then user at login page
        When User fill "username" "081312811208" at login page
            And User fill "password" "your_password" at login page
            And User click "login" at login page
        Then user at main page "with login"

    @test @desktop @critical @ID-04 @neg
    Scenario: User Failed Login with Invalid Username
        Given user go to login page
        Then user at login page
        When User fill "username" "invalidUsername" at login page
            And User fill "password" "your_password" at login page
            And User click "login" at login page
        Then user see "warning message" at login page

        @test @desktop @critical @ID-05 @neg
    Scenario: User Failed Login with Invalid Password
        Given user go to login page
        Then user at login page
        When User fill "username" "your_email@gmail.com" at login page
            And User fill "password" "invalidPassword" at login page
            And User click "login" at login page
        Then user see "warning message" at login page

    @test @desktop @critical @ID-06 @neg
    Scenario: User Failed Login with Blank Username
        Given user go to login page
        Then user at login page
        When User fill "username" "" at login page
            And User fill "password" "your_password" at login page
            And User click "login" at login page
        Then user see "warning message" at login page

    @test @desktop @critical @ID-07 @neg
    Scenario: User Failed Login with Blank Password
        Given user go to login page
        Then user at login page
        When User fill "username" "your_email@gmail.com" at login page
            And User fill "password" "" at login page
            And User click "login" at login page
        Then user see "warning message" at login page