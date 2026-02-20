type StatusStateProps = {
  title: string;
  message: string;
  retryLabel?: string;
  onRetry?: () => void;
};

export function ErrorState({ title, message, retryLabel = 'Tekrar dene', onRetry }: StatusStateProps) {
  return (
    <section role="alert" className="rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm">{message}</p>
      {onRetry ? (
        <button onClick={onRetry} className="mt-3 rounded bg-red-600 px-3 py-2 text-sm font-medium text-white">
          {retryLabel}
        </button>
      ) : null}
    </section>
  );
}

export function EmptyState({ title, message }: StatusStateProps) {
  return (
    <section className="rounded-lg border border-slate-300 bg-slate-50 p-4 text-slate-900">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm">{message}</p>
    </section>
  );
}
