Version Control using git and GitHub.com
========================================

.. note:: For more information on how to use git for version control check out
          http://progit.org/

This is the most common workflow for working on Large Blue projects.

Setup
-----

First off, we need to get the project files onto your local machine. 

#. **Fork the project** - Once you have been added as a collaborator, fork the
   project by clicking on the "Fork" button on the project home page
   (``http://github.com/largeblue/PROJECT_NAME``)
#. **Clone the project** - You should then be taken to your forked version where
   you can find the clone URL of the project which should follow the pattern
   ``git@github.com:YOUR_USERNAME/PROJECT_NAME.git``. In a terminal on your
   local machine, run ``git clone [CLONE_URL]`` from within the parent directory
   you want the project to be stored in. This will create a new directory named
   ``PROJECT_NAME`` containing all of the project files.
#. **Project specific setup** - Within the project directory, there should be a
   ``README.txt`` or ``README.rst`` file which will explain any additional steps
   required to setup the project. If the setup changes in any way or you feel
   you can improve some of the steps/explanation, please do so as long as the
   file remains concise and helpful. (After all you're a collaborator!)

Development
-----------

Different projects tend to have different shaped teams. Regardless of the team
size or who's working in it your development cycle should include the following
steps.

#. **Update your local repo** - Make sure you are up to date with the largeblue
   project trunk to minimise the risk of having conflicting commits. Run ``git
   pull largeblue master`` to get the most up to date changes (we'll cover
   branching later).
#. **Branch** - If the task is anything more than a copy change, branch it! This
   will help when it comes to working on multiple tasks at the same time or
   working with another developer who is. Run ``git checkout -b BRANCH_NAME``
   which will put you onto a new branch for you to work on.
#. **Commit regularly** - Commit small, self-contained, changes using
   descriptive commit messages to help make browsing the commit history a less
   painful experience for everyone.
#. **Run tests** - Run tests regularly to make sure non of your changes have
   unexpectedly broken some expected behaviour. If tests are failing and you
   can't see why, ask for help.
#. **Merge** - ``git checkout master`` to get back to the master branch, ``git
   merge BRANCH_NAME`` to merge your changes into the trunk and ``git branch -d
   BRANCH_NAME`` to remove the branch (which isn't necessary any more).
#. **Update your local repo** - Merge in any changes other developers may have
   comitted while you've been working on this task with ``git pull largeblue
   master``
#. **Push your changes** - Use ``git push origin master`` to update your github
   repository with your changes. This will allow the project maintainer to merge
   them into the main trunk. I hate to use caps here, but **NEVER EVER PUSH
   CHANGES IF THE TESTS ARE FAILING** if they are, fix them! The master branch
   should always have tests running through without failures or errors. If tests
   start failing in the trunk, it's only going to stop others from getting on
   with their work. If you accidentally push something that breaks tests, let
   everyone know not to pull from that repo and fix them as fast as you can.
#. **Merge them into the largeblue trunk** - If you are the project maintainer,
   push directly to the largeblue repository. Otherwise, please ask the project
   maintainer to merge your changes into the trunk.


Development with Pivotal Tracker
--------------------------------

Most projects use `Pivotal Tracker <http://pivotaltracker.com>`_ for task and
project management. `Bushy <https://github.com/junkafarian/bushy>`_ was written
to help streamline development when working on these projects.

#. **Get your story(s) straight** - Pivotal is a `Scrum
   <http://en.wikipedia.org/wiki/Scrum_(development)>`_ / `Scrum-ban
   <http://en.wikipedia.org/wiki/Scrum_(development)#Scrum-ban>`_ project
   management tool, so all stories should be listed in order of importance. If
   you are managing the tasks for the project, list the stories in the order
   which they should be completed and assign them to the appropriate project
   member.
#. **Start a story** - After installing ``Bushy`` use ``git feature`` or ``git
   bug`` to start a story. This will comment on the pivotal story that you have
   started it and switch you to a new branch for you to complete the work.
#. **Commit regularly** - Commit small, self-contained, changes using
   descriptive commit messages to help make browsing the commit history a less
   painful experience for everyone.
#. **Run tests** - Run tests regularly to make sure non of your changes have
   unexpectedly broken some expected behaviour. If tests are failing and you
   can't see why, ask for help.
#. **Finishing up** - Run ``git finish`` to close the story and merge the code
   back into the master branch.
#. **Push your changes** - Use ``git push origin master`` to update your github
   repository with your changes. This will allow the project maintainer to merge
   them into the main trunk. I hate to use caps here, but **NEVER EVER PUSH
   CHANGES IF THE TESTS ARE FAILING** if they are, fix them! The master branch
   should always have tests running through without failures or errors. If tests
   start failing in the trunk, it's only going to stop others from getting on
   with their work. If you accidentally push something that breaks tests, let
   everyone know not to pull from that repo and fix them as fast as you can.
#. **Merge them into the largeblue trunk** - If you are the project maintainer,
   push directly to the largeblue repository. Otherwise, please ask the project
   maintainer to merge your changes into the trunk.
#. **Ask someone to check it** - The Pivotal story will have been marked as
   ``Finished``. Ask the Project Manager or whoever is able to quality assure
   the task to check it over and mark it as ``Delivered``.

