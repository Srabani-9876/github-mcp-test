import { login } from "./login";

/** Short label stored with a MAIA GitHub MCP test session. */
export function sessionLabel(username: string): string {
  const handle = username.trim();
  if (!handle) {
    throw new Error("username is required");
  }
  return login(handle);
}
