# Jekyll starter template (I18n)

Basic template to quickly start projects with [Jekyll](https://jekyllrb.com/).

:white_check_mark: Compatible with Jekyll 3.8 & 4.0, and GitHub Pages  
:white_check_mark: Ready for internationalization  
:white_check_mark: Demo : https://---/

## Usage

1 - Install Jekyll and launch the server  

```
bundle install
bundle exec jekyll serve
```

4 - Browse to http://localhost:4000

## DATA MODIFICATION

All the data files are stored in _data directory

Note: 

-> You can only Edit data in these files. Only the data in the list/arrays format can have the option to delete/add/edit.
-> While update content If you saw something went wrong/crash just revert the changes by pressing ctrl + z.
-> If you want to add new entries you have to be fimiliar with .yml format or you can take help from CHAT-GTP for formating.
-> While adding or modifiying the files ( Images/Audios ) make to sure to add files in the specific directories.


1. Navigation ( Header )
    Navigate to _data/navigation and modify the data for each language.
    
    To add a new entry you have to copy the same format and paste at end. (  )

    Note: For updating the project page links please refer to point 3.

2. All Page Static data
    Navigate to _data/locales and modify the data for each language followed by page name
    Homepage            - index
    About               - about
    SoundScape          - soundscape
    Projects/Project    - projects
    Media               - media
    Papers              - papers
    Blogs               - blogs
    Events/Event        - events
    Partners            - partners
    Services            - services
    Contact             - contact

3. Blogs | Projects | Papers | Team | Media | Events
    Navigate to _data/blogs and modify the data for each language.
    
    To add a new entry you have to copy the same format and paste at end. 

    Example: Here are two blogs

    - title: "Blog 1 Title"
      location: "Plateau-Mont-Royal, Montreal, QC"

    - title: "Blog 2 Title"
      location: "Plateau-Mont-Royal, Montreal, QC"

    if you want to add new blog 

    - title: "Blog 1 Title"
      location: "Plateau-Mont-Royal, Montreal, QC"

    - title: "Blog 2 Title"
      location: "Plateau-Mont-Royal, Montreal, QC"

    - title: "Blog 3 Title"
      location: "Plateau-Mont-Royal, Montreal, QC"

4. Adding a new Language in the website
    a. Duplicate the folder en/fr in the route directory and update the lang and permalink from all the pages.
    b. Duplicate the files in the _data directory with the name initials. English = en, French = fr and next.
