require 'sinatra/base'
require 'find'

module Sinatra
  module Routes

    # Helper functions
    module Helpers
      IMAGE_FILE_EXTS = %w(.jpg .jpeg .png .gif)

      def strip_public(path)
        path.sub(%r{^/?public/}, '')
      end

      def get_files(path)
        files = Find.find(path).reject { |file| File.directory?(file) }
        files.map { |file| strip_public(file) }
      end

      def get_images(path)
        get_files(path).select do |file|
          IMAGE_FILE_EXTS.include?(File.extname(file))
        end
      end

      def get_directories(path)
        dirs = Find.find(path).reject do |file|
          !File.directory?(file) || file.eql?(path)
        end
        dirs.map { |file| strip_public(file) }
      end

      alias_method :get_folders, :get_directories
    end
  end
end
