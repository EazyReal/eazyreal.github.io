---
title: mkdocs guide
tags:
  - guide
  - tech
---

## Step by step tutorial
- [mkdocs](https://www.mkdocs.org/)
- [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)

### Install Dependencies
```
pip install mkdocs
pip install mkdocs-material
pip install python-markdown-math
# etc
```

### Make a new project with mkdocs
```
mkdocs new <project-root>
```

### Settings
- `<project-root>/mkdocs.yml`

### Local serving
- at `<project-root>`
```
mkdocs serve
```

### Deploy to github page (with github aption)
https://squidfunk.github.io/mkdocs-material/publishing-your-site/
- `<project-root>/.github/workflows/ci.yml`
```
# this deploy github action is from https://squidfunk.github.io/mkdocs-material/publishing-your-site/
name: ci 
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: 3.x
      - run: pip install -r requirements.txt
      - run: mkdocs gh-deploy --force
```

### Push to your corresponding repo on github, it will auto build to `gh-pages` branch
```
git add .
git commit -m "commit msgs"
git push origin master (main after 2020/10/1)
```

---

## Notes
- first deploymemt will take longer (about 10 mins or more)
- make sure you have the option in github repo settings turned on 
- make sure the `gh-pages` branch is set up correctly

---

## Features

### For supporting math equations
- https://squidfunk.github.io/mkdocs-material/reference/mathjax/

### Using Emojis 
- https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/

### Editing with Edit Link + HackMD-It Chrome Extension
- https://hackmd.io/c/tutorials/%2Fs%2Fhackmd-it
