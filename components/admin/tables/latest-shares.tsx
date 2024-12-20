import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const shareDatas = [
  {
    name: 'Alper Tunga',
    email: 'alper.tunga@email.com',
    likes: '500',
    comments: '10',
    status: 'Active',
    date: '2023-06-23',
  },
  {
    name: 'Merve Eksi',
    email: 'merve.eksi@email.com',
    likes: '250',
    comments: '5',
    status: 'Active',
    date: '2023-06-22',
  },
  {
    name: 'Serkan Atmaca',
    email: 'serkan.atmaca@email.com',
    likes: '200',
    comments: '3',
    status: 'Active',
    date: '2023-06-21',
  },
  {
    name: 'Emirhan Kara',
    email: 'emirhan.kara@email.com',
    likes: '150',
    comments: '2',
    status: 'Active',
    date: '2023-06-20',
  },
];

export default function LatestShares() {
  return (
    <Card
      className='xl:col-span-2'
      x-chunk='A card showing the latest shares.'
    >
      <CardHeader className='flex flex-row items-center'>
        <div className='grid gap-2'>
          <CardTitle>Latests Shares</CardTitle>
          <CardDescription>Recent shares from users.</CardDescription>
        </div>
        <Button asChild size='sm' className='ml-auto gap-1'>
          <Link href='#'>
            View All
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sharer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shareDatas.map((shareData, index) => (
              <TableRow key={index} className='w-full'>
                <TableCell className='hidden md:table-cell'>
                  <div className='font-medium'>{shareData.name}</div>
                  <div className='hidden text-sm text-muted-foreground md:inline'>
                    {shareData.email}
                  </div>
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  <Badge className='text-xs' variant='outline'>
                    {shareData.status}
                  </Badge>
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {shareData.date}
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {shareData.comments}
                </TableCell>
                <TableCell className='hidden md:table-cell'>
                  {shareData.likes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
