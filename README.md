# OceansCodeExpers

Playwright BDD test automation framework built with TypeScript for the [Rahul Shetty Academy](https://rahulshettyacademy.com/client) demo application.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.60.0 | Browser automation |
| [playwright-bdd](https://vitalets.github.io/playwright-bdd/) | ^8.5.1 | BDD support (Gherkin + Playwright) |
| [@cucumber/cucumber](https://cucumber.io/) | ^12.9.0 | Gherkin feature file parsing |
| [@faker-js/faker](https://fakerjs.dev/) | ^10.4.0 | Test data generation |
| TypeScript | ES2020 target | Language |
| pnpm | ^11.2.2 | Package manager |

---

## Project Structure

```
src/
├── features/         # Gherkin .feature files (test scenarios)
│   ├── login.feature
│   └── registration.feature
├── steps/            # Step definitions — bind Gherkin steps to code
│   ├── login.step.ts
│   ├── dashboard.step.ts
│   └── registration.step.ts
├── behaviour/        # Business logic — orchestrates actions on the page
│   ├── login.behaviour.ts
│   ├── dashboard.behaviour.ts
│   └── registration.behaviour.ts
├── pages/            # Page Object Model — element locators per page
│   ├── login.page.ts
│   ├── dashboard.page.ts
│   └── registration.page.ts
└── model/            # Data models — typed classes for test data
    ├── login.model.ts
    ├── dashboard.model.ts
    └── registration.model.ts
```

### Layer responsibilities

```
Feature (.feature)
    └── Step Definitions (.step.ts)       ← glues Gherkin to code
            └── Behaviour (.behaviour.ts) ← orchestrates page actions
                    └── Page Object (.page.ts) ← locators only
                    └── Model (.model.ts)      ← test data
```

---

## Test Scenarios

### Login (`src/features/login.feature`)

| Tag | Scenario |
|---|---|
| `@smoke` | Login with valid credentials and verify redirect to dashboard |

### Registration (`src/features/registration.feature`)

| Tag | Scenario |
|---|---|
| `@registration` | Fill registration form with gender, occupation, and phone then verify success |

---

## Prerequisites

- **Node.js** 18+ installed
- **pnpm** installed globally:
  ```bash
  npm install -g pnpm
  ```
- Playwright browsers installed (run once after cloning):
  ```bash
  pnpm playwright install
  ```

---

## Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd OceansCodeExpers

# 2. Install dependencies
pnpm install

# 3. Install browsers
pnpm playwright install
```

---

## Running Tests

### By tag (recommended)

```bash
# Smoke tests only
pnpm test:smoke

# Regression tests only
pnpm test:regression
```

### Direct Playwright commands

```bash
# Run all tests
pnpm playwright test

# Run a specific feature file
pnpm playwright test --grep "Login"

# Run in headed mode (see the browser)
pnpm playwright test --headed

# Run a specific tag
pnpm playwright test --grep @smoke
pnpm playwright test --grep @registration

# Run with a specific browser
pnpm playwright test --project=chromium
```

### View the HTML report

After any test run, open the report with:

```bash
pnpm playwright show-report
```

---

## Configuration

`playwright.config.ts` key settings:

| Setting | Value |
|---|---|
| Base URL | `https://rahulshettyacademy.com` |
| Browser | Chromium (Desktop Chrome) |
| Headless | `false` (visible browser) |
| Timeout | 5000 ms per assertion |
| Screenshots | Captured on failure |
| Video | Retained on failure |
| Retries (CI) | 2 |
| Reporter | HTML |

---

## CI Behavior

When the `CI` environment variable is set:

- Tests run with `workers: 1` (no parallelism)
- Retries up to 2 times on failure
- `test.only` in source causes the build to fail (`forbidOnly: true`)
