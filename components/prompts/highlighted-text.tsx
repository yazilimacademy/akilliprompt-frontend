import { getRandomColor } from '@/lib/utils';

export default function HighlightedText({ text }: { text: string }) {
  const parts = text.split(/({{[^}]+}})/g);

  return (
    <div>
      {parts.map((part, index) => {
        if (part.startsWith('{{') && part.endsWith('}}')) {
          return (
            <span
              key={index}
              style={{
                color: 'white',
                backgroundColor: getRandomColor(),
                fontWeight: 'bold',
                width: 'fix',
                borderRadius: '4px'
              }}
              className='p-1'
            >
              {part.slice(2, -2)}
            </span>
          );
        } else {
          // Regular text
          return <span key={index}>{part}</span>;
        }
      })}
    </div>
  );
}
