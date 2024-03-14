'use client';

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorBoundary({ error, reset }: Props) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
