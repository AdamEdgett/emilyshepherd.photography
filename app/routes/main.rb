require_relative 'helpers'

# Includes routes for main app functionality
class App < Sinatra::Base
  helpers Sinatra::Routes::Helpers

  ALBUM_DIR = 'public/albums'

  get '/' do
    haml :home
  end

  get '/albums' do
    albums = get_directories(ALBUM_DIR)
    haml :album_list, locals: { albums: albums }
  end

  get '/albums/:album' do
    photos = get_images(ALBUM_DIR + "/#{params[:album]}")
    haml :album, locals: { photos: photos }
  end
end
