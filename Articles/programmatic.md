# How was Programmatic created?

<br/>

 As you might know, Programmatic is a non-profit organization created teach kids how to code. In this short article, however, we're going to tell you about the process we took to set up this organization.

<br/>

## The Idea


We always wanted to explore the possibilities in computer science. As such, in our freshman year of high school, we all volunteered at a company that specializes in teaching kids how to code. However, after our first year, we saw that the company didn't offer courses and resources on many of the things that we deemed important, so we decided to start our own non-profit, naming it Programmatic. The name came from combining the words programming and problematic.


<br/>

## Setting Up Programmatics.org

<br/>

After we came up with a name and idea, we started to set up the organization. One of the main tasks we focused on was the website. We used GitHub as our source control as well as our hosting (taking advantage of the Github Pages feature) and started programming it using HTML, CSS, and JavaScript. We used libraries and frameworks such as Bootstrap to help speed up certain formatting and boilerplating in our CSS. Our website is open source, and the source code can be found [here](https://github.com/Programmaticteams/Programmatics).
   
   <br/>

1. Main page:
   The main page is the first page that people see when they go to our website; essentially the homepage. It has a menu in the center and a cool animation that occurs when you hover over menu items. The animation is composed of an image that moves up as you hover over a menu item, as well as the menu items and a gradient that goes down as you hover over the those items. We used JavaScript as our client-side programming language to get all the items in the menu and put them into an array. Then, whenever an item is hovered over, we assigned that item data's active index to the item position in the array. Finally, we used CSS to complete the animation.
   
   <br/>

2. About page:
   The about us page was the easiest to make because it's composed only of text and images; in other words, no fancy animations or graphics. First, we put a background image over the entire page. Then we put an HTML division tag (div) with a black background color and low opacity over the page to increase the text readability. Lastly, We just added a div that holds the text.

      
   <br/>

3. Our Team page:
   Our team page was the hardest to make because they contain animated picture cards. The cards are composed of a picture and a name, which, when hovered over, a description and a learn more button appears. The cards were made entirely using HTML and CSS and then positioned using Bootstrap so that the cards automatically realign when the screen size changes instead of scaling. We animated the cards so that the picture dissapears while text and a button rotate into position when the card is hovered over, with the button redirecting to a portfolio/resume page, providing more information about us. 

      
   <br/>

4. Enroll page:
   The enrollment page also took a lot of work because of similar cards. Unlike our team page, the enroll page has more cards than you can fit into one row and also need to be easily changed so we can add more courses in the future. We used Bootstrap to make sure the cards won't scale when the screen size changes and then used multiple media queries in CSS so that the cards will be in the right place when the screen size changes.
      
   <br/>

5. Bio pages:
   There are three bio pages, each redirecting to a different porfolio/resume page for each of the founders (us), and you get there by clicking the aformentioned buttons from the "Our Team" page. These were somewhat difficult to design but were easily replicated afterward for each of the three founders.

   
   <br/>

There were many errors along the way, but we eventually got everything to work. After we finished the main part of the website, we got a domain name and set it up with GitHub pages. We also made Google forms to collect information from people who wanted to sign up for our classes, and customized out our bio pages.

<br/>
<br/>

### Setting Up Articles

<br/>

After we got a domain, we started to work on the articles page. The idea was that we could publish and display our own articles for people who wanted to learn something new, but did not want to take our classes. The articles would be programming/computer science oreinted, and teach skills like working with Python & Raspberry Pi, and so on. Incidentally, this is the page that you are currently on.

The Articles page was possibly one of the most difficult pages to create. Among other things, we had to figure out how to import articles from an Articles directory onto the Articles page, render the articles on the page, and then display a list of articles on the sidebar that allowed visiters to click on each of the articles in turn. The first problem we tackled was filling in the side navigation bar. We played with the idea of dynamically retrieving the file names and adding them to the side navbar using JavaScript, however, we ran into many middleware/CORS issues, and decided, instead, to manually modify the sidebar everytime a new article was added.

The more difficult task was fetching and then rendering the articles on the page. We decided to use markdown files to store our articles, as warkdown files are uniquely created to be formatted into HTML. We also took advantage of a library called "Marked" to render these files. Now that we could render the markdown files, we needed a way to know which file to render when a user clicked on an article in the sidebar. To do this, we first created a default page, called the Home Page, which you probably have already seen. Next, we put the list of articles in the sidebar into anchor tags that contained Hypertext Reference tags (href) which store the article tags. Now that the list in the sidebars were hyper links, we used JavaScript to prevent default redirect action when the hyper links were clicked, and instead, fetched the article by the article path, and fed the contents into the Marked module to be formatted and rendered. 

