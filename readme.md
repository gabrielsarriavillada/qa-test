### Exercise 1
You can find the test cases written in plain English, following BDD philosophy, in the directory **BDD-test**. I have 
divided them in 2 files: **frontEndTestCases** and **backEndTestCases**.

I have assumed some functionality not specified in the requirements/design, based in common sense and my experience 
in the business.
### Exercise 2
I have created a structure of files with selectors and functions grouped by pages in the folder **src/page-object**, 
creating a POM that can be used to write the test.

Test cases can be found in **src/spec**. There is one file with file for login test coverage (**loginSpec.js**), and 
one file for the signup test coverage (**signUpSpec.js**).

Additionally, I have created a few functions that I am re-using during the implementation of the test cases. You can 
find them in the directory **src/utils**.

The result of the last run tests is available in a report generated in **test-report/report.html**. I have used 
`protractor-beautiful-reporter` to do that. This directory (and node_modules) has been included in **.gitignore**, so 
it is not available in the repository. So in order to check how report looks, I have added a **test-report-sample** 
with one of the reports generated once tests are run with `protractor conf.js`.
