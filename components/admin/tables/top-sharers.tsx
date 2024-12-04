import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sharers = [
  {
    name: "Alper Tunga",
    email: "alper.tunga@email.com",
    amount: "500",
  },
  {
    name: "Merve Eksi",
    email: "merve.eksi@email.com",
    amount: "250",
  },
  {
    name: "Serkan Atmaca",
    email: "serkan.atmaca@email.com",
    amount: "200",
  },
  {
    name: "Emirhan Kara",
    email: "emirhan.kara@email.com",
    amount: "150",
  },
];

export default function TopSharers() {
  return (
    <Card x-chunk='A card showing the top sharers.' className="w-full">
      <CardHeader>
        <CardTitle>Top Sharers</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-8'>
        {sharers.map((sharer, index) => (
          <div key={index} className='flex items-center gap-4'>
            <Avatar className='hidden h-9 w-9 sm:flex'>
              <AvatarImage src='/avatars/01.png' alt='Avatar' />
              <AvatarFallback>
                {sharer.name.split(" ")[0][0].toUpperCase()}
                {sharer.name.split(" ")[1][0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className='grid gap-1'>
              <p className='text-sm font-medium leading-none'>{sharer.name}</p>
              <p className='text-sm text-muted-foreground'>{sharer.email}</p>
            </div>
            <div className='ml-auto font-medium'>{sharer.amount}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
