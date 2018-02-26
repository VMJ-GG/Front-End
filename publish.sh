#!/bin/bash

# Read file names...
echo 'Inserire i nomi dei file da aggiungere, comprensivi di estensione, separati da uno spazio (digitare "all" per aggiungerli tutti): '
read files

# ...and add them: all or just what it was inserted
if [ $files = 'all' ]; then
  git add --all
else
  git add $files
fi

# Read commit message...
echo 'Inserire il messaggio del commit: '
read message

# ...and commit
git commit -a -m "$message"

# Finally, push to origin
git push
