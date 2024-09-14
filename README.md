# Quick Links 
- [Jekyll Installation Instructions](#readme-ov-file#jekyll-starter-template-i18n) 
- [How to Update Content](#updating-content)
- [Locales Folder - Static Page Content](#locales-folder---websites-static-content)
    - [Home Page](#home-page)
    - [Soundscape Page](#soundscape-page)
    - [Partners Page](#partners-page-content)
    - [Services Page](#services-content)
    - [Contact Page](#contact-page-content)
- [Blogs Page](#blogs)
- [Events Page](#events)
- [Media Page](#media)
-   [Videos](#videos-update)
-   [Articles](#articles-update)
-   [Audio](#audio-update)
- [Papers Page](#papers)
- [Projects Page](#projects)
- [Team](#team)
    - [Members](#members-content)
    - [Alumni](#alumni-content)
    - [Collaborators](#collaborators-content)

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

## Updating Content [Back to top](#quick-links)

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

### Locales folder - WEBSITE'S STATIC CONTENT [Back to top](#quick-links)
This folder contains your websites static content (non changing content e.g main page headers etc)
folder - "locales" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

#### Home Page [Back to top](#quick-links)
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
      id: "--enter a unique id for the accordion button, make sure no other accordion button is using this id and user no spaces e.g home-accordion-1 --"
      description: "--enter the text that will be showed when the accordion is open--"
      image: "--enter the path for the image e.g /assets/images/accordions/home/1.png where image 1.png is in the home folder in the accordions folder in the images folder which is in the assets folder--"

    - title: --title text here no quotation marks--
      id: " "
      description: " "
      image: " "
```

#### Soundscape Page [Back to top](#quick-links)
##### Audio Player Content 
To update the audio player on the soundscape page, in the "locales" folder, find the "p1" list in the "soundscape" item and update the "url" item . Each  -url (id, name, credits, album) list represents a single audio item, to create more items, repeat the list for each additional audio item

```
soundscape:
  .
  .
  .
  p1:
    - url: "--enter the path to where the audio file is saved e.g /assets/audios/SoundFile1_SoundscapePage_TamTamMontRoyal.mp3 --"
      id: "--enter a unique id for the audio player item, no spaces e.g audio-1 --"
      name: "--enter a display title for the audio e.g Tam-tams in Mount Royal Park: A Montreal soundmark --"
      credits: "--enter the credits e.g Mariana Mejia Ahrens, 2019 --"
      album: "-- enter the subtitle for the audio file e.g Recorded around the George-Étienne Cartier Monument --"

    - url: " "
      id: " "
      name: " "
      credits: " "
      album: " "
```

##### Soundscape Cards Content 
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

##### Soundscape Steps Content 
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

##### Partners Page Content [Back to top](#quick-links)
To update the partner's page, in the "locales" folder, find the "accordions" list in the "index" item and update the "title" list. Update the links list in the partners, organizations, or funding items. Each "name" represents a list item in that section

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

##### Services Content [Back to top](#quick-links)
To update the services page, in the "locales" folder, find the "services" list update the "list" list. Each  -info (image, alt) list represents a single service, to create more services, repeat the list for each additional service

```
services:
  .
  .
  .
  list:
    - info: "--enter the text for the service here --"
      image: "--enter the path to the where the image icon is saved e.g /assets/images/icons/files-contained.svg --"
      alt: "--enter the alt text for the image e.g service-1 --"
      
    - info: " "
      image: " "
      alt: " "
```

##### Services Slider Content 
To update the services page slider, in the "locales" folder, find the "slides" list update the "title" list. Each  -title (description, image) list represents a single slide, to create more slides, repeat the list for each additional slide

```
services:
  .
  .
  .
  slides:
    - title: "--enter the image's title e.g COVID-19 and c --"
      description: "--enter the caption for the slide e.g Getting a taste of the quiet we thought we wanted --"
      image: "--enter a path to where the image has been saved e.g /assets/images/slides/slide1.png --"
    - title: " "
      description: " "
      image: " "
```

##### Services Accordion Content 
To update the services page accordion, in the "locales" folder, find the "services" list update the "accordions" list. Each  -name (id, points, name) list represents a single accordion item, to create more accordions, repeat the -name list for each additional accordion. To add to the list add more -name: items to the points item

```
services:
  .
  .
  .
  accordions:
    - name: "--enter a title for the accordion button e.g Research methods --"
      id: "--enter a unique one word id, no spaces for the section e.g research --"
      points:
        - name: "--enter a list item ... use the <br> tag in your text to break the list item into a new line --"
        - name: "--enter a list item --"
    - name: "--enter a title for the accordion button e.g Workshops --"
      id: "--enter a unique one word id, no spaces for the section e.g workshops --"
      points:
        - name: " "
        - name: " "
        - name: " "
```

##### Contact Page Content [Back to top](#quick-links)
To update the contact page, in the "locales" folder, find the "contact" list update the "members" list. Each  -name (role, email) list represents a single team member, to create more members, repeat the -name list for each additional person. To add to the list add more -name: items to the points item

```
contact:
  title: "Contact"
  telephone: "Telephone"
  team:
    title: "TEAM MEMBERS"
    members:
      - name: "--enter the team member's name e.g Catherine Guastavino --"
        role: "--enter the person's role e.g Principal Investigator --"
        email: "--enter the person's email e.g catherine.guastavino@mcgill.ca --"
        phone: "--enter the person's phone number e.g 514-398-1709 --"
      - name: " "
        role: " "
        email: " "
  contact:
    title: "Noise Regulation Database"
    links:
      - name: "To contribute to the noise regulation database, please send your documentation to"
      - name: "--enter the display for the link e.g catherine.guastavino@mcgill.ca --"
        url: "--enter a full link to a url e.g https://... --"
  address:
    title: "MAILING ADDRESS"
    location:
      - name: "School of Information Studies McGill University"
      - name: "3661 Peel Street,"
      - name: "Montreal, QC (Canada) H3A 1X1"
```

### Blogs [Back to top](#quick-links)
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

### Events [Back to top](#quick-links)
folder - "events" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

```
title: "--enter a title for your event here--"
  id: "--enter a unique id, no spaces for the event here e.g event-5 - check that no other event exists with the same id --"
  location: "--enter a location for the event e.g Virtual event --"
  date: "--enter a date for the event e.g June 2-3, 2021, 8:30 to 12:30 --"
  language: "--enter the language the event is held in e.g French only --"
  about: "--enter the content text for the event ... use <br><br> tags to create paragraphs or breaks in the text --"
  link: "--enter a full url for an external link related to the event e.g https://... --"
```

### Media [Back to top](#quick-links)
folder - "media" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

#### Videos update 
To update the videos section, in the "media" folder, find the "video" list update the "data" list. Each  -url (title, description, date) list represents a single video, to create more videos, repeat the -url list for each additional video. 

```
video:
  title: "VIDEOS"
  data:
    - url: "--enter the full link to the video e.g https://... --"
      title: "--enter the title for the video e.g Presentation of the Sounds in the City research partnership --"
      description: "--enter the caption for the video --"
      date: "--enter the posted date e.g 2019, May 14 --"
    - url: " "
      title: " "
      description: " "
      date: " "
```

#### Articles update
To update the articles section, in the "media" folder, find the "article" list update the "data" list. Each  -title (location, date, author) list represents a single article, to create more articles, repeat the -title list for each additional article. 

```
article:
  title: "ARTICLES"
  read: "READ"
  author: "AUTHOR"
  data:
    - title: --enter the title e.g Etudier les nuisances sonores pour améliorer la qualité de vie--
      location: --enter the location e.g Journal Métro --
      date: --enter the date e.g 2020, December 10 --
      author: '--enter the article's author e.g Machillot. C --'
      link: '--enter the full link to read the article e.g https://... --'
    - title: ' '
      date: ' '
      author: ' '
      link: ' '
```

#### Audio update
To update the audio section, in the "media" folder, find the "audio" list update the "data" list. Each  -url (id, name, credits, album) list represents a single audio file, to create more items, repeat the -url list for each additional item. 

```
audio:
  title: "AUDIO"
  data:
    - url: "--enter the file path where the sound file is stored e.g /assets/audios/1.mp3 --"
      id: "--enter a unique id for the file, no spaces e.g audio-1 --"
      name: "--enter a title e.g Sounds of A busy road --"
      credits: "--enter the credits e.g V. Fraisse, 2023. --"
      album: "--enter the album details e.f Le Plateau, Mont Royal, Montréal. --"
    - url: " "
      id: " "
      name: " "
      credits: " "
      album: " "
```

### Papers [Back to top](#quick-links)
folder - "papers" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

To create a paper section create a main level -title item each -title item will have the following items id, data. 

To list papers inside this new section create a -title list in the data item. Each title list will have the following items description, date,link containing a url and name, and authors containing a list of names for each author

To add another paper to this same section, add another title list to the data item 

```
- title: "--enter a title for the section e.g Sounds in the City --"
  id: '--enter a unique id with no spaces e.g sound_in_the_city --'
  data:
    - title: "--enter a title for the first paper in the Sounds in the City section e.f Sounds in the City: bridging the gaps from research to practice through soundscape workshops --"
      description: "--enter a description e.g. Journal of Urban Design, 201 --"
      date: "--enter a date e.g 2020-12-10 --"
      link:
        url: "--enter a full link to the paper e.g https://... --"
        name: "--enter the doi number e.g 10.1080/13574809.2019.1699399 --"
      authors:
        - name: '--enter an author name e.g Daniel Steele --'
        - name: '--enter another author name e.g Christine Kerrigan --'
        - name: '--enter another author name e.g Catherine Guastavino --'

    - title: "--enter another paper title in the Sounds in the City section e.g Researching soundscape conceptualizations, contexts, and information in urban planning and design practices through interviews--"
      description: "--enter a description--"
      date: " "
      link:
        url: "--leave url blank if there is no link e.g '#' "
      authors:
        - name: ' '
        - name: ' '
- title: "--Enter a title for the next section --"
  id: '--enter a unique id --'
  data:
    - title: "--enter a paper title--"
      description: "--enter a description--"
      date: "--enter a date--"
      link:
        url: ""
      authors:
        - name: '--enter an author name--'
```

### Projects [Back to top](#quick-links)
folder - "projects" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

Each -title item represents a project, to add more projects add more -title items and their corresponding lists

#### Project Details Update
```
- title: "--enter the project's title e.g Terrasses Roy: creating a new public space --"
  description: "--enter a short description of the project e.g. A pedestrianization in the heart of the Plateau-Mont-Royal --"
  location: "--enter a location e.g Plateau-Mont-Royal, Montreal, QC--"
  date: "--enter the season e.g Summer and Fall 2017--"
  image: "--enter the path for the thumbnail image e.g /assets/images/projects/Roy/Roy2.jpg --"
  url: "--enter a unique id, no spaces e.g project1--"
  fundings: "--enter the funding orgs e.g SSHRC-PDG grant --"
  collaborators: "--enter the collaborators e.g City of Montreal (Arrondissement Plateau-Mont-Royal) --"
  name: "--enter a caption for the project's images e.g TERRASSES ROY --"
  tags:
    - name: --add tags for the project--
      id: --add a unique id for the tag--
    - name: pedestrianization
      id: 'pedestrianizationTAGS'
    - name: soundscape evaluation
      id: 'soundscape_evaluation'
    - name: City of Montreal
      id: 'city_of_montreal'
    - name: public space
      id: 'public_space'
  before:
    image: '--enter a path for the before image e.g /assets/images/projects/Roy/Roy1.jpg --'
    credits: '--enter credits e.g Maryse Lavoie. --'
    alt: "--enter alt text for the image e.g image of an empty park --"
  after:
    image: '--enter a path for the after image e.g /assets/images/projects/Roy/Roy1.jpg --'
    credits: '--enter credits e.g Maryse Lavoie. --'
    alt: "--enter alt text for the image e.g image of an empty park --"
  brief: "--enter the short text for the project ... use <br> tags to break up long text into paragraphs --"
  about: "--enter the longer text for the project ... use <br> tags to break up long text into paragraphs -- "
  contact_info: "--enter contact info e.g For details, please contact: Daniel Steele, Catherine Guastavino --"
  links:
    - url: '--enter full url e.g https://... --'
      name: '--enter the url text e.g electronslibres.telequebec.tv/episodes/35418 --'
    - url: ' '
      name: ' '
    - url: ' '
      name: ' '
  publications:
    - url: '--enter full url e.g https://... --'
      name: '--enter the paper title --'
  prev_url: "--enter the id of the previous project e.g project1 if you are working on project2"
  next_url: '--enter the id of the next project e.g project3 if you are working on project2'
  ```

### Team [Back to top](#quick-links)
folder - "team" found in the "_data" folder
related files - "en.yml" for English text, "fr.yml" for French translations 

Using the template text below, copy and paste the section between the ``` tags into the .yml files and edit the text for each section.

#### Members content 
To update the members section, in the "team" folder, find the "members" list in the main "staff" list. Each  -name (role,image,info) list represents a single member, to create more team members, repeat the -name list for each additional person. 

```
staff:
  title: "MEET OUR TEAM"
  members:
    - name: "--enter the person's name e.g Catherine Guastavino --"
      role: "--enter their role e.g Principal Investigator --"
      image: "--enter the path to the person's saved image in the assets folder e.g /assets/images/team/Catherine_Guastavino-RC3_Square.jpg --"
      info: "--enter the person's bio text ... use the <br> tag to break up text into paragraphs --"
    - name: " "
      role: " "
      image: " "
      info: " "
```

#### Alumni content 
To update the alumni section, in the "team" folder, find the "alumni" list in the main "staff" list. Each  -name (role,image,info) list represents a single alumni, to create more alumni, repeat the -name list for each additional person. 

```
staff:
  title: "MEET OUR TEAM"
  members:
    .
    .
    .
  alumni:
    - name: "--enter the person's name --"
      role: "--enter their role --"
      image: "--enter the path to the person's saved image in the assets folder e.g /assets/images/team/1.webp --"
      info: "--enter the person's bio text ... use the <br> tag to break up text into paragraphs --"
    - name: " "
      role: " "
      image: " "
      info: " "
```

#### Collaborators content 
To update the collaborators section, in the "team" folder, find the "collaborators" list in the main "staff" list. 
List of collaborators - Each  -name (name, image, url) list represents a single collaborator, add more -name items to add to the list
List of collaborating projects or organizations - Each -name (url) item represents one listing, add more -name items to add to the list  

```
staff:
  title: "MEET OUR TEAM"
  members:
    .
    .
    .
  collaborators:
  title: "COLLABORATORS"
  members:
    - name: "--enter a name --"
      image: "--enter a path to an image in the assets folder if no image leave empty e.g '' "
    - name: "--enter a name --"
      url: "--enter a full url if name should link to an external site, if not leave out the 'url' key --"
      image: " "
  links:
    - name: "--enter a name for the collaborating project or organization e.g Audiotopie --"
      url: "--enter a full link to the project or organization e.g https://... --"
    - name: "Ville de Montréal" # If the list item has no link, leave out the 'url' item 

    - name: "Soft dB"

```