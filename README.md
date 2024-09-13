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

### Footer

### Locales

### Media 

### Papers

### Projects

### Team 