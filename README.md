### Step #1

node -v
npm -v

https://nodejs.org

### Step #2

npm init
(.gitignore)

### Step #3

npm install --save-dev jest

package.json:
"scripts": {
   "test": "jest"
 },

### Step #4

npm i @babel/core @babel/preset-env @babel/plugin-transform-modules-commonjs --save-dev

create file - .babelrc

{
 "env": {
   "test": {
     "plugins": ["@babel/plugin-transform-modules-commonjs"]
   }
 }
}

### Step #5

describe()
Defines a block of tests that groups related tests together.

it(), test()
Used to define a test and contains a block of code that performs a test functionality check.

expect()
Used to set the expected outcome of the test.

toBe()
Used to compare the expected and actual values.

toEqual()
Used to compare the expected and actual values for equality.

toBeTruthy()
Used to check that a value is true.

toBeFalsy()
Used to check that a value is false.

toContain()
Used to check that an array or string contains a specific value.

toThrow()
Used to check that a function throws an exception when called.

beforeEach()
Defines a block of code that will be executed before each test.

afterEach()
Defines a block of code that will be executed after each test.







