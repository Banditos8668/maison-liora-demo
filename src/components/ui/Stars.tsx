interface StarsProps {
  rating: number;
  max?: number;
}

export function Stars({ rating, max = 5 }: StarsProps) {
  return (
    <div className="stars" aria-label={`Rating: ${rating} out of ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i}>{i < Math.round(rating) ? '★' : '☆'}</span>
      ))}
    </div>
  );
}
