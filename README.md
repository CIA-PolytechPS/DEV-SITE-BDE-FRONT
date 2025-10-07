# VPS-SITE-BDE-FRONT

Front-end repository of BDE website.

Don't forget to run `chmod +x setup.sh && ./setup.sh` after cloning the repository.

---

## Contents

- [Usage](#usage)
  - [Node.JS](#nodejs)
  - [Docker](#docker)
- [Structure](#structure)
- [Commands](#commands)
- [Git conventions](#git-conventions)
  - [Branches](#branches)
  - [Commits](#commits)
  - [PR](#pr)
- [Git Commands](#git-commands)
- [GitHub](#github)
  - [Releases](#releases)
  - [Actions](#actions)
  - [Secrets](#secrets)
  - [Variables](#variables)
  - [Settings](#settings)
    - [General](#general)
    - [Rules](#rules)
    - [Actions](#actions-1)
    - [Environments](#environments)
    - [Advanced Security](#advanced-security)

---

## Usage

Next steps define how to download the project and run it under a port/path, you will have to configure a webserver on your machine to access it from internet (using nginx, apache2, etc.).

- ### Node.JS
  - need to clone the repository
  - need to have npm
  1. open a terminal at the root of the cloned repository
  2. run `npm ci`
  3. for development: run `npm run dev:run -- --port=<number>` and replace `<port>` with the port you want
  4. for production: run `npm run build:run -- --output-path=<path>` and replace `<path>` with the path of the folder you want (it needs to be created before)

- ### Docker
  - NO need to clone the repository
  - image: [![Docker Image Version](https://img.shields.io/docker/v/ciapops/site-bde-front?sort=semver) ![Docker Image Size](https://img.shields.io/docker/image-size/ciapops/site-bde-front?sort=semver)](https://hub.docker.com/r/ciapops/site-bde-front)
  - docker-compose:
    1. open a terminal and navigate to the folder where you want to download the `docker-compose.yml` file
    2. you can find an example of `docker-compose.yml` in the [`docker config`](./.docker/front) folder
      - you can copy it with `curl -o docker-compose.yml https://raw.githubusercontent.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/main/.docker/front/docker-compose.yml`
    3. you also need to copy [`example.env`](./.docker/front/example.env) to `.env`
      - you can get it with `curl -o .env https://raw.githubusercontent.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/main/.docker/front/example.env`
    4. edit `.env` to your needs
    5. run `docker-compose up -d --force-recreate --pull always` to start the container

---

## Structure

- `.docker`: Docker-related files (Dockerfile, etc.)
- `.github`: GitHub-related files (workflows, issue templates, etc.)
- `.ssh`: local folder for your ssh keys to auth and sign commits (ignored by git)
- `assets`: static files but local (ignored by git)
- `build`: built files for production (after running `npm run build`) (ignored by git)
- `public`: static files (HTML template, images, etc.)
- `scripts`: scripts used by `npm run <script>` command
- `src`: source code (React components, styles, etc.)
- `.dockerignore`: files to ignore when building the Docker image
- `.gitignore`: files to ignore by git
- `eslint.config.mjs`: ESLint configuration
- `LICENSE`: license file (MIT)
- `package-lock.json`: npm package lock file (exact versions of dependencies)
- `package.json`: npm package configuration (dependencies, scripts, etc.)
- `postcss.config.mjs`: PostCSS configuration
- `README.md`: this file
- `setup.sh`: setup script (run after cloning the repository)
- `tsconfig.json`: TypeScript configuration
- `webpack.config.mjs`: Webpack configuration

---

## Commands

- `npm install`: install dependencies
- `npm install -E -D <package>...`: install development dependencies (with exact version)
- `npm install -E -P <package>...`: install production dependencies (with exact version)
- `npm run lint`: lint the code with ESLint (automatically run before `dev` and `build`)
  - options (`npm run lint -- <option>...`):
    - `--lint-skip`: skip linting
    - `--lint-fix`: automatically fix problems
    - `--lint-nibble`: format output to more readable format
- `npm run dev`: run the application in development mode (with hot-reloading)
  - options (`npm run dev -- <option>...`):
    - every those of `lint` command
    - `--dev-port=<number>`: specify the port (default: 3000)
- `npm run build`: build the application for production
  - options (`npm run build -- <option>...`):
    - every those of `lint` command
    - `--build-output-path=<path>`: specify the output path (default: `./build`)

---

## Git conventions

- ### Branches
  - `main`: production branch
  - `dev`: development branch (all features must be merged here first)
  - `<service>`: service branches (must be created from `dev` and merged back to `dev`)
  - `<service>-<id>`: task branches (must be created from `<service>` and merged back to `<service>`)

- ### Commits
  - `<type>(<scope>): <comment>`
    - `<type>`: type of the commit (must be one of the following, can be combined with `|`):
      - `feat`: new feature
      - `fix`: bug fix
      - `docs`: documentation only changes
      - `style`: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
      - `refactor`: code change that neither fixes a bug nor adds a feature
      - `perf`: code change that improves performance
      - `test`: adding missing tests or correcting existing tests
      - `chore`: changes to the build process or auxiliary tools and libraries such as documentation generation
      - `merge`: merges branches
    - `<scope>`: name of the branch (`service-id`)
    - `<comment>`: short description of the commit
  - example: `feat(user-42): add login feature`
  - example: `feat|perf|style(home-21): add last event feature, improve performance for render and fix styles of first section`
  - every commit must be signed with a GPG/SSH key (set it up with `./setup.sh`)
  - make reasonable sized commits (do not commit everything in one commit, but do not make too many small commits either)
  - write meaningful commit messages (do not use `fix` or `update` as comment, be more specific)

- ### PR
  - title: `merge(<source> -> <target>): <comment>`
    - `<source>`: source branch
    - `<target>`: target branch
    - `<comment>`: short description of the PR
  - description
    - optional: follow the template provided by GitHub
    - if you did not use the template, at least provide a description of the changes
  - for the merge commit, let GitHub generate it automatically (do not edit it)
  - reviewers: at least one reviewer must be assigned (preferably the repository admin or the service manager)
  - In case of a release PR (from `dev` to `main`):
    - title: `r/<version> - <name>`
      - `<version>`: version of the release (must follow [semantic versioning](https://semver.org/), e.g. `1.2.3`)
      - `<name>`: name of the release
    - description:
      - follow the template provided by GitHub
      - if you did not use the template, at least provide a description of the changes
      - you can omit the "Changelog" section
      - do not use "---" in the PR description, it breaks the formatting, only let the one by default
      - a link to compare the changes since last release will be automatically generated by GitHub in the release description

---

## Git Commands

- `git status`: check the status of the repository
- `git fetch origin`: fetch changes from remote
- `git checkout <branch>`: switch to an existing branch
- `git pull origin`: pull changes from remote branch
- `git rebase origin/<branch>`: rebase current branch onto remote branch, if you want to get latest changes of another branch (must be done after `git fetch origin`)
- `git add .`: stage all changes
- `git add <file>...`: stage specific file (can use glob patterns)
- `git commit -m "<commit message>"`: commit staged changes with a message
- `git push origin`: push changes to remote branch
- `git stash -u`: stash changes (to be reapplied later, for example when switching branch)
- `git stash pop`: reapply stashed changes

---

## GitHub

- ### Releases
  - must have a different tag for every version (used by CD action to tag Docker image)
  - must be created from `main` branch
  - tag must be prefixed with `v` (e.g. `v1.2.3`)
  - tag must follow semantic versioning (https://semver.org/)
  - When a new version is pushed to `main`, the Docker image will be tagged with:
    - the full version (e.g. `v1.2.3`)
    - the major and minor version (e.g. `v1.2`)
    - the major version (e.g. `v1`)
    - the `latest` tag (always points to the latest version)

- ### Actions
  - `CI`: runs on every push and PR, lints and builds the project to make sure everything is fine
  - `CD`: runs on every release from `main`, builds the Docker image and pushes it to Docker Hub
  - `release`: runs on every release PR from `dev` to `main`, generates the release notes and creates a GitHub release

- ### Secrets
  - `DOCKERHUB_TOKEN`: Docker Hub token for pushing images (make it inside an environment named `production` to restrict access only to the main branch and version tags)
  - `DOCKERHUB_TOKEN`: Admin GitHub user token with contents write permission on that repo (make it inside an environment named `release` to restrict access only to the main branch)

- ### Variables
  - `DOCKERHUB_USERNAME`: Docker Hub username
  - `DOCKERHUB_IMAGE`: Docker Hub image name
  - `DOCKER_BUILD_CONTEXT`: Docker build context (default: `.`)
  - `DOCKER_CONFIG_FOLDER`: Docker config folder (default: `./.docker`)

- ### Settings
  - #### [General](https://github.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/settings)
    - `Default branch`: `main`
    - `Releases`:
      - `Enable release immutability`: true
    - `Features`:
      - `Wiki`: false
      - `Issues`: false
      - `Sponsorships`: false
      - `Preserve this repository`: true
      - `Discussions`: false
      - `Projects`: false
    - `Pull Requests`:
      - `Allow merge commits Loading`: true
        - `Default commit message`: Pull request title and description
      - `Allow squash merging`: false
      - `Allow rebase merging`: false
      - `Always suggest updating pull request branches`: true
      - `Allow auto-merge`: false
      - `Automatically delete head branches`: false
    - `Pushes`:
      - `Limit how many branches and tags can be updated in a single push`: 2

  - #### [Rules](https://github.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/settings/rules)
    - `protected branches`:
```json
{
  "name": "protected branches",
  "target": "branch",
  "source_type": "Repository",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "~DEFAULT_BRANCH",
        "refs/heads/dev",
        "refs/heads/home",
        "refs/heads/event",
        "refs/heads/club",
        "refs/heads/contact"
      ]
    }
  },
  "rules": [
    {
      "type": "deletion"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "creation"
    },
    {
      "type": "pull_request",
      "parameters": {
        "required_approving_review_count": 1,
        "dismiss_stale_reviews_on_push": true,
        "require_code_owner_review": true,
        "require_last_push_approval": false,
        "required_review_thread_resolution": true,
        "automatic_copilot_code_review_enabled": false,
        "allowed_merge_methods": [
          "merge"
        ]
      }
    },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": true,
        "do_not_enforce_on_create": true,
        "required_status_checks": [
          {
            "context": "Run CodeQL analysis (actions, none)"
          },
          {
            "context": "Run CodeQL analysis (javascript-typescript, none)"
          },
          {
            "context": "Run build for testing"
          },
          {
            "context": "Run lint scanning"
          },
          {
            "context": "Run unit tests"
          }
        ]
      }
    },
    {
      "type": "code_scanning",
      "parameters": {
        "code_scanning_tools": [
          {
            "tool": "CodeQL",
            "security_alerts_threshold": "high_or_higher",
            "alerts_threshold": "errors"
          }
        ]
      }
    }
  ],
  "bypass_actors": [
    {
      "actor_id": 5,
      "actor_type": "RepositoryRole",
      "bypass_mode": "pull_request"
    }
  ]
}
```

    - `tasks branches`:
```json
{
  "name": "task branches",
  "target": "branch",
  "source_type": "Repository",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/heads/dev-[0-9]",
        "refs/heads/home-[0-9][0-9]",
        "refs/heads/event-[0-9][0-9]",
        "refs/heads/club-[0-9][0-9]",
        "refs/heads/contact-[0-9][0-9]",
        "refs/heads/home-[0-9][0-9][0-9]",
        "refs/heads/event-[0-9][0-9][0-9]",
        "refs/heads/club-[0-9][0-9][0-9]",
        "refs/heads/contact-[0-9][0-9][0-9]"
      ]
    }
  },
  "rules": [
    {
      "type": "deletion"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "required_signatures"
    }
  ],
  "bypass_actors": []
}
```

    - `no tags`:
```json
{
  "name": "no tags",
  "target": "tag",
  "source_type": "Repository",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [
        "refs/tags/v*.*.*"
      ],
      "include": [
        "~ALL"
      ]
    }
  },
  "rules": [
    {
      "type": "deletion"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "creation"
    },
    {
      "type": "update"
    }
  ],
  "bypass_actors": []
}
```

    - `version tags`:
```json
{
  "name": "version tags",
  "target": "tag",
  "source_type": "Repository",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "exclude": [],
      "include": [
        "refs/tags/v*.*.*"
      ]
    }
  },
  "rules": [
    {
      "type": "deletion"
    },
    {
      "type": "non_fast_forward"
    },
    {
      "type": "update"
    }
  ],
  "bypass_actors": []
}
```

  - #### [Actions](https://github.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/settings/actions)
    - `Actions permissions`: Allow all actions and reusable workflows
    - `Require actions to be pinned to a full-length commit SHA`: false
    - `Approval for running fork pull request workflows from contributors`: Require approval for all external contributors
    - `Workflow permissions`: Read repository contents and packages permissions
    - `Allow GitHub Actions to create and approve pull requests`: false

  - #### [Environments](https://github.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/settings/environments)
    - `production`: for CD action
      - `Deployment protection rules`:
        - `Required reviewers`:
          - `reviewers`: only super-admins
          - `Prevent self-review`: false
        - `Wait timer`: false
      - `Allow administrators to bypass configured protection rules`: false
      - `Deployment branches and tags`:
        - `Branch rules`:
          - `main`
        - `Tag rules`:
          - `v*.*.*`
      - `Environment secrets`:
        - `DOCKERHUB_TOKEN`: Docker Hub token for pushing images
    - `release`: for release workflow
      - `Deployment protection rules`:
        - `Required reviewers`:
          - `reviewers`: only super-admins
          - `Prevent self-review`: false
        - `Wait timer`: false
      - `Allow administrators to bypass configured protection rules`: false
      - `Deployment branches and tags`:
        - `Branch rules`:
          - `dev`
        - `Tag rules`:
      - `Environment secrets`:
        - `ADMIN_TOKEN`: Admin GitHub user token with contents write permission on that repo

  - #### [Advanced Security](https://github.com/CIA-PolytechPS/DEV-SITE-BDE-FRONT/settings/security_analysis)
    - `Dependency graph`: Enable
      - `Automatic dependency submission`: Enabled
    - `Dependabot`:
      - `Dependabot alerts`: Enable
    - `Protection rules`:
      - `Check runs failure threshold`:
        - `Security alert severity level`: High or higher
        - `Standard alert severity level`: Only errors
    - `Secret Protection`: Enable
    - `Push protection`: Enable
