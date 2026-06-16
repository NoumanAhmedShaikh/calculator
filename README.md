#  Simple Calculator

A clean, dark-themed browser-based calculator built with HTML, CSS, and jQuery.

---

## 📁 Project Structure

```
calculator/
├── index.html    # Calculator markup and layout
├── style.css     # Dark theme styling and grid layout
└── script.js     # Button logic and expression evaluation (jQuery)
```

---

##  Features

- **Basic arithmetic** — Addition, subtraction, multiplication, and division
- **Clear button (C)** — Resets the display and expression
- **Error handling** — Shows a dismissible red alert banner if an invalid expression is entered
- **Smooth UI feedback** — Animated show/hide for the error message using jQuery

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Dark theme, grid layout, transitions |
| jQuery 3.7.1 (CDN) | DOM manipulation & button event handling |

---

##  How It Works

### Expression Building
Each number or operator button appends its `value` to a running `expression` string, which is displayed live in the result box.

### Evaluation
Pressing `=` runs `eval(expression)` to compute the result. On success, the result is shown and stored as the new expression base. On failure (e.g. incomplete expression), the red error message is displayed and the expression resets.

### Clear
Pressing `C` resets the expression to an empty string and sets the display back to `0`.

### Error Message
The `.msg` banner is hidden by default (`display: none` in CSS). It slides in on a bad `eval()` call and is dismissed by clicking the `x` button.

```js
$(".close").click(function () {
    $(".msg").hide(400);
});
```

---

##  Getting Started

1. Download or clone the project files.
2. Open `index.html` in any modern browser.
3. An internet connection is required on first load for the jQuery CDN.

> No build tools or installation needed — runs entirely in the browser.

---

##  Notes

- `eval()` is used for expression evaluation. This is safe here since all input comes from fixed buttons with controlled values.
- The layout uses `overflow: hidden` on `body`, so the calculator is fully contained within the viewport with no scrolling.
- The button grid is a 4-column CSS Grid, matching a standard calculator layout.

---

