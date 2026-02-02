export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="relative">
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}