# Vision
#### Video Demo:  <URL HERE>
#### Description:
Project Vision is made on the theme of the to-do list, consisting single-page dynamic website which uses local storage for its data storage.

You may be wondering why I named this project "Vision". So, what do you mean by "Vision"? Vision is the ability to think about or plan the future with imagination or wisdom.

And that's what we do while we add tasks to our ToDo List,i.e. we plan our future with imagination.

Features of Project Vision:

Works on live gradient background :) Dynamic to-do-list :) Can add new entries :) Can delete old entries :) Remembers old entries and their status :) Uses local storage for storing user data :) Option for resetting to-do-list :) Uses local storage for storing user data :) Have a live clock :)

#### Technologies Used: local storage and JSON
While working on this project, I was thinking of making it without using backend... I wanted a standalone website without backend server that runs on client-side... So, I started thinking of ways to do that... As I am planning of making a to-do-list, I have to store the user data somewhere... That means I need some client-storage... After lots of googling, I got to learn about local storage...

What is localStorage used for?
The localStorage mechanism provides a type of web storage object that lets you store and retrieve data in the browser. You can store and access data without expiration; the data will be available even after a visitor closes your site. You'll normally access localStorage using JavaScript.

So, using local storage I can store user's data in their browser... And it will also be available if the user closes the browser or restart it;s system... Until the browser's history or cache is not cleared manually by the user... Finally, problem of storage is solved :)

I stored the user's to-do-list data in JSON Format... Firstly I got the details of task from user... Then stored the details in dictionary with task title and task status... Then stringified the dictionary using JSON's stringify function, assigned the unique id to stringified data and stored in local storage... And we're done with storage of data :)

Now, comes the showing of tasks to the user...

For that, I used a display() function which loops over all the unique ids and parse the JSON data stored with those ids, then updating that data on webpage using getElementById() method of Document object... Ignoring the NULL ones...

# Functions that this to-do-list supports:
#### Adding new task
For adding new tasks, I have used add() function, where I get the details of task from user... Then I store the details in dictionary with task title and task status... Then I stringify the dictionary using JSON's stringify function, assign the unique id to stringified data and store the data in local storage... And we're done with adding of new tasks :)
#### Updating the status of task
For updating the status of tasks, I have used check() function which get the unique id of that task and update it's data stored in local storage.
#### Deleting the old tasks
For deleting old tasks, I have used del() function which gets the unique id of that task and clears data of that task from local storage.

