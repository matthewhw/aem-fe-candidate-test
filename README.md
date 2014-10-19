Telegraph Media Group : UI Engineer Test
==============

Built with
--------------
A basic angular app styled with custom css and normalize.css to ease out quirks.

Decisions made
--------------
I would usually scaffold out using Yeoman with bootstrap but built this app structure up from scratch to illustrate understanding. App components loaded through bower and some helper gulp scripts written for development purposes. For the default styling I have tried to match against the current Telegraph site. 

Improvements
--------------
- Write tests
- Add a select input to choose different css styles
- Add a gulp build task that minifys and concats files and drops into the dist folder
- Add autoreload for changes to scss

To view
--------------
- git clone [https://github.com/matthewhw/aem-fe-candidate-test.git](https://github.com/matthewhw/aem-fe-candidate-test.git)
- npm install
- bower install
- gulp
- go to [http://localhost:8080/app](http://localhost:8080/app) 

Instructions
--------------

For this test you are required to build a HTML component using the JSON file in this repository ([data/test.json](data/test.json))

The component should be similar to the one shown in [example.png](example.png) though creativitity is encouraged.

* The component must be responsive
* The html should be able to be reused to display the component in various layouts using only css.
* The css should be wrote using [scss](http://sass-lang.com/) 

To return the completed test fork this repository and push your code to it.