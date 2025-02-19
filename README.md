# Admin Ui

![Admin UI](image.png)

This is a user interface for admins to view and delete users. The interface retrieves user data from an API and provides various features to manage the user records. For more details about this task, visit [Admin UI Task](https://www.geektrust.com/coding/detailed/admin-ui).

## Features

- **Column Titles:** The column titles are prominently displayed to distinguish them from the user entries.
- **Search Bar:** A search bar is available to filter users based on any property.
- **Edit and Delete:** Users can be edited or deleted directly within the interface. Note that these changes are only in memory and not persisted.
- **Pagination:** Users are displayed in pages, with each page containing 10 rows. Pagination buttons allow easy navigation between pages, including options to jump to the first, previous, next, and last page. Pagination updates dynamically based on search and filtering results.
- **Row Selection:** Users can select one or more rows by clicking the checkboxes. Selected rows are highlighted with a grayish background color. Multiple selected rows can be deleted simultaneously using the "Delete Selected" button at the bottom left.
- **Select/Deselect All:** The checkbox at the top left corner provides a shortcut to select or deselect all rows displayed on the current page. It applies only to the 10 rows visible in the current page, not to all the rows.

## Tech Stack

The implementation of this user interface involves the following technologies:

- HTML
- CSS
- Tailwind CSS
- React
- React table
- Axios (for API communication)

## Installation

React-admin-ui is available from npm. You can install it (and its required dependencies)
using:

```sh
npm install react-admin
#or
yarn add react-admin
```

## Users API

To retrieve the list of users and their properties, an API is provided. Here are the details:

**Request Type:** GET

**Endpoint:** [https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json](https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json)

**Sample Response:**
```json
[
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
  },
  {
    "id": "2",
    "name": "Aishwarya Naik",
    "email": "aishwarya@mailinator.com",
    "role": "member"
  },
  {
    "id": "3",
    "name": "Arvind Kumar",
    "email": "arvind@mailinator.com",
    "role": "admin"
  }
]
