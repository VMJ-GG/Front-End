task :default => :watch

desc "Compile stylesheets"
task :compile do
  sh "sass scss/main.scss:css/main.css"
end

desc "Watch stylesheets"
task :watch do
  sh "sass --watch scss/main.scss:css/main.css"
end

desc "Pushing changes to remote"
namespace :push do
  task :all, [:message] do |t, args|
    sh "git add -A && git commit -am \'#{args.message}\' && git push"
  end

  task :files, [:message] do |t, args|
    files = args.extras
    files.each do |fn|
      sh "git add #{fn}"
    end
    sh "git commit -am \'#{args.message}\' && git push"
  end
end
