export type CreateUserPayload = {
  name: string;
  email: string;
};

export type User = CreateUserPayload & { id: string };

export async function createUser(payload: CreateUserPayload): Promise<User> {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Kullanıcı oluşturulamadı.');
  }

  return response.json() as Promise<User>;
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch('/api/users');

  if (!response.ok) {
    throw new Error('Kullanıcılar yüklenemedi.');
  }

  return response.json() as Promise<User[]>;
}
