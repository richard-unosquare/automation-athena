# Playwright API Automation Framework

Automation framework for API testing using **Playwright + TypeScript**.  
This project demonstrates how to automate CRUD operations (**GET, POST, PUT, DELETE**) for the **Activities** endpoints from the TimeTracker API Swagger.

API Swagger used for this example:  
https://unocorptimetracker-staging.azurewebsites.net/swagger/index.html

---

# Project Structure

```
playwright-api-framework
│
├── config
│   └── env.ts
│
├── services
│   └── activities.service.ts
│
├── tests
│   └── activities.spec.ts
│
├── playwright.config.ts
├── package.json
```

---

# Prerequisites

Install the following before running the project:

- Node.js (v18 or later recommended)
- npm

Check versions:

```
node -v
npm -v
```

---

# Installation

Clone the repository or copy the framework files.

Then install dependencies:

```
npm install
```

---

# Environment Configuration

All environment configuration is centralized in:

```
config/env.ts
```

Example:

```ts
export const ENV = {

  BASE_URL: "https://unocorptimetracker-staging.azurewebsites.net/api",

  HEADERS: {
    "Content-Type": "application/json"
  }

};
```

This allows easy switching between environments such as:

- QA
- Staging
- Production

---

# Playwright Configuration

File:

```
playwright.config.ts
```

The configuration is intentionally minimal because the framework reads the API configuration directly from `env.ts`.

Example:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {}
});
```

---

# Service Layer

API logic is separated into a **service layer**.

Example file:

```
services/activities.service.ts
```

Responsibilities:

- Centralize API endpoints
- Reuse request logic
- Keep tests clean and readable

Methods implemented:

- getActivities()
- getActivityById(id)
- createActivity(body)
- updateActivity(id, body)
- deleteActivity(id)

---

# Test Layer

Test files are located in:

```
tests/
```

Example:

```
tests/activities.spec.ts
```

This test suite covers the full **CRUD lifecycle**:

1. GET all activities
2. POST create activity
3. GET activity by id
4. PUT update activity
5. DELETE activity

Each test validates response status and basic API behavior.

---

# Running the Tests

Execute all tests:

```
npx playwright test
```

Run tests with UI mode:

```
npx playwright test --ui
```

Run a specific test file:

```
npx playwright test tests/activities.spec.ts
```

---

# Example Test Flow

The automation executes the following workflow:

1. Retrieve all activities
2. Create a new activity
3. Retrieve the created activity
4. Update the activity
5. Delete the activity

This validates the full lifecycle of the Activities API.

---

# Framework Advantages

- Simple and clean architecture
- Service layer separation
- Centralized environment configuration
- Easily scalable for new APIs
- Compatible with CI/CD pipelines
- TypeScript support

---

# Extending the Framework

To add new API modules:

1. Create a new service file inside `services/`

Example:

```
services/projects.service.ts
services/users.service.ts
```

2. Add tests inside `tests/`

Example:

```
tests/projects.spec.ts
tests/users.spec.ts
```

---

# Future Improvements

Recommended improvements for enterprise-level frameworks:

- Request/response logging
- JSON schema validation
- Test data factories
- Authentication token management
- Reporting dashboards
- CI/CD integration (GitHub Actions, Azure DevOps)
- Automatic test data cleanup

---

# Author

QA Automation Framework example built with **Playwright API Testing**.