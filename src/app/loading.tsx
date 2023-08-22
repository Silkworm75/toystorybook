import LoadingSpinner from '@/components/LoadinSpinner/LoadingSpinner';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <LoadingSpinner
        style="loading-bars"
        size="loading-lg"
        color="text-primary"
      />
    </div>
  );
}
