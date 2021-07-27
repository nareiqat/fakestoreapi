# Decisions

To start with the challenge was enjoyable and I learned a lot. Building the UI was very straightforward as I have done similar projects in the past, I decided to go with material-UI as it has easy to use component
and the documentation is clear and provides examples to use. In this particular project I decided to go with functional components and use Hooks. As I prefer its implementation to save time and lines of code compared to class based components.

The parent file is App.js and state is housed there. I used 3 main components to build out my UI, the first is the SearchBar which essentially an input field from material UI with a search icon, the allows the user the type in the full title or part of the title they are searching for. The second is a Drawer, were I had the filters and sort. Drawer is also a material UI component that slides from the left to the right when clicked like some ecommerce sites. The last component is the Products were all the logic for sorting and filtering is.For the filter functions I used the high-order function  filter, using props passed down I compared the needed values for price and category to data from the api inorder to render the needed products either by category or price range. For sorting I implemented a typical sort function to compare the price of products to each other sort in ascending or descending. At last I mapped over the data stored in state which was fetched from api and displayed on the screen. The products component has a subcomponent product which renders each product into a material UI card component.

# Unit testing

Since i got this challenge at a time I wanted to learn unit testing I took the time to try and learn how to implement simple tests, I created snapshot tests for all components and Ui rendering test for App.js to make sure everything is running correctly. I believe this part was hard on me as I was learning it during the challenge and wanted to show my ability to learn while implementing previous knowledge!


# How to run

npm start or yarn start

# Challenges faced

I mostly faced challenge trying to make my filter and sort functions, even though I understood how to use filter it took me some trial and error to figure out the best way to put the algorithim together and relate props with the product data.

# I think I was given enough time for the junior level roles to create a simple and easy to use front-end design. If I had more time I think I am capable of tackling the senior level criteria that were mentioned in the challenge!

# Ways to improve the test

I love how the test gives people freedom to design as long as they implement whats needed in the criteria. I wouldn't changed it!


**Note: I created a file called example in the src folder that shows my understanding and ability to also create this project using class based components !**



