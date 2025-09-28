# Lab Assignment #2 – Node.js & Modules  

This project is part of **JavaScript Frameworks Lab #2**, focusing on **Node.js and module imports/exports**. The goal is to demonstrate how to separate utility functions into one file and use them in another file with **ES Module syntax**.  

## 📂 Project Structure
- **script1.js** → Entry file that imports and calls functions.  
- **script2.js** → Utilities file containing four functions.  
- **package.json** → Configured with `"type": "module"` to enable ES Modules.  

## ⚙️ Functions Implemented
1. **Intro** → Prints a welcome message (no return value).  
2. **toFahrenheit** → Converts Celsius to Fahrenheit and returns a numeric value.  
3. **square** → Returns the square of a given number.  
4. **maxOfTwo** → Returns the larger of two numbers.  

## ▶️ How to Run
Clone the repo and run the entry file using Node.js:  
```bash
node script1.js
Welcome to Georgian@Illac Mr Rana
36.68
number
25
6.25
10
9
Author

Saugat Rana
Kushal Gurung
