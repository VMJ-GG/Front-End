task :default => :watch

desc "Compile stylesheets"
namespace :compile do
  task :expanded do
    sh "sass --style=expanded scss/main.scss:css/main.css"
  end

  task :minified do
    sh "sass --style=compressed scss/main.scss:css/main.min.css"
  end

  task :singleline do
    sh "sass --style=compact scss/main.scss:css/main.compact.css"
  end
end

desc "Watch stylesheets"
task :watch do
  sh "sass --watch --style=expanded scss/main.scss:css/main.css"
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
