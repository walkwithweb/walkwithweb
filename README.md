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

### Locales folder - WEBSITE'S STATIC CONTENT
This folder contains your websites static content (non changing content e.g main page headers etc)
folder - "locales" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

#### Home Page
##### Slider Content 
To update the slider on the homepage, in the "locales" folder, find the "slides" list in the "index" item and update the "slides" item . Each  -title (description, image) list represents a single slide, to create more slides, repeat the list for each additional slide item

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
To update the accordion section on the homepage, in the "locales" folder, find the "accordions" list in the "index" item and update the "title" list. Each  -title (description, image) list represents a single accordion, to create more accordions, repeat the list for each additional accordion

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

#### Soundscape Page
##### Audio Player Content 
To update the audio player on the soundscape page, in the "locales" folder, find the "p1" list in the "soundscape" item and update the "url" item . Each  -url (id, name, credits, album) list represents a single audio item, to create more items, repeat the list for each additional audio item

```
soundscape:
  .
  .
  .
  p1:
    - url: "--enter the path to where the audio file is saved e.g /assets/audios/SoundFile1_SoundscapePage_TamTamMontRoyal.mp3 --"
      id: "--enter a unique id for the audio player item e.g audio-1 --"
      name: "--enter a display title for the audio e.g Tam-tams in Mount Royal Park: A Montreal soundmark --"
      credits: "--enter the credits e.g Mariana Mejia Ahrens, 2019 --"
      album: "-- enter the subtitle for the audio file e.g Recorded around the George-Étienne Cartier Monument --"

    - url: " "
      id: " "
      name: " "
      credits: " "
      album: " "
```

#### Soundscape Cards Content 
To update the cards on the soundscape page, in the "locales" folder, find the "list2" item in the "cards" item and update the "id" item . Each  -id (img src, subtitle, description) list represents a single card item, to create more cards, repeat the list for each additional item

```
soundscape:
    .
    .
    .
    cards:
        .
        .
        .
        list2:
            - id: --enter a number, needs to be consecutive, check previous items in the list are not using the number, no quotation marks e.g 6 --
                img_src: '--enter a path to the image e.g /assets/images/soundscape principles/6-mockup-creditPetersenStudio.png --'
                subtitle: '--enter a subtitle for the section eg. SOUND LEVELS CAPTURE ONLY PART OF THE STORY --'
                description: '--enter the section's text --'

            - id: --enter a number no quotation marks--
                img_src: ' '
                subtitle: ' '
                description: ' '

```

#### Soundscape Steps Content 
To update the steps 1, 2, 3, 4 on the soundscape page, in the "locales" folder, find the "steps" item in the "soundscape" item and update the "id" item . Each  -id (title) list represents a single step, to create more steps, repeat the list for each additional item

```
soundscape:
  .
  .
  .
  steps:
    - id: --enter a number, no quotation marks--
        title: '--enter the text for the step e.g 1 in 5 people are highly annoyed with noise. --'
    - id: 2
        title: ''
    - id: 3
        title: ''
    - id: 4
        title: ''

```

##### Partners Page Content 
To update the partner's page, in the "locales" folder, find the "accordions" list in the "index" item and update the "title" list. Update the links list in the partners, organizations, or funding sections. Each "name" represents a link item

```
locales:
    .
    .
    .
    partners:
        title: "PARTNERS & FUNDINGS"
        city:
            title: "City of Montreal"
            links:
                - name: "--enter the link's text here e.g Ville-Marie borough, Inspection --"
                    language: "--enter the language the content in the link is available in e.g (in French only) --"
                    url: "--enter a full url e.g https://... if no url use a # symbol or remove the url item if the listing is not a link --"
                - name: "--enter the link's text--"
                    language: " "
                    url: "#"
    organization:
        title: "Organizations"
        links:
            - name: "--enter the link's text here --"
                url: "--enter a full url e.g https://... --"
            - name: "--For items that are not links, do not add a "url" item to the list add only the name item e.g ARUP"
            - name: ""
                url: ""
    funding:
        title: "Funding"
        links:
            - name: "--enter the title here--"
            - name: " "
                url: "#"
```

##### Accordion Content 
To update the accordion section on the homepage, in the "locales" folder, find the "accordions" list in the "index" item and update the "title" list. Each  -title (description, image) list represents a single accordion, to create more accordions, repeat the list for each additional accordion

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