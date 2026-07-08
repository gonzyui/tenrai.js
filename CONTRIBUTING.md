# Contributing to `tenrai.js`

Thank you for your interest in contributing to this project. This guide outlines the recommended workflow and best practices for contributing effectively.

---

## Development Setup

1. Fork the repository.
2. Clone your fork:

   ```bash
   git clone https://github.com/gonzyui/tenrai.js.git
   ```
3. Install dependencies:

   ```bash
   pnpm install
   ```
4. Create a new branch for your work:

   ```bash
   git checkout -b feature/your-feature-name
   ```

---

## Development Workflow

1. Make your changes in the codebase.
2. Run tests to verify your changes:

   ```bash
   pnpm test
   ```
3. Check for linting issues:

   ```bash
   pnpm run lint
   ```
4. Automatically fix formatting (if needed):

   ```bash
   pnpm run format
   ```
5. Build the project:

   ```bash
   pnpm run build
   ```
6. Commit your changes with a meaningful message.
7. Push your branch to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```
8. Open a pull request (PR) to the main repository.

---

## Pull Request Guidelines

* Keep pull requests focused and minimal.
* Include relevant tests for new functionality.
* Update documentation where applicable.
* Follow the existing code style and structure.
* Ensure all tests pass before submitting.

---

## Project Structure

```
src/               - Main source code
  ├── client.ts     - Core client class
  ├── endpoints/    - API endpoint implementations
  └── types/        - TypeScript types and interfaces

tests/            - Test files
examples/         - Example usage scripts
```

---

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm run test:watch

# Generate a test coverage report
pnpm run test:coverage
```

---



## License

By submitting a contribution, you agree that it will be licensed under the MIT License used by this project.
