import React from 'react';
import Image from 'next/image';

function Index() {
  return (
    <section className="hero relative isolate">
      <div
        className="w-48 h-48 left-10 top-10 absolute -z-10 bg-red-400 bg-opacity-90 rounded-full blur-[300px]"/>
      <div
        className="w-72 h-72 left-20 top-20 absolute -z-10 bg-blue-400 bg-opacity-70 rounded-full blur-[300px]"/>
      <div
        className="hero__container max-w-5xl px-5 lg:px-10 mx-auto flex flex-col gap-y-10 items-center justify-between py-10 lg:py-24">
        <div className="hero-content flex items-center justify-center flex-col gap-y-3.5 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl relative font-black max-w- md:max-w-2xl lg:max-w-3xl mx-auto text-center text-zinc-800">
          {/* Her ihtiyacınıza uygun akıllı promptlar burada! */}
          {/* ​Yazmaya çalıştığın prompt’un daha iyisi çoktan yazıldı. */}
          Daha iyi prompt&apos;lar,
          <br></br>
          daha iyi sonuçlar.
          </h2>
          <p className="font-medium text-center lg:text-left max-w-xs mx-auto lg:max-w-full text-base lg:text-lg">
          {/* ​Yazmaya çalıştığın prompt’un daha iyisi çoktan yazıldı. */}
          {/* Her ihtiyacına uygun akıllı promptlar! */}
          En iyi prompt&apos;lar artık tek bir yerde.
          </p>
          <button
            className="bg-primary w-1/2 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-background font-semibold text-sm lg:text-base rounded px-4 py-2">
                        Hemen topluluğumuza katıl!
          </button>
          <div className="pt-5 flex items-center jus flex-col gap-y-2 relative">
            <div className="absolute -left-5 top-10">
              <Image src="/arrow.svg" alt="arrow" width={24} height={24}/>
            </div>
            <Image src="/hero-user-face.jpg" alt="hero user faces" width={200} height={200}/>
            <p className="font-medium text-slate-500/80">
                            En son topluluğumuza katılan harika insanlar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index;
