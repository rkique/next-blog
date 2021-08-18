set arg1=%1
git add . && git commit -m '%*'
git push origin main
