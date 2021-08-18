# TechDegree Project 7

TeamTreehouse Front-End Developer TechDegree Project 7

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdanpoynor.github.io%2Ftechdegree-project-07%2Fstyles.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)<br>
[W3C Markup Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdanpoynor.github.io%2Ftechdegree-project-07%2F)

## Table of contents

- [General info](#general-info)
- [Live Preview](#live-preview)
- [UX Screen Recording](#ux-screen-recording)
- [Mockup Comparison](#mockup-comparison)
- [Objectives](#objectives)
  - Grading Objectives
  - Exceeds Expectations Objectives
  - Additional Objectives
- [Lighthouse Scores](#lighthouse-scores)
- [Dependencies](#dependencies)
- [Technologies Used](#technologies-used)

---

## General info

Project completed as part of the Front End Web Development track at Treehouse. <br>More info: [https://teamtreehouse.com/tracks/front-end-web-development](https://teamtreehouse.com/tracks/front-end-web-development)

---

## Live Preview

[https://danpoynor.github.io/techdegree-project-07/](https://danpoynor.github.io/techdegree-project-07/)

---

## UX Screen Recording

https://user-images.githubusercontent.com/764270/134228376-76a55e78-39bc-46db-8bb9-26d4ee87a523.mp4

---

## Mockup Comparison

<details open>
<summary>Expand</summary>

![mockup comparison](https://user-images.githubusercontent.com/764270/133942054-f5c960d4-c7f5-46b0-a067-b6a90ae79af6.png)

</details>

---

## Objectives

<details>
<summary>Expand</summary>

### Grading Objectives

<details>
<summary>Expand</summary>

#### Mobile-first

- [x] The HTML file includes the viewport meta tag in the head of each document.
- [x] A mobile-first approach is utilized using `min-width` properties for media queries.
- [x] Appropriate media queries are in place and the content responds to mobile (320px), tablet (768px) and desktop (1024px) screen sizes.
- [x] Use CSS grid for layout of main elements (header, sidebar navigation, main content) on the page.

#### Header and Navigation

- [x] The navigation menu items have working links to the different sections that use ID's to link to relevant anchor tags.
- [x] General spacing and arrangement of the elements match the layouts in the mockups.

#### Alert Notifications

- [x] Includes alert banner that user can close.
- [x] Includes an alert icon in the header with a marker to notify the user of new alerts and messages.
- [x] Add a CSS transition or animation to the bell icon when the user hovers over it.

#### Chart Widgets

- [x] Successfully implements [chartjs.org](https://chartjs.org) for the charts:
  - [x] Web Traffic (line chart)
  - [x] Daily Traffic Bar Chart (bar chart)
  - [x] Mobile User Pie Chart (donut chart)
- [x] General spacing and arrangement of the elements matches the layout of the widgets in the mockup.

#### Social Network Information

- [x] Includes a widget (or three separate widgets) that display social network stats for three social networks.
- [x] SVG icons are added as inline SVGs.
- [x] SVG fill colors have been changed to match the mockups.
- [x] General spacing and arrangement of the elements match the layout of the widget in the mockup.

#### New Members and Recent Activity Listing

- [x] Includes a widget that lists out new members and displays an avatar, member name, email and join date for each member.
- [x] Includes a Recent Activity widget that displays an avatar, type of activity, and time since activity for each member.
- [x] General spacing and arrangement of the elements matches the layout of the widgets in the mockup.

#### Message User Widget

- [x] Implement a messaging widget that includes the following:
  - [x] A field for searching for a user. Real search functionality is not required.
  - [x] A message `textarea` field that lets a user add a message.
  - [x] A "Send" button that uses JS to allow a user to submit the form and display a confirmation the message was sent
  - [x] Uses JS to display error messages if both or either the user or message field is empty.
- [x] General spacing and arrangement of the elements matches the layout of the widget in the mockup.

#### Settings Widget

- [x] The settings widget has been created and displays the following settings options:
  - [x] An on/off widget for whether to send email notifications.
  - [x] An on/off widget for whether to set profile to public or private.
  - [x] A dropdown to select timezone options.
  - [x] Save and Cancel buttons (these do not have to do anything functional for "meets expectations").
- [x] General spacing and arrangement of the elements matches the layout of the widgets in the mockup.

</details>

### Exceeds Expectations Objectives

<details>
<summary>Expand</summary>

#### Alert Notifications 2

- [x] Displays at least two notifications at the same time when the user clicks the alerts icon (this could be a pop-up window or dropdown menu).

#### Chart Widget: Traffic chart widget

- [x] Includes navigation allowing user to switch between viewing an Hourly, Daily, and Weekly chart.
- [x] Hourly, Daily, Weekly and Monthly buttons display a different line chart on click.

#### Message User Widget 2

- [x] Displays working autocomplete search input field that lets the user search for members.

#### Settings Widget: Local storage

- [x] The settings are saved to local storage when the "Save" button is clicked.
- [x] The settings are reset when the "Cancel" button is clicked and all toggle switches and timezone settings go back to default values.
- [x] When page is reloaded the settings are remembered.

</details>

### Additional Objectives

<details>
<summary>Expand</summary>

- [x] Minimum use of `<div>` tags.
- [x] No use of `flexbox` for layout in favor of using `grid` layout instead.
- [x] Add 'Back to Top' link that scrolls to the top of the page plus returns focus to top of page when clicked.
- [x] Use HTML smooth scroll effect ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior), [caniuse](https://caniuse.com/css-scroll-behavior)).
- [x] Use CSS `inset` as shorthand for `top right body left` values on elements that have a `position` ([caniuse](https://caniuse.com/mdn-css_properties_inset)).
- [x] Use CSS custom properties (CSS variables) ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), [caniuse](https://caniuse.com/css-variables)).
- [x] Use HTML `<picture>` element for images ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture), [caniuse](https://caniuse.com/picture)), including WebP ([caniuse](https://caniuse.com/webp)) and AVIF ([caniuse](https://caniuse.com/avif)) images with JPEG fallbacks.

</details>

</details>

---

## Lighthouse Scores

Mobile
  
<img width="388" alt="lighthouse-mobile-scrores" src="https://user-images.githubusercontent.com/764270/134078592-aa1c1355-311a-44e7-a6da-18ae45dec83f.png">
  
Desktop

<img width="394" alt="lighthouse-desktop-scrores" src="https://user-images.githubusercontent.com/764270/134078620-750a21f8-fce7-4c3d-bdb3-42de505dbdba.png">

---

## Dependencies

- [chartjs.org](https://www.chartjs.org/docs/latest/) for line, bar, and donut charts

---

## Technologies Used

- Semantic HTML5 markup
- Vanilla CSS
- CSS Grid Layout
- Vanilla JavaScript
- Mobile-first workflow for Responsive Web Design (RWD)
- LocalStorage used to save dashboard settings
- User search input field with autocomplete
- SVG icons with transform animations
- JSON for mock user traffic data
- Webp, AVIF,and JPEG images in `<picture>` elements
- Best practices for modern 'evergreen' browsers
- Code validated by W3C to meet [HTML5](https://validator.w3.org/) and [CSS3](http://jigsaw.w3.org/css-validator/) standards

---

<div align="right">
  <a href="#techdegree-project-7">Back to top :point_up:</a>
</div>
