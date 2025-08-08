export function SkeletonCard() {
  return (
    <div className="bg-white shadow-sm border rounded-lg overflow-hidden animate-pulse">
      <div className="bg-gray-200 aspect-video" />
      <div className="space-y-3 p-4">
        <div className="bg-gray-200 rounded w-3/4 h-4" />
        <div className="bg-gray-200 rounded w-1/2 h-3" />
        <div className="flex justify-between">
          <div className="bg-gray-200 rounded w-1/4 h-3" />
          <div className="bg-gray-200 rounded w-1/4 h-3" />
        </div>
      </div>
    </div>
  );
}

export default function SkeletonGrid() {
  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}
