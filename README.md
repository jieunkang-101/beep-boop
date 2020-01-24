# Beep Boop

#### A web application that returns a range of numbers with some exceptions based on the user inputted number, 24 January 2020

#### By **Jieun Kang**

## Description

This web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the exceptions. If the numbers contains a 1, 2, or 3, it will be replaced "Beep", "Boop", or "I'm sorry, Dave. I'm afraid I can't do that.". 

## Setup/Installation Requirements

1. Open Terminal and go to the Desktop directory `("cd desktop")`.
2. Clone this repository to your local machine `("git clone https://github.com/jieunkang-101/beep-boop")`.
3. Open cloned directory in Visual Studio Code or preferred text editor `("code .")`.
4. Open `index.html` in Chrome or preferred browser.
* _View working page at https://jieunkang-101.github.io/beep-boop

## Behavior Driven Development Specifications

| Behavior (Spec)                 | Input    | Output|
| :------------------------------ | :------- | :---- |
| **  The program returns a range of numbers from 0 to the users inputted numbe | 4 | "0", 1, 2, 3, 4 |
| ** If numbers that contain a "3", all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that" | 3 | "0", 1, 2, "I'm sorry, Dave. I'm afraid I can't do that" |
| ** If numbers that contain a "2", all digits are replaced with "Boop!" | "5" | "0", 1, "Boop!", "I'm sorry, Dave. I'm afraid I can't do that", 4, 5 |
| ** If numbers that contain a "1", all digits are replaced with "Beep!" | 13 | "0", "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that" |

## Technologies Used

* HTML
* CSS
* Bootstrap
* Javascript
* JQuery
* Git

### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang_**