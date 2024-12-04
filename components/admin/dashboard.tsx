import {
  Activity,
  Package2,
  Sparkle,
  Users
} from "lucide-react";

import { StatsChartCard } from "./cards";
import StatCard from "./cards/stat-card";
import LatestShares from "./tables/latest-shares";
import TopSharers from "./tables/top-sharers";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image. The main content area is divided into two rows. The first row has a grid of cards with statistics. The second row has a grid of cards with a table of recent transactions and a list of recent sales.";

export const iframeHeight = "730px";

export const containerClassName = "w-full h-full";

const stats = [
  {
    title: "Total Prompts",
    value: "200",
    icon: <Sparkle className='h-6 w-6' />,
  },
  {
    title: "Total Categories",
    value: "50",
    icon: <Package2 className='h-6 w-6' />,
  },
  {
    title: "Total Users",
    value: "100",
    icon: <Users className='h-6 w-6' />,
  },
  {
    title: "Total Shares",
    value: "50",
    icon: <Activity className='h-6 w-6' />,
  },
];

export default function Dashboard() {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8'>
        <div className='grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              x-chunk={`A card with a title, value, and icon. The title is ${stat.title}, the value is ${stat.value}, and the icon is ${stat.icon}.`}
            />
          ))}
        </div>
        <div className='grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2'>
          <LatestShares />
          <TopSharers />
          <StatsChartCard />
        </div>
      </main>
    </div>
  );
}
