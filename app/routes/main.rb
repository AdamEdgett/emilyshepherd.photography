require_relative 'helpers'
require 'json'

# Includes routes for main app functionality
class App < Sinatra::Base
  helpers Sinatra::Routes::Helpers

  ALBUM_DIR = 'public/albums'

  get '/' do
    albums = get_directories(ALBUM_DIR)
    haml :album_list, locals: { albums: albums }
  end

  get '/albums.json' do
    albums = get_directories(ALBUM_DIR)
    albums.to_json
  end

  get '/albums/:album' do
    photos = get_images(ALBUM_DIR + "/#{params[:album]}")
    haml :album, locals: { photos: photos }
  end

  get '/albums/:album/json' do
    photos = get_images(ALBUM_DIR + "/#{params[:album]}")
    photos.to_json
  end
end
