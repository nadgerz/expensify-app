#!/bin/sh

#
#    Re-generate .gitignore files from core ones.  Makes updates easier.
#
#    NOTE: local-project.gitignore should always come last.
#
myname=$(basename $0)

cat JetBrains.gitignore Node.gitignore local-project.gitignore > ../../.gitignore

exit 0
