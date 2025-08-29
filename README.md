Q-01: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer 01:
01. To work with a single element, we use getElementById.
02. When we want to apply the same function or action on multiple elements at once, we use getElementsByClassName.
03. querySelector selects the first element that matches the given value.
04. querySelectorAll selects all elements that match the given tag or class.

Q-02: How do you create and insert a new element into the DOM?
Answer 02:
#To create and add a new element in the DOM, three steps are needed:
1. Create an element using document.createElement().
2. Add content using innerHTML or innerText.
3. Finally, use appendChild() to insert the new element inside the parent element.

Q-03: What is Event Bubbling and how does it work?
Answer 03:
Event Bubbling means when an event occurs on an element, it first runs that element’s event handler, then goes up to the parent, then to the parent’s parent, and continues like this until it reaches the root.

Q-04: What is Event Delegation in JavaScript? Why is it useful?
Answer 04:
Instead of adding separate event listeners to each child element, we add one event listener to the parent element and handle the child events using event bubbling. This process is called Event Delegation.

Q-05: What is the difference between preventDefault() and stopPropagation() methods?
Answer 05:
1. preventDefault() stops the default action of an element (like stopping form submission).
2. stopPropagation() prevents the event from bubbling up to parent elements.
