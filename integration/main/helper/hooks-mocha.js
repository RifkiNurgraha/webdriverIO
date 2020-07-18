
afterEach(function () {
    //description
    allure.description(this.currentTest.body)
    //feature
    if(this.currentTest.title.includes("@GET")){
        allure.epic('API');
        allure.feature('API GET');
    }
    if(this.currentTest.title.includes("@POST")){
        allure.epic('API');
        allure.feature('API POST');
    }
    if(this.currentTest.title.includes("@UPDATE")){
        allure.epic('API');
        allure.feature('API UPDATE');
    }
    if(this.currentTest.title.includes("@DELETE")){
        allure.epic('API');
        allure.feature('API DELETE');
    }
    //severity
    if(this.currentTest.title.includes("@normal")){
        allure.severity('normal')
    }
    if(this.currentTest.title.includes("@critical")){
        allure.severity('critical')
    }
    if(this.currentTest.title.includes("@blocker")){
        allure.severity('blocker')
    }
    if(this.currentTest.title.includes("@minor")){
        allure.severity('minor')
    }
    if(this.currentTest.title.includes("@trivial")){
        allure.severity('trivial')
    }
});