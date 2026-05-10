const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export type Service = {
  id: string;
  name: string;
  slug: string;
};

export async function getServices(): Promise<Service[]> {
  const res = await fetch(`${API_URL}/api/v1/services`);
  if (!res.ok) return [];
  const data = await res.json();
  // API may return { data: [...] } or directly an array
  return Array.isArray(data) ? data : (data.data ?? []);
}

export type ReferralPayload = {
  referralType?: 'GENERAL' | 'OOT';
  // Participant
  participantName: string;
  participantDob?: string;
  ndisNumber?: string;
  participantPhone?: string;
  participantAddress?: string;
  // Referrer
  referrerName: string;
  referrerOrganisation?: string;
  referrerEmail: string;
  referrerPhone?: string;
  referrerRoles?: string[];
  // Clinical
  primaryReason?: string;
  referralReasons?: string[];
  areasOfConcern?: string[];
  desiredOutcomes?: string[];
  urgency?: 'ROUTINE' | 'STANDARD' | 'URGENT';
  preferredContact?: 'EMAIL' | 'PHONE';
  // Optional
  additionalNotes?: string;
  privacyConsent: boolean;
  serviceId?: string;
};

export type ReferralResponse = {
  id: string;
  participantName: string;
  referrerEmail: string;
  status: string;
  createdAt: string;
};

export async function submitReferral(payload: ReferralPayload): Promise<ReferralResponse> {
  // Prisma requires full ISO datetime; HTML date inputs return YYYY-MM-DD only
  const normalized: ReferralPayload = {
    ...payload,
    participantDob:
      payload.participantDob && !payload.participantDob.includes('T')
        ? `${payload.participantDob}T00:00:00.000Z`
        : payload.participantDob,
  };

  const res = await fetch(`${API_URL}/api/v1/referrals`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(normalized),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message ?? `Request failed with status ${res.status}`);
  }

  return res.json();
}
