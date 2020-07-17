## Wish to contribute to this repository? 

Here are the steps to help you along :scroll:

### 1. Fork This Repository :fork_and_knife:
You can get your own fork/copy of (https://github.com/Trailblazer-Together/Caerusinfotech-Website) by using the <a href="https://github.com/Trailblazer-Together/Caerusinfotech-Website/new/master?readme=1#fork-destination-box"><kbd><b>Fork</b></kbd></a> button or clicking [here](https://github.com/Trailblazer-Together/Caerusinfotech-Website/new/master?readme=1#fork-destination-box).
 [![Fork Button](https://help.github.com/assets/images/help/repository/fork_button.jpg)](https://github.com/CoderJolly/IPU-Engineering-Notes)
 
 
### 2. Clone This Repository :busts_in_silhouette:
You need to clone (download a copy of) this repository to your local machine using
```sh
$ git clone https://github.com/Your_Username/Careusinfotech-Website.git
```
> This makes a local copy of repository in your machine.
Once you have cloned the `Caerusinfotech-Website` repository in GitHub, move to that folder first using change directory command on linux and Mac.
```sh
# This will change directory to a folder Caerusinfotech-Website
$ cd Caerusinfotech-Website
```
Move to this folder for all other commands.

### 3. Set It Up :wrench:
Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in GitHub :octocat:
```sh
$ git remote -v
origin  https://github.com/Your_Username/Caerusinfotech-Website.git (fetch)
origin  https://github.com/Your_Username/Caerusinfotech-Website.git (push)
```
Now, lets add a reference to the original [Caerusinfotech-Website](https://github.com/Trailblazer-Together/Caerusinfotech-Website) repository using
```sh
$ git remote add upstream https://github.com/Trailblazer-Together/Caerusinfotech-Website.git
```
> This adds a new remote named ***upstream***.
See the changes using
```sh
$ git remote -v
origin    https://github.com/Your_Username/Caerusinfotech-Website.git (fetch)
origin    https://github.com/Your_Username/Caerusinfotech-Website.git (push)
upstream  https://github.com/Trailblazer-Together/Caerusinfotech-Website.git (fetch)
upstream  https://github.com/Trailblazer-Together/Caerusinfotech-Website.git (push)
```

### 4. Ready, Set, Go! :turtle::rabbit2:
Once you have completed these steps, you are ready to start contributing by checking our `Help Wanted` Issues and creating [pull requests](https://github.com/Trailblazer-Together/Caerusinfotech-Website/pulls).

### 5. Create A New Branch :herb:
Whenever you are going to make contribution. Please create separate branch using command and keep your `master` branch clean (i.e. synced with remote branch).
```sh
# It will create a new branch with name Branch_Name and switch to branch Folder_Name
$ git checkout -b Folder_Name
```
Create a separate branch for contribution and try to use same name of branch as of folder.
To switch to desired branch
```sh
# To switch from one folder to other
$ git checkout Folder_Name
```
To add the changes to the branch. Use
```sh
# To add all files to branch Folder_Name
$ git add .
```
Type in a message relevant for the code reviewer using
```sh
# This message get associated with all files you have changed
$ git commit -m 'relevant message'
```
### 6. Push The Changes To Your Remote Repository :rocket::sparkles:
```sh
# To push your work to your remote repository
$ git push -u origin Folder_Name
```
### 7. Finally, Make a PR! :fire:
Go to your repository in browser and click on `compare and pull requests`.
Then add a title and description to your pull request that explains your precious effort.

### 8. All done!? Time to partyyy! :heart_eyes::tada:
And don't forget to invite me to the party (if you'd like) :p
