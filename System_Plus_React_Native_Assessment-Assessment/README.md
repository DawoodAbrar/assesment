
# System Plus React Native Assessment

A repository to test and evaluate React Native candidates for SE (Software Engineer) position.

## Introduction :

**This branch has React Native related tasks. There is an app folder and it has a React Native project already initialised for you. Navigate to app/src and it has two folders design and data. You will implement design related tasks in design folder and api related tasks in data folder. Details are in the Readme.md files in these folders as well.
Remains the intellectual property of System Plus Pvt. Limited.**

You are supposed to create 3-4 screens in React-Native:

- Design Translation (Accuracy in design implementation is important !!)
  - Calendar Screen (Mandatory!)
    (Design provided to you through a link or design file developed in Figma, Adobe XD, or Zeplin etc.)
    https://www.figma.com/file/aYU9juJdCUW821g5B2Deu1/Untitled?node-id=0%3A1
  - Listings Screen (Optional!)
    (Design provided to you through a link or design file developed in Figma, Adobe XD, or Zeplin etc.)
    https://www.figma.com/file/aYU9juJdCUW821g5B2Deu1/Untitled?node-id=0%3A1
  - Design Understanding:
    Make sure to explore figma links provided to you. Contact us at the email provided below in case of any problem. Also please make sure you watch the prototype of these screens by pressing the play button in the top right corner when you open the figma links provided to you. You can double click an asset and export it using the options in export tab on the right column.
- API or Data Related Screens
  - Universities Screen
    (Open-ended design, API integration related tasks are mentioned below)
  - University Details Screen
    (open-ended design, API integration related tasks are mentioned below)

## Brief:

#### Design Tasks Brief:

1. For this task please navigate to folder app/src/design/ and you will be implementing the design provided to you, all by yourself without using any third party library except for native-base, and react-native-paper.
2. You will be provided with design files created in tools like Adobe XD, Figma or Zeplin etc. Or design links created in these design tools.  https://www.figma.com/file/aYU9juJdCUW821g5B2Deu1/Untitled?node-id=0%3A1
3. You will have to implement the design as accurately as possible in pure React Native without using any third party libraries except for native-base and react-native-paper.
4. Other design related tasks are open-ended and you can take whatever approach you want to design the rest.
5. You are required to design a total of 3-4 screens. Design of 1-2 screen is provided to you and rest of the screens are related to API related tasks mentioned below and are open-ended.
6. Feel free to contact us in case of any confusions.

#### Data & API Tasks Brief:

1. For this task, navigate to app/src/data and write all your code there.
2. For this task, you will have to use the APIs provided to you for each task.
   - http://universities.hipolabs.com/search?country=[MY_COUNTRY]&name=[UNIVERSITY_NAME]
   - https://nominatim.geocoding.ai/search.php?q=[MY_QUERY]
3. First API provides universities data according to the provided parameters. Country and university name are optional parameters. Calling http://universities.hipolabs.com/search will return all the universities in the world. It is difficult to handle such large data. So we will be implementing caching for our API Requests.
4. We will be using the universities data and show them on Universties Screen. We will have two fields in the top header on this screen,Country and Name. List items would change as we type in these fields. Use FlatList to show the university loaded through our API Requests. Use a Card type design with university details.
5. Whenever you click on the university item, it will take you to the University Details Screen. You will pass the relevant university data to Details Screen. And it will load all the geocoding data on mount and render its information on that page along with the university. In case of errors, both screens must show appropriate error message. Design of University Details Screen is also open-ended. Use cards and native-base layout to show the results.
6. You are only allowed to use react-navigation or react-native-navigation as a navigator only.
7. Make appropriate navigation options to test all the screens developed.
8. When I load the app again, it must show the cached data on Universities Screen and it must be updated when request is sent to the API and new data is loaded.
9. Make good use of API skills for these tasks.
10. All the state management will be done using Redux or Context API.

## Instructions:

1. In this Assessment you are free to choose the type of React Programming. Although we recommend you use a mix of both Class and functional components.

2. You are not allowed to push code to this repository. Therefore you are
   required to create a copy of this repository on your own account and work on it.
   Hint: Make good use of git clone, git fork, git plugins for vs code etc.

   https://docs.github.com/en/get-started/quickstart/fork-a-repo

   https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository

3. You are supposed to submit a compilable and runnable code of the solution.

4. Solution in txt files will not be accepted.

5. For this Assessment we are supposing that you have a react-native environment setup and node environment.
   https://reactnative.dev/docs/environment-setup

6. After you are done implementing a task, please add comments in the code file
   for clear understanding and add a Readme.md file if necessary.


11. Logical Problem solving is an open-ended programming exercise. Problem descriptions are
    provided and you are supposed to implement a solution. However, in design tasks you will have to strictly follow the styling & design provided.

12. In case of confusions, please contact at usama@systemplus.co
