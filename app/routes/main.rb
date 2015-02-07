require_relative 'helpers'
require 'json'

# Includes routes for main app functionality
class App < Sinatra::Base
  helpers Sinatra::Routes::Helpers

  ALBUM_DIR = 'public/albums'

  get '/' do
    album_paths = get_directories(ALBUM_DIR)
    albums = album_paths.map { |album_path|
      meta = get_meta(album_path)
      {
        href: strip_public(album_path),
        title: meta['title'],
        cover: meta['cover']
      }
    }
    haml :album_list, locals: { albums: albums }
  end

  get '/albums.json' do
    albums = get_directories(ALBUM_DIR)
    albums.to_json
  end

  get '/albums/:album' do
    album_path = ALBUM_DIR + "/#{params[:album]}"
    photos = get_images(album_path)
    meta = get_meta(album_path)
    title = meta['title']
    haml :album, locals: { photos: photos, title: title }
  end

  get '/albums/:album/json' do
    photos = get_images(ALBUM_DIR + "/#{params[:album]}")
    photos.to_json
  end
end
