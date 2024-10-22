# Contributing

Contributing is very easy even when you have limited programming knowledge!

1. Clone this repository
    ```bash
    git clone https://github.com/MorganResearchLab/wiki.git
    ```
1. All of the posts are located in the `docs` folder, creating new folder inside of it will create a new category in the sidebar. Creating an `.md` or React component (`.jsx`) will create a new post. More on [Docusaurus guides](https://docusaurus.io/docs/category/guides)
1. To preview how the wiki looks like after you add something to the `docs` folder. You have to make sure you have Node.js and Node Package Manager installed, otherwise you can skip step 3 and 4
    ```
    npm run start
    ```
1. Add, commit and push all changes
    ```
    git add .
    git commit -m "<INSERT_YOUR_MESSAGE_HERE>"
    git push
    ```
1. Wait the GitHub action to finish and it's live now on [MorganLab Wiki](https://morganresearchlab.github.io/wiki/) thanks for contributing!
