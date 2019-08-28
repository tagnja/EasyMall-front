# EasyMall-Front Project Design

### Layout

![](CSS-Website-Layout.png)

Navigation Bar

```css
/* The navbar container */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Links - change color on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
```

Content

- 1-column (often used for mobile browsers)
- 2-column (often used for tablets and laptops)
- 3-column (only used for desktops)

equal 3-column

```css
/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other on smaller screens (600px wide or less) */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
```

Unequal Columns

```css
.column {
  float: left;
}

/* Left and right column */
.column.side {
  width: 25%;
}

/* Middle column */
.column.middle {
  width: 50%;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column.side, .column.middle {
    width: 100%;
  }
}
```



### Project Directory

- /src
  - /api
  - /asserts
    - /icon
    - /style
  - /common
    - Footer.vue
    - Nav.vue
    - Header.vue
  - /components
    - Button.vue
  - /page
    - /cart
    - /checkout
    - /product
    - /home
    - /login
    - /order
    - /search
    - /user
  - /router
    - index.js
  - /util
  - App.vue
  - main.js
- /static
  - /img
  - /js

### Components

- App Header
- App Nav
- App Main
  - Home Selected
  - Search Products
  - Product Details
  - Shopping Cart
  - User Center
- App Footer



### Code Process

- Build Vue project
- Integration
  - Add Vue Router <https://router.vuejs.org/>
  - Add Axios for API Call <https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html>
  - Add Mock API 
  - Add Unit Test https://vuejs.org/v2/cookbook/unit-testing-vue-components.html
- Implement Pages 



### References

[1] [CSS Website Layout - w3c schools](https://www.w3schools.com/css/css_website_layout.asp)