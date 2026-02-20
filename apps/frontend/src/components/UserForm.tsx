import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createUser, getUsers } from '../api/users';
import { EmptyState, ErrorState } from './StatusState';

const userFormSchema = z.object({
  name: z.string().min(2, 'İsim en az 2 karakter olmalı.'),
  email: z.string().email('Geçerli bir e-posta girin.')
});

type UserFormValues = z.infer<typeof userFormSchema>;

const USERS_QUERY_KEY = ['users'];

export function UserForm() {
  const queryClient = useQueryClient();
  const usersQuery = useQuery({
    queryKey: USERS_QUERY_KEY,
    queryFn: getUsers
  });

  const { register, handleSubmit, reset, formState } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    mode: 'onBlur'
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
      reset();
    }
  });

  const onSubmit = (values: UserFormValues) => {
    createUserMutation.mutate(values);
  };

  return (
    <div className="space-y-4">
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)} noValidate>
        <label className="block">
          <span className="text-sm font-medium">İsim</span>
          <input className="mt-1 w-full rounded border p-2" {...register('name')} />
          {formState.errors.name ? <p className="text-sm text-red-600">{formState.errors.name.message}</p> : null}
        </label>

        <label className="block">
          <span className="text-sm font-medium">E-posta</span>
          <input className="mt-1 w-full rounded border p-2" {...register('email')} />
          {formState.errors.email ? (
            <p className="text-sm text-red-600">{formState.errors.email.message}</p>
          ) : null}
        </label>

        <button
          className="rounded bg-blue-600 px-3 py-2 text-sm font-medium text-white disabled:bg-slate-400"
          disabled={createUserMutation.isPending}
          type="submit"
        >
          Kaydet
        </button>
      </form>

      {usersQuery.isError ? (
        <ErrorState
          title="Kullanıcı listesi alınamadı"
          message="Servise ulaşılamıyor. Lütfen tekrar deneyin."
          onRetry={() => usersQuery.refetch()}
        />
      ) : null}

      {usersQuery.isSuccess && usersQuery.data.length === 0 ? (
        <EmptyState title="Henüz kullanıcı yok" message="İlk kullanıcıyı yukarıdaki form ile ekleyin." />
      ) : null}
    </div>
  );
}
