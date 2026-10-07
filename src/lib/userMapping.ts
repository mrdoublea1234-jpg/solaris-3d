// Mapping of known user emails to their production Clerk / Supabase IDs
export const PROD_USER_EMAIL_MAP: Record<string, string> = {
  'selldigitalproducts24@gmail.com': 'user_3IGrysbzIWG337CtcHZAE9HX7wg',
  'mrdoublea1234@gmail.com': 'user_3JIw1kkPHrERR4vgTvCC1KEc54D',
  'meherdon19@gmail.com': 'user_3JIw1kkPHrERR4vgTvCC1KEc54D',
  'sellproducts1234@gmail.com': 'user_3IGxNHmWCPS8PUbzob2DbIWk97k',
  'nurjahankhatun56948@gmail.com': 'user_3IV5Fwmn6yOtAeVPqTutxaz20MG',
  'videobackup8145@gmail.com': 'user_3IIhFMe2w6cU2KtImltBUtKW9RS',
  'omd188950@gmail.com': 'user_3JH7bxuAAbUmONIItVHSVbc9oP3',
  'shreyas232005@gmail.com': 'user_3JJ9jbVeDjHJM7g1pIeVg5KQSFL',
  'hecrereed@gmail.com': 'user_3JYFyVDesCzWoHnpKzjxV42Nluo'
};

/**
 * Resolves the canonical/effective production user ID for Supabase queries.
 * When running in development mode (e.g. keyless dev), the Clerk user ID is different
 * from production. This helper maps the user's Google email to their canonical
 * production user ID so that their historical likes and saves load seamlessly.
 */
export function getEffectiveUserId(user: any): string {
  if (!user) return '';

  if (typeof user === 'string') {
    return PROD_USER_EMAIL_MAP[user.toLowerCase()] || user;
  }

  const emails: string[] = [];
  if (Array.isArray(user.emailAddresses)) {
    user.emailAddresses.forEach((e: any) => {
      if (typeof e === 'string') emails.push(e.toLowerCase());
      else if (e?.emailAddress) emails.push(e.emailAddress.toLowerCase());
    });
  }
  if (user.primaryEmailAddress?.emailAddress) {
    emails.push(user.primaryEmailAddress.emailAddress.toLowerCase());
  }
  if (user.email) {
    emails.push(user.email.toLowerCase());
  }

  for (const email of emails) {
    if (PROD_USER_EMAIL_MAP[email]) {
      return PROD_USER_EMAIL_MAP[email];
    }
  }

  return user.id || '';
}

/**
 * Returns all potential user IDs for a given user (both current dev ID and canonical prod ID).
 * This ensures queries find records created in either development or production.
 */
export function getAllUserIds(user: any): string[] {
  if (!user) return [];
  const ids = new Set<string>();

  if (typeof user === 'string') {
    ids.add(user);
    if (PROD_USER_EMAIL_MAP[user.toLowerCase()]) {
      ids.add(PROD_USER_EMAIL_MAP[user.toLowerCase()]);
    }
    return Array.from(ids);
  }

  if (user.id) ids.add(user.id);
  const effectiveId = getEffectiveUserId(user);
  if (effectiveId) ids.add(effectiveId);
  return Array.from(ids);
}
