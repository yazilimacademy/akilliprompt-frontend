import Main from '@/components/Main';

export default async function Authlayout({ children }: { children: React.ReactNode }) {
  return (
    <Main className="grid grid-cols-1 lg:grid-cols-[60%_40%] space-y-5 lg:space-y-0">
      <div className="w-full px-[15%] py-10 grid place-content-center">
        {children}
      </div>
      <article
        className="w-full bg-primary min-h-screen h-full p-5 px-16 text-background grid place-content-center">
        <div className="space-y-5 container">
          <h2 className="text-4xl">Akıllı Prompt Platformu</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum posuere semper.
            Cras
            porttitor purus sit amet blandit volutpat. Fusce vitae sapien eget ex ultricies posuere eu ac
            lectus. Vestibulum malesuada urna maximus turpis porta, et pulvinar eros molestie. Fusce
            fringilla
            risus eget neque luctus, vel auctor libero varius. Morbi rhoncus magna ex, quis iaculis urna
            tincidunt quis. Suspendisse consequat facilisis nibh vitae tristique. Aliquam viverra ipsum at
            accumsan faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos
            himenaeos. Suspendisse tempor elementum dolor, et porta felis eleifend ut. Mauris tempor gravida
            varius. Sed a metus quis metus porta vestibulum. Donec dictum feugiat dolor, eu congue elit
            porta
            sit amet.
          </p>
        </div>
      </article>
    </Main>
  );
}