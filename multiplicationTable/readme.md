## Daily Coding problem 2
---
### This problem was asked by Apple.
Suppose you have a multiplication table that is N by N. That is, a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed) or i * j (if 1-indexed).
Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.
For example, given N = 6 and X = 12, you should return 4, since there are 4 12's in the table.

___

#### Brute force method
All we really need to do to brute force this is create a table dynamically. Then while each value is being added to the table we can check to see if it is equal to the supplied x value. By the time the table has been created we know the amount of times x has been counted inside of it. 
