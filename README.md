# Jekyll starter template (I18n)

Basic template to quickly start projects with [Jekyll](https://jekyllrb.com/).

:white_check_mark: Compatible with Jekyll 3.8 & 4.0, and GitHub Pages  
:white_check_mark: Ready for internationalization  
:white_check_mark: Demo : https://jekyll-starter-template-i18n.netlify.app/

## Usage

1 - Download and extract the [ZIP archive](https://github.com/cyrilsuzat/jekyll-starter-template-i18n/archive/master.zip)  
2 - Rename the extracted folder and remove the README file  
3 - Install Jekyll and launch the server  

```
bundle install
bundle exec jekyll serve
```

4 - Browse to http://localhost:4000

## Updating Content

#### Things to keep in mind: 
The basic structure of the .yml files you will edit to update your site's content is a map or list and follows a hierarchy that depends on indentation see example below: 

Maps allow you to associate key-value pairs. Each key must be unique, and the order doesn't matter. A list includes values listed in a specific order and may contain any number of items needed. A list sequence starts with a dash (-) and a space, while indentation separates it from the parent.

In the example below "fruits" and "vegetables" are items that are part of the list named "food". "citrics", "tropics", "nuts", "sweets" are items that belong to the "fruits" list item. 

```
food: 
  - vegetables: tomatoes
  - fruits: 
      citrics: oranges 
      tropical: bananas
      nuts: peanuts
      sweets: raisins
```

### Locales folder - WEBSITES STATIC CONTENT
This folder contains your websites static content (non changing content e.g main page headers etc)
folder - "locales" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

#### Home Page
##### Slider Content 
To update the slider on the homepage, find the "slides" list in the "index" item and update the "slides" item . Each  -title (description, image) list represents a single slide, to create more slides, repeat the list for each additional slide item

```
index: 
    .
    .
    .
    slides:
        - title: "--enter a title for the image here --"
        description: "--enter the short caption for the image here --"
        image: "--enter the path to the image e.g /assets/images/slides/slide1.png ... here slide1.png is the image and has been saved in the "slides" folder in the images which is in the "assets" folder --"
        - title: " "
        description: " "
        image: " "
```

##### Accordion Content 
To update the accordion section on the homepage, find the "accordions" list in the "index" item and update the "title" list. Each  -title (description, image) list represents a single accordion, to create more accordions, repeat the list for each additional accordion

```
index: 
    .
    .
    .
    accordions:
    - title: --enter a title for the accordion, do not use quotation marks e.g SOUNDS IN CITIES --
      id: "--enter a unique id for the accordion button, make sure no other accordion button is using this id e.g home-accordion-1 --"
      description: "--enter the text that will be showed when the accordion is open--"
      image: "--enter the path for the image e.g /assets/images/accordions/home/1.png where image 1.png is in the home folder in the accordions folder in the images folder which is in the assets folder--"

    - title: --title text here no quotation marks--
      id: " "
      description: " "
      image: " "
```
### Blogs
folder - "blogs" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

```
title: "--enter a title for your blog post here--"
  location: "--enter a location for your blog post here e.g Plateau-Mont-Royal, Montreal, QC--"
  date: "--enter a season when the post was published here e.g Summer and Fall 2017--"
  image: "--enter a link for the blog's main image here e.g /assets/images/blog-archives/1.png - this means the image labelled 1.png is saved in the blog-archives folder which is in the images folder which is in the assets folder--"
  url: "--enter a unique tag that will be used for the blog's url identifier, this need to follow this format -> blog-1 - the 1 is the identifier for the post ... when entering the post, look at the previous posts identifier to figure out what your blog post's identifier will be. E.g if the previous post is blog-4 your next one should be blog-5 --"
  author: "--enter the names of the posts authors--"
  posted: "--enter the date when the plig is posted e.g May 5, 2021 --"
  name: "--enter a name for the blog section e.g TERRASSES ROY --"
  brief: "--enter the blogs contect here--"
  contact_info: "--enter your contact information or script here e.g For details, please contact: Daniel Steele, Catherine Guastavino --"
  prev_url: "--enter the url identifier of the blog that comes before your new post, if you blog post is the first post, leave this blank otherwise enter a post url e.g blog-1 if your blog is blog 2 --"
  next_url: "--enter the next blog's url e.g blog-3 if your blog is blog-2 --"
  link: "--enter a full url for an external link related to the blog e.g https://... --"
```
### Events
folder - "events" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

```
title: "--enter a title for your event here--"
  id: "--enter a unique id for the event here e.g event-5 - check that no other event exists with the same id --"
  location: "--enter a location for the event e.g Virtual event --"
  date: "--enter a date for the event e.g June 2-3, 2021, 8:30 to 12:30 --"
  language: "--enter the language the event is held in e.g French only --"
  about: "--enter the content text for the event ... use <br><br> tags to create paragraphs or breaks in the text --"
  link: "--enter a full url for an external link related to the event e.g https://... --"
```
### Media 

### Papers

### Projects

### Team 