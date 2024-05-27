# # _plugins/generate_project_pages.rb

Jekyll::Hooks.register :site, :pre_render do |site|
  # Handle each language
  ['en', 'fr'].each do |lang|
    # Access projects from each language-specific YAML file
    projects = site.data['projects'][lang]
    projects.each do |project, index|
      output_dir = File.join(lang, 'projects')

      site.pages << Jekyll::PageWithoutAFile.new(site, site.source, output_dir, "#{project['url']}.html").tap do |page|
        page.data['layout'] = 'project_details' 
        page.data['lang'] = lang
        page.data['title'] = project['title']
        page.data['description'] = project['description']
        page.data['image'] = project['image']
        page.data['project_name'] = project['name']
        page.data['location'] = project['location']
        page.data['date'] = project['date']
        page.data['tags'] = project['tags']
        page.data['collaborators'] = project['collaborators']
        page.data['fundings'] = project['fundings']
        page.data['participation'] = project['participation']
        page.data['about'] = project['about']
        page.data['brief'] = project['brief']
        page.data['before'] = project['before']
        page.data['after'] = project['after']
        page.data['links'] = project['links']
        page.data['publications'] = project['publications']
        page.data['contact_info'] = project['contact_info']
        page.data['permalink'] = "/#{lang}/projects/#{project['url']}"
        page.data['next_project_url'] = "/#{lang}/projects/#{project['next_url']}"
        page.data['prev_project_url'] = "/#{lang}/projects/#{project['prev_url']}"
      end
    end
  end
end