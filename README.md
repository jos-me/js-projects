# js-projects

This is the collection of all possible Javascript projects (from the internet) necessary to build my coding experience and problem solving skills.

## Table of Contents

- [Overview](#overview)
- [Projects](#projects)
  - [Counter App](#1-counter-app)
  - [Color Flipper](#2-color-flipper)
  - [Click to Copy](#3-click-to-copy)
  - [Accordion]()

## Overview

### Setting up the projects

All the project will be tested and the Javascript code will be executed in a browser enviroment. so,

- the basic knowledge of how browser work,
- HTML and CSS are essential.
- Also, I will be using Boostrap CSS framework for styling my pages.

#### Configuring JS, CSS and Bootstrap files

The project starter folder will have all neccessary setup for next project, it will comprise of...

- The `custom CSS` (not sure to be used everywhere) for specific project will be found inside 'css' folder of the specific project directory.

- The `Javascript` files will be found inside 'js' folder of the specific project directory.

The `minifies version of boostrap` will be found in a separate folder inside the main directory so to make it easy accessible to all project.

## Projects

### 1. Counter App

- This project is about creating a counter app that will increase, decrease or reset the counts following user interaction(Button clicking)

- Additionally, The color indicator will be used to show the count being positive or negative

![Screenshot](/%231-counter-app/counter-app.png?raw=true "counter App")

#### Key Learning Concepts

In this project I practices

- working with DOM
  - document.querySelectorAll()
  - document.querySelector()
  - addEventListener()
  - currentTarget property
  - textContent property
  - classList property
- working with high-order array method

  - forEach()

- working with conditional statement
  - if..else if.. else

### 2. Color Flipper

- In this project I learn how to create a random text and background color changer.

- With a single button press, this app will change the background color of a body and displaying name or hex value of corresponding color.

- Also, output will be represented as css declaration block

![Screenshot](/%232-color-flipper/color-flipper.png)

#### Key Learning Concepts

In this project I practices

- how to utilize button events (click) to connect to a function
- working with DOM
  - document.getElementById()
  - document.querySelector()
  - addEventListener()
- Adding CSS styles to an element
  - document.body.style.backgroundColor
  - textContent property
- Work with Math module and its methods
  - Math.floor()
  - Math.random()
- Working with arrays
  - array.length property

### 3. Click to Copy

- Here, I uses a browser APIs[navigator.clipboard.writeText] to copy a selected text to the clipboard when button is clicked.

#### Key Learning Concepts

In this project I practices

- working with navigator API

  - clipboard.writeText() method

- working with DOM
  - document.querySelector()
  - addEventListener()
  - access child or Siblings nodes

### 4. Accordion

Accordion is a one collapsible components useful for create FAQ section of any website. The Header section on user-events control the visibility of the body content

![screenshot](/%234-accordion/screenshot.png)

#### Key Learning Concepts

In this project I practices

- Working with DOM

  - Accessing Child or Sibling nodes
  - Adding Event listeners
  - window.matches()

- Working with Array methods
  - forEach()
