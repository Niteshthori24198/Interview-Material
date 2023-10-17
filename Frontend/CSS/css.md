
## How can you select every alternate element in a list of elements using CSS?

-   You can use the **:nth-child(even)** and **:nth-child(odd)** pseudo-classes to select every even or odd element in a list, respectively.


### What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?

-   Resetting CSS aims to remove all default browser styles, providing a clean slate for styling. It sets styles like margins and padding to zero for all elements.

-   Normalizing CSS aims to make default styles consistent across different browsers without completely removing them.

-   The choice between resetting and normalizing depends on your project's needs. Resetting gives you full control but requires you to redefine styles for everything. Normalizing ensures consistent cross-browser rendering while retaining some default styles. The choice depends on your project's requirements and design goals.


### What does box-sizing: border-box do? What are its advantages?

-   The CSS rule * { box-sizing: border-box; } applies the "border-box" box-sizing model to all elements on the page. This means that an element's **padding and border** are included in its total width and height, making it easier to create consistent layouts.


### What are CSS preprocessors?

-   A CSS preprocessor is a scripting language that extends the capabilities of regular CSS (Cascading Style Sheets). It allows you to write more maintainable and efficient stylesheets by introducing features like variables, nesting, mixins, functions, and more. These features help streamline your CSS code and make it easier to manage and scale. The most popular CSS preprocessors include Sass (Syntactically Awesome Style Sheets), Less, and Stylus.