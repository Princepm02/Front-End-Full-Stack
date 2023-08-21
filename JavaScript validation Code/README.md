# Registration Form Validation in JavaScript

This repository contains a simple HTML form for student registration with JavaScript-based client-side validation. The purpose of this code is to validate user inputs before submitting the form to ensure data integrity and accuracy.

## Getting Started

To use the registration form and validation script, follow these steps:

1. Clone the repository to your local machine or download the `main.html` and `right.html` files directly.

2. Open the `main.html` file in a web browser.

3. Fill out the registration form, and the validation script will check each field for correctness based on defined criteria.

4. If all fields pass validation, the form will be submitted to the `right.html` page, indicating a successful registration.

## Form Fields and Validation Criteria

The registration form consists of the following fields, each with its own validation criteria:

- **First Name:** Should contain at least 6 alphabetic characters.
- **Last Name:** Should contain only alphabetic characters.
- **Email Address:** Should be a valid email format (e.g., `user@example.com`).
- **Password:** Should contain at least 6 alphanumeric characters.
- **Address:** A mandatory text area for entering the user's address.
- **Mobile No:** Should contain exactly 10 numeric digits.
- **Gender:** Choose between male and female.

## Validation Functions

The validation script utilizes various JavaScript functions to validate form inputs. Here are the functions used:

- `notEmpty(elem, helperMsg)`: Checks if the input element is not empty.
- `isNumeric(elem, helperMsg)`: Validates if the input consists of only numeric digits.
- `isAlphabet(elem, helperMsg)`: Validates if the input consists of only alphabetic characters.
- `isAlphanumeric(elem, helperMsg)`: Validates if the input consists of only alphanumeric characters.
- `lengthRestriction(elem, min)`: Checks if the input meets a minimum length requirement.
- `emailValidator(elem, helperMsg)`: Validates if the input is a valid email address.
- `lengthRestriction1(elem, min, max)`: Checks if the input has a specific length range.

## Usage

The `formValidator()` function is called when the form is submitted. It sequentially validates each input field according to the defined criteria. If all validations pass, the form is submitted; otherwise, an alert message is displayed, and the focus is set on the first incorrect input.

Feel free to modify the validation criteria or extend the form as needed for your use case.

## Contributing

Contributions to this repository are welcome! If you find issues or want to enhance the form validation, please feel free to open pull requests or issues.

---

**Note:** This repository and its code are provided as-is for educational and illustrative purposes. The validation logic and practices demonstrated here might not cover all edge cases or security concerns. It's recommended to use established libraries and frameworks for more comprehensive and secure form validation.
