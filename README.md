# GetSMSCodeNumbers

Check if getSMSCode has issued the same number to a different person. 

---------------------------------

## API Calls
### /check
#### Checks if number is in the database
##### Parameters
  * number : Number to check against the database
##### Returns
  * Returns a string with 3 possible error codes and a description of the result
### /register
#### Adds number to database
##### Parameters
  * number : Number to add to database
##### Returns
  * Returns a string with 3 possible error codes and a description of the result

## Error Codes
  * Code -1: Number does not have 86 at the front
  * Code 0: Number does not exist in database
  * Code 1: Number already exists in the database
-------------------

## Examples can be found as test.js and test2.js in the repository. 
------------------------
Currently being hosted on http://rycooks.com for Chinese phone numbers (must have 86 at the beginning) for Nike Accounts :)
