import LoadingSpinner from '@/components/LoadinSpinner/LoadingSpinner';

const Loading = () => {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen  fixed z-50 w-full">
      <LoadingSpinner
        style="loading-bars"
        size="loading-lg"
        color="text-primary"
      />
    </div>
  );
}

export default Loading;