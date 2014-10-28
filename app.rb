$LOAD_PATH << File.dirname(__FILE__)

require 'sinatra/base'

require 'app/routes'

# Main app file
class App < Sinatra::Base
  use Rack::Session::Cookie, secret: '4AD6WFZ7PKDAkeTjNE7knSvhApL8KqeR'

  set :template_enginge, :haml
  set :views, 'app/views'
  set :public_folder, 'public'
end
