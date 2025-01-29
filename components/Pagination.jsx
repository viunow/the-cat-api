import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ total, current, onChange }) {
  const handlePrev = () => {
    if (current > 1) {
      onChange(current - 1);
      scrollToTop();
    }
  };

  const handleNext = () => {
    if (current < total) {
      onChange(current + 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrev}
        disabled={current === 1}
        className="flex items-center justify-center p-2 rounded-lg disabled:opacity-50 bg-gray-100 hover:bg-gray-200"
      >
        <ChevronLeft size={20} />
      </button>
      <span className="px-4 text-sm font-medium">
        Página {current} de {total}
      </span>
      <button
        onClick={handleNext}
        disabled={current === total}
        className="flex items-center justify-center p-2 rounded-lg disabled:opacity-50 bg-gray-100 hover:bg-gray-200"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
