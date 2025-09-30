export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

interface SessionPayload {
  user: User;
  createdAt: string;
  expiresAt: string; // ISO timestamp
}

export class UserRepository {
  private static readonly USERS_KEY = 'users';
  private static readonly SESSION_KEY = 'session';

  static getAllUsers(): User[] {
    if (typeof window === 'undefined') return [];
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  static saveUser(user: User): void {
    const users = this.getAllUsers();
    localStorage.setItem(this.USERS_KEY, JSON.stringify([...users, user]));
  }

  static findUserByEmail(email: string): User | undefined {
    const users = this.getAllUsers();
    return users.find(user => user.email === email);
  }

  static setSession(user: User, ttlHours: number = 6): void {
    const now = new Date();
    const expires = new Date(now.getTime() + ttlHours * 60 * 60 * 1000);
    const payload: SessionPayload = {
      user,
      createdAt: now.toISOString(),
      expiresAt: expires.toISOString(),
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(payload));
  }

  static getSession(): User | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(this.SESSION_KEY);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw) as SessionPayload | User;

      // Backward compatibility: if legacy structure (plain User), clear it
      if ((parsed as any).email && !(parsed as any).expiresAt) {
        localStorage.removeItem(this.SESSION_KEY);
        return null;
      }

      const payload = parsed as SessionPayload;
      const now = new Date();
      const expiresAt = new Date(payload.expiresAt);
      if (now > expiresAt) {
        localStorage.removeItem(this.SESSION_KEY);
        return null;
      }
      return payload.user;
    } catch {
      localStorage.removeItem(this.SESSION_KEY);
      return null;
    }
  }

  static clearSession(): void {
    localStorage.removeItem(this.SESSION_KEY);
  }

  static isAuthenticated(): boolean {
    return this.getSession() !== null;
  }
}
