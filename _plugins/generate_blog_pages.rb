# # _plugins/generate_blog-archive_pages.rb

Jekyll::Hooks.register :site, :pre_render do |site|
  # Handle each language
  ['en', 'fr'].each do |lang|
    # Access blog-archives from each language-specific YAML file
    blogs = site.data['blogs'][lang]
    blogs.each do |blog, index|
      output_dir = File.join(lang, 'blogs')

      site.pages << Jekyll::PageWithoutAFile.new(site, site.source, output_dir, "#{blog['url']}.html").tap do |page|
        page.data['layout'] = 'blog_details' 
        page.data['lang'] = lang
        page.data['title'] = blog['title']
        page.data['description'] = blog['description']
        page.data['image'] = blog['image']
        page.data['blog_name'] = blog['name']
        page.data['author'] = blog['author']
        page.data['posted'] = blog['posted']
        page.data['about'] = blog['about']
        page.data['brief'] = blog['brief']
        page.data['link'] = blog['link']
        page.data['permalink'] = "/#{lang}/blogs/#{blog['url']}"
        page.data['next_blog_url'] = "/#{lang}/blogs/#{blog['next_url']}"
        page.data['prev_blog_url'] = "/#{lang}/blogs/#{blog['prev_url']}"
      end
    end
  end
end