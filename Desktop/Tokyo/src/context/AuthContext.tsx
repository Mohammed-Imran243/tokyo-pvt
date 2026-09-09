import React, { createContext, useContext, useState, useCallback } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// SHA-256 hash of the access password (client-side gate only — not real server-side security)
const EXPECTED_HASH = 'addd72afc1bf263c3fe80c997c6ce5cb9daaa69cb23532cae58da5bb6f5d03de';

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

const AUTH_KEY = 'kullachi_auth';
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

function getStoredAuth(): boolean {
  try {
    const stored = localStorage.getItem(AUTH_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      if (data.ts && Date.now() - data.ts < SESSION_DURATION) {
        return true;
      }
      localStorage.removeItem(AUTH_KEY);
    }
  } catch {
    // ignore corrupted data
  }
  return false;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getStoredAuth);

  const login = useCallback(async (password: string): Promise<boolean> => {
    const hash = await sha256(password.trim().toLowerCase());
    if (hash === EXPECTED_HASH) {
      setIsAuthenticated(true);
      localStorage.setItem(AUTH_KEY, JSON.stringify({ ts: Date.now() }));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem(AUTH_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
