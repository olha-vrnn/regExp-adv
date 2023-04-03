# regExp-adv
Creating a user list using RegExp.

The following functionality needs to be implemented:

1. When the "Add user" button is clicked, the addUser() function is triggered, which does the following:

  - Retrieves data from the fields and forms an object.
  - Pushes this object into an array.
  - Clears the inputs.
  - Triggers the render() function, which generates all the information in the table based on the array.

2. When you click on the "Delete" button, you launch the deleteUser() function which does the following:

  - Get the index of the row you clicked on.
  - Using this index, remove the element from the array.
  - Then rerun the render() function.

3. When clicking on the "Edit" button, the editUser() function is triggered which does the following:

  - Determine the index of the row that was clicked.
  - Retrieve the specific element (i.e., object) from the array based on this index.
  - Extract the data from the object and pass it to the form (i.e., as value of the inputs).
  - Save the current index in a variable called userIndex.

4. All form fields need to be validated before adding, namely:

  - Login: can be an English word with a capital or lowercase letter from 4 to 16 characters.
  - Password: can be letters, digits, underscore (_), dash (-) and period (.) from 4 to 16 characters.
  - Email: must contain @. All letters must be in English. 
