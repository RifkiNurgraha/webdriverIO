Feature: Login

    @test @desktop @critical @ID-02 @neg
    Scenario: User Failed Login without @ Email
        Given user at login page
        When User fill "email" "rifki.nurgraha171" at login page
            And User fill "password" "tokopedia789" at login page
            And User click "login" at login page
        Then user see "warning email message" at login page

    @test @desktop @critical @ID-04 @neg
    Scenario: User Failed Login with Blank Email
        Given user at login page
        When User fill "email" "" at login page
            And User fill "password" "tokopedia789" at login page
            And User click "login" at login page
        Then user see "warning email message" at login page

    @test @desktop @critical @ID-05 @neg
    Scenario: User Failed Login with Blank Password
        Given user at login page
        When User fill "email" "rifki.nurgraha171@gmail.com" at login page
            And User fill "password" "" at login page
            And User click "login" at login page
        Then user see "warning email message" at login page

    @test @desktop @critical @ID-06 @neg
    Scenario: User Failed Login with Invalid Email
        Given user at login page
        When User fill "email" "invalidemail@gmail.com" at login page
            And User fill "password" "tokopedia789" at login page
            And User click "login" at login page
        Then user see "warning message" at login page

    @test @desktop @critical @ID-03 @neg
    Scenario: User Failed Login with Invalid Password
        Given user at login page
        When User fill "email" "rifki.nurgraha171@gmail.com" at login page
            And User fill "password" "invalidPassword" at login page
            And User click "login" at login page
        Then user see "warning message" at login page

    @test @desktop @critical @ID-01
    Scenario: User Successfully Login with Email
        Given user at login page
        When User fill "email" "rifki.nurgraha171@gmail.com" at login page
            And User fill "password" "tokopedia789" at login page
            And User click "login" at login page
        Then user successfully login