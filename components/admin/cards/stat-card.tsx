import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card x-chunk='A card showing the total revenue in USD and the percentage difference from last month.'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{value}</div>
        <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}
