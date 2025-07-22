

export default function Simmer(){
  return (
    <div className="w-[80%] mt-30 container justify-center mx-auto flex flex-wrap gap-5 pb-5">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden p-4 space-y-4 animate-pulse">
          {/* Placeholder for text from API with truncation */}
          <div className="h-50 w-full bg-gray-300 rounded truncate">
          </div>
          {/* Additional placeholder elements */}
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}