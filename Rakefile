task :default => :watch

desc "Compile stylesheets"
task :compile do
  sh "sass scss/main.scss:css/main.css"
end

desc "Watch stylesheets"
task :watch do
  sh "sass --watch scss/main.scss:css/main.css"
end

task :publish, [:message] do |t, args|
  files = args.extras
  unless files.empty?
    files.each do |fn|
      sh "git add #{fn}"
    end
  else
    sh "git add -A"
  end
  sh "git commit -am '#{args.message}'"
end
