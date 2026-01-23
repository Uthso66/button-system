// jest.setup.js
import "@testing-library/jest-dom";

// Mock Next.js router
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: {},
    pathname: "/",
    asPath: "/",
  }),
}));

// Mock Next.js Head
jest.mock("next/head", () => ({
  __esModule: true,
  default: ({ children }) => children,
}));

// Mock Next.js Image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text,@next/next/no-img-element
    return <img {...props} />;
  },
}));
