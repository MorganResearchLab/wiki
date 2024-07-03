# Contributing

Contributing is very easy even when you have limited programming knowledge!

1. Clone this repository
    ```bash
    git clone https://github.com/MorganResearchLab/wiki.git
    ```
2. All of the posts are located in the `docs` folder, creating new folder inside of it will create a new category in the sidebar. Creating a markdown file (`.md`, `.mdx`) or React component (`.jsx`) will create a new post. More on [Docusaurus guides](https://docusaurus.io/docs/category/guides)
3. To preview how the wiki looks like after you add something to the `docs` folder. You have to make sure you have Node.js and Node Package Manager installed, otherwise you can skip step 3 and 4
    ```
    npm run dev
    ```
4. If you're happy with how it looks like, you can generate the github page for the deployment
    ```
    GIT_USER=<GITHUB_USERNAME> npm run deploy
    ```
5. Add, commit and push all changes
    ```
    git add .
    git commit -m "<INSERT_YOUR_MESSAGE_HERE>"
    git push
    ```
6. It's live now on [MorganLab Wiki](https://morganresearchlab.github.io/Wiki/) (if you do step 3 and 4, otherwise wait for Haries to generate it for you), thanks for contributing!