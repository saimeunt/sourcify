import { Request } from "express";
import { Session } from "../../types";

export const getSession = async (req: Request): Promise<Session | null> => {
  const appUrl =
    process.env.NODE_ENV !== "production"
      ? "http://evm.walnut.local"
      : "https://evm.walnut.dev";
  const response = await fetch(`${appUrl}/api/auth/session`, {
    headers: { Cookie: req.headers.cookie! },
  });
  const result = await response.json();
  if (!result) {
    return null;
  }
  const { session } = result as { session: Session };
  return session;
};
