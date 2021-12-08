*** This technical note informs the git collaboration process ***

# EMERGENCY
Drop Heran a message (or call)
Copy or save your progress in your local folder

# NOTE
Check your branch (bottom left)
Save every min
Push every function

# Branch relation

https://docs.google.com/presentation/d/1ShLtoPHK2Lcjp9Jchr0xYLQiDEUl0c5Gl_KfjknaCMs/edit?usp=sharing
Main tasks will be broken down to subtasks;
Each subtask takes one

0. [branch] Main
    0.1. [branch] task A
    0.2. [branch] task B
    0.3. [branch] task C
    ...
    0.4. [branch] task X

# Individual flow

1. know your task
https://github.com/heranYang93/go-go-space/projects/1

2. know your branch
git branch                  =>  Show branches, check *, dodge main                  =>  VS Code #BOTTOM LEFT#

3. create your branch
git checkout -b {NAME}

4. get main (pull the base)
git pull origin main        =>  What if someone made a change and you don't know?   =>  check the latest main

4. work on your branch

5. merge and compare with base
git pull origin main

6. deal with conflict
In VS Code, edit

7. conclude and push
add .
commit -m'message'
git push -u origin {NAME}
go to github and comment on your own push request