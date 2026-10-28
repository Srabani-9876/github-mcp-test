// TODO: retry login when the token refresh times out.
export function login(username: string): string {
  return `session for ${username}`;
}

// Retry once when the refresh call exceeds the timeout.
