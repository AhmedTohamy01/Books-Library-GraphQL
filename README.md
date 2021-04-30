
<h1 align="center">
  <img title="Book Library" src="/public/img1.jpg" alt="React + GraphQL + Apollo" width="1000" />
  <br>
   React-GraphQL <br>Book Library
</h1>

<p><font size="3">
  This is a Full Stack Project built using these technologies in frontend <strong><em>React</em></strong>, <strong><em>GraphQL</em></strong>, <strong><em>Apollo</em></strong>, <strong><em>Material-UI</em></strong>, <strong><em>Styled-Components</em></strong>, <strong><em>Styled-Icons</em></strong> and using <strong><em>Express</em></strong>, <strong><em>MongoDB</em></strong> in backend.
  <br><br> 
	 This project consist of 2 repos, this repo is the frontend repo and here is the link of backend repo: https://github.com/AhmedTohamy01/GraphQL-Express-Server
  <br><br> 
The project is a Book Library where you can explore available books and know a detailed information about each book, you can also add a new book or a new author.
  <br><br> 
  <strong><em>Take a look at the live version here:</em></strong> https://countries-dashboard-sigma.vercel.app/ :octocat: :heart_eyes:

</p>


## Table of Contents

- [Project Walk-Through](#project-walk-through)
  - [Start Page](#start-page)
  - [Search Filter](#search-filter)
  - [Region Filter](#region-filter)
  - [Population Filter](#population-filter)
  - [All Filters Combined](#all-filters-combined)
  - [Clear Filters](#clear-filters)
 - [Live Demo](#live-demo)
- [Technology Used](#technology-used)
- [How To Use](#how-to-use)
- [Author](#author)


# Project Walk-Through

 # Start Page
 

<div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/start.png)
</div>


 In this page, all the filters are set to default state, where all countries are displayed on the screen without any filtration. 


 # Search Filter

In this page, there are 3 types of filtration 

***1) Search using Name Filter:***
The user can type any search term in the search field and all countries which have this search term in its name will display on the screen, the user doesn't need to click anything to search, it's all live search.

 <div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/search-1.png)
</div>

***1) Search using Capital Filter:***
The user can type any search term in the search field and all countries which have this search term in its capiatl name will display on the screen, the user doesn't need to click anything to search, it's all live search.

 <div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/search-2.png)
</div>

***1) Search using Langauge Filter:***
The user can type any search term in the search field and all countries which have this search term in its lanaguges will display on the screen, the user doesn't need to click anything to search, it's all live search.

 <div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/search-3.png)
</div>


 # Region Filter

The user can select any region and only the countries which exist in this region will be displayed on the screen. 

<div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/region.png)
</div>


 # Population Filter

The user can type any 2 numbers and only the countries which have population number between these 2 numbers will be displayed on the screen.


<div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/pop.png)
</div>

 # All Filters Combined

The user can combine the search, region, and population filters and use it all together. 

Example: if the user type "al" & used the Name Checkbox & select "Europe Region" & typed "1000" - "3000000" in the population fields  , he will get all countries which has "al" in their name & exist in "Europe" & has population between "1000" - "3000000".


<div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/all.png)
</div>

 # Clear Filters

The user can clear all filters and return it to the default state by click on one button which is "Clear Filters Button".


<div align="center"><a name="menu"></a>

![ScreenShot](/public/img/readme/clear.png)
</div>

# Live Demo

***Take a look on the live version here:*** https://countries-dashboard-sigma.vercel.app/ :octocat: :heart_eyes: 

# Technology Used

I have built this project using the following tools & techniques:
- React.JS
- React Hooks.
- useState.
- useContext.
- Compound Components.
- JSX.
- Material UI.
- VSCode.
- StandardJS


# How To Use

To be able to use this react app locally in a development environment you will need the following:

1) You will need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer.

2) Then From your terminal, you should do the following:

```cmd
# Clone this repository
git clone https://github.com/AhmedTohamy01/Countries-Dashboard

# Go into the repository
cd countries-dashboard

# Install dependencies
npm install 

# Run the app
npm run dev

```

4) Now you can see the project in your browser. 
Happy Hacking!


# Author

👤 **Ahmed Tohamy**
- Github: https://github.com/AhmedTohamy01
- Linkedin: https://www.linkedin.com/in/ATohamy
- Email: Ahmed-Tohamy@outlook.com
