require_relative 'app'

project_path         = Sinatra::Application.root

http_path             = '/'
http_photos_path      = '/photos'

albums_dir            = File.join 'public', 'albums'
