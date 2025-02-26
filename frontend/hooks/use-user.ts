"use client";

import { useEffect, useState } from "react";
import { AuthError, Session, User } from "@supabase/supabase-js";
import { jwtDecode } from "jwt-decode";
import type { JwtPayload } from "jwt-decode";
import { createClient } from "@/lib/supabase/client";

type SupabaseJwtPayload = JwtPayload & {
  app_metadata: {
    role: string;
  };
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const supabase = createClient();

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;

        if (session) {
          setSession(session);
          setUser(session.user);
          const decodedJwt = jwtDecode<SupabaseJwtPayload>(session.access_token);
          setRole(decodedJwt.app_metadata.role);
        } else {
          setUser(null);
          setSession(null);
        }
      } catch (error) {
        setError(error as AuthError);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();

    // Suscripción a los cambios de autenticación (PKCE, sign-out, etc.)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setSession(session ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, [supabase]);

  return { loading, error, session, user, role };
}
