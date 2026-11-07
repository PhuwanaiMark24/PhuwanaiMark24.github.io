import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Without Vitest globals, Testing Library cannot clean up on its own,
// so each test would see components left over from earlier tests.
afterEach(() => {
  cleanup();
});
