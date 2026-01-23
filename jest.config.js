// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  // Transform .js, .jsx, .ts and .tsx files with ts-jest
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
        // Use react-compiler babel plugin
        babelConfig: {
          plugins: [["babel-plugin-react-compiler"]],
        },
      },
    ],
  },
  // Handle module aliases (if you use them)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // Don't test these folders
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/storybook-static/",
  ],
  // Collect coverage from these files
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  // Handle CSS imports
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
