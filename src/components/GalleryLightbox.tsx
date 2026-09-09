import { IconX } from "@tabler/icons-react";
import { useEffect } from "react";

export function GalleryLightbox({
  images,
  index,
  title,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  const current = images[index];
  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white"
        onClick={onClose}
        aria-label="Close gallery"
      >
        <IconX />
      </button>
      <img
        src={current}
        alt={`${title} screenshot ${index + 1}`}
        className="max-h-[85vh] max-w-full rounded-xl object-contain"
        onClick={(event) => event.stopPropagation()}
      />
      {images.length > 1 ? (
        <div className="absolute bottom-6 flex gap-3">
          <button
            type="button"
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
          >
            Previous
          </button>
          <button
            type="button"
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
