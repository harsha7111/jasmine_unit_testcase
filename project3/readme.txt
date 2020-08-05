karma -- test runner
     tool to excute our test in automated way

1. create package.json 
   npm i init
2. install karma jasmine and jasmine matchers 
    npm i karma --save-dev
    npm i jasmine-core karma-jasmine --save-dev
    npm i karma-jasmine-matchers --save-dev
3. create karma.cnf.js
4. npm i puppeteer --save-dev   // chrome headless browser
5. npm i karma-chrome-launcher --save-dev   // plugin to integrate with chrome headless browser
---------for coverage report----------
6. npm i istanbul --save-dev 
7. npm i karma-cli --save-dev
8. npm i  karma-coverage --save-dev
-------------- TravisCI for continous integration--------------
 create a .travis.yml file
