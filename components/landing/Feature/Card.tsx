interface CardProps {
    title: string;
    description: string;
    emoji: string
}

export default function Card({title, description, emoji}: CardProps) {
  return (
    <div
      className="bg-secondary border border-orange-300/50 rounded-xl p-6 flex flex-col gap-y-6">
      <div className="card-content flex flex-col gap-y-2">
        <p className="text-xl">{emoji}</p>
        <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
        <p className="text-base text-foreground/60 font-medium">{description}</p>
      </div>
    </div>
  );
}

