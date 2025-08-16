import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;              // картинка "до"
  after: string;               // картинка "после"
  altBefore?: string;
  altAfter?: string;
  initial?: number;            // стартовая позиция (0..100), по умолчанию 50
  className?: string;
};

export default function BeforeAfter({
                                      before,
                                      after,
                                      altBefore = "Przed",
                                      altAfter = "Po",
                                      initial = 50,
                                      className = "",
                                    }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(initial);

  const clamp = (n: number, min: number, max: number) =>
    Math.min(max, Math.max(min, n));

  const update = (clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = clamp(clientX - r.left, 0, r.width);
    setPct(Math.round((x / r.width) * 100));
  };

  return (
    <div
      ref={box}
      className={
        "relative aspect-square rounded-2xl overflow-hidden select-none " +
        "bg-black/5 group cursor-col-resize " +
        className
      }
      onPointerDown={(e) => {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => {
        if (e.buttons !== 1) return;
        update(e.clientX);
      }}
    >
      {/* нижняя (после) */}
      <img src={after} alt={altAfter} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* верхняя (до) – видна слева до линии */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pct}%` }}>
        <img src={before} alt={altBefore} className="w-full h-full object-cover" draggable={false} />
      </div>

      {/* вертикальная линия и «ручка» */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pct}%` }} aria-hidden>
        <div className="absolute inset-y-0 -translate-x-1/2 w-px bg-white/80 shadow" />
        <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow ring-1 ring-black/5 grid place-items-center">
          <MoveHorizontal className="w-4 h-4 text-mint-600" />
        </div>
      </div>

      {/* доступность: управление клавиатурой */}
      <div
        role="slider"
        aria-label="Porównanie przed/po"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPct((p) => clamp(p - 2, 0, 100));
          if (e.key === "ArrowRight") setPct((p) => clamp(p + 2, 0, 100));
        }}
        className="absolute inset-0 outline-none focus-visible:ring-2 focus-visible:ring-mint-500/70"
      />
    </div>
  );
}
