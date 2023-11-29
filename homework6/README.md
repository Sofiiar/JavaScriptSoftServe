# Task 1: Update Div Element Content

## Description
The HTML page has a `div` element:

```html
<body>    
  <div id="test">First</div> 
</body>
```
You need to change the content of the element from First to Last. Access the item `<div>` in at least 2 ways.	 


# Task 2: Change Image Source and Display in Modal

## Description
There is an image element on the page :

```html
<body> 
    <img class="image" src ="dog.jpg"> 
</body> 
```

You need to change the dog image.jpg to cat.jpg . 
Display the contents of the `<img>`  tag with the new image in the modal window. 

# Task 3: Change content of the paragraphs

```html
<body> 
  <h2>Article header</h2> 
  <div id="text"> 
    <p>First paragraph</p> 
    <p>Second paragraph</p> 
    <p>Third paragraph</p> 
  </div> 
  <p>Another text</p> 
</body> 
```
On the specified HTML page, you need to get all the elements inside the `div` tag by selector (use the `document.querySelectorAll method`). 
And display their content with the paragraph number in the following format : 

```html
Selector text 0: First paragraph 
Selector text 1: Second paragraph 
Selector text 2: Third paragraph 
```

# Task 4: Create a modal window on an HTML page to display the content of a list in a specific order.

## Description

- The HTML page contains an unnumbered list with the id `list`.
- The list consists of 5 elements.
- In the modal window, display the list elements in the following order:
  1. First element of the list
  2. Last element of the list
  3. Second element of the list
  4. Fourth element of the list
  5. Third element of the list

## Example
```html
Example : 
1 
2 
3 
4 
5 

Output result : 1, 5, 2, 4, 3
```

# Task 5: Write a script that uses DOM tools to simplify the page

## Description

For the page 

```html
<body> 
  <h1>I'm a big header!!!</h1> 
  <div id="myDiv"> 
    <p>First paragraph</p> 
    <p>Second paragraph</p> 
    <p>Third paragraph</p> 
    <p>Fourth paragraph</p> 
  </div> 
  <ul id="myList"> 
    <li>Make</li> 
    <li>me</li> 
    <li> horizontal !</li> 
  </ul> 
  <span>Make me invisible, please!</span> 
</body> 
```

Write a script that uses DOM tools to simplify the page as shown below : 
![HTML expected output](homework6/images/Screenshot 2023-11-29 at 18.49.34.png)

# Task 6: Write prompted text into the inputs and swap the values

## Description
Given an HTML page : 
```html
<body> 
  <input type="text" id="input1" value="Text1"> 
  <input type="text" id="input2" value="Text2"> 
</body > 
```
1) The user alternately enters 2 messages (use `prompt()`). The 1st message is written to the 1st `<input>`, the 2nd – to the 2nd. 
2) Swap the values of the 1st and 2nd inputs. 

# Task 7: Create a structure of the tags for an empty HTML page

## Description 
Write a script that, with the help of DOM tools, will create the following structure of tags and their attributes for an empty HTML page.
```html
<body> 
  <main class= " mainClass check item " > 	 
    <div id="myDiv"> 
      <p>First paragraph</p> 
    </div> 
  </main>  
</body> 
```