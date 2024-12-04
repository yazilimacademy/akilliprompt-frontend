# Contributing to [Smart Prompter]

This project has specific rules, and adhering to them will enhance quality and collaboration.

## 1. Project Dependencies

Using **Yarn** is mandatory for this project. Please do not attempt to install dependencies using `npm` or other package managers. If you do not have Yarn installed on your machine, you can install it with the following command:

```bash
npm install -g yarn
```

To start the project, run:

```bash
yarn install
```

## 2. Branch Naming Conventions

When you start working on a new task, you must follow the naming format below when creating a branch:

```
feature/{taskId}/{description}
```

### Example:
- **feature/1234/add-login-functionality**
- **feature/5678/improve-performance**

Avoid using Turkish characters in branch names, and ensure they are descriptive.

## 3. Linting and Code Quality

Before opening pull requests (PRs) in all branches, you should run the following commands to lint your code. It is mandatory to fix any ESLint errors in your code.

### Linting commands:
- To perform lint checks:
  ```bash
  yarn lint
  ```

- To automatically fix ESLint errors:
  ```bash
  yarn lint-fix
  ```

Make sure to run these commands before creating a PR and ensure that all ESLint errors are resolved.

## 4. Pull Request Process

When opening a pull request, you should follow these steps:

- Name the Pull Request as "taskid | description", for example: "4X1xjENC | added NextAuth-V5"
- Before exiting the branch, run all your tests and ensure they pass.
- Clearly specify in the PR description what changes you made and which task you completed.
- The changes you made in the PR should not harm other developments.
- Pay attention to the feedback during the code review process and make necessary corrections.

---

Thank you for contributing! By adhering to these rules, we can develop a higher-quality and more organized project together.
