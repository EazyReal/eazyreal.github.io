---
title: mkdocs guide
tags:
  - guide
  - tech
---

## Step by step tutorial
- [reference](https://www.itread01.com/content/1541236983.html)
- [github pages](https://pages.github.com/)
- [mkdocs](https://www.mkdocs.org/)
- [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)

### Install Dependencies
```
pip install mkdocs
pip install mkdocs-material
pip install python-markdown-math
```

### make a new project with mkdocs
```
mkdocs new <project-root>
```

### settings
- `<project-root>/mkdocs.yml`
```
  theme:    name: material
```

### local serving
- at `<project-root>`
```
mkdocs serve
```

### deploy to github page (with github aption)
- create `<project-root>/.github/workflows/ci.yml`
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
      #- run: pip install mkdocs-material
      - run: pip install -r requirements.txt
      - run: mkdocs gh-deploy --force
```

### push to your corresponding repo on github, it will auto build to `gh-pages` branch
```
git add .
git commit -m "commit msgs"
git push origin master (main after 2020/10/1)
```

### see magic happens!
- Note: first deploymemt will take longer (about 10 mins or more)
- Note: make sure you have the option in github repo settings turned on 
- Note: make sure the source branch for deployment set to "gh-pages"


### For supporting math equations
- https://mkdocs.readthedocs.io/en/stable/#mkdocs
```
- mdx_math: # python-markdown-math
        enable_dollar_delimiter: true
```
- this code block is required for displaying math
    - see also 
        - https://python-markdown.github.io/reference/#extensions
        - https://github.com/mitya57/python-markdown-math