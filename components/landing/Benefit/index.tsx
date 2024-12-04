export default function BenefitSection() {
  return (
    <section className="benefit__section max-w-5xl mx-auto py-10 px-10 lg:px-0 container">
      <div className="headline__container flex flex-col gap-y-5 items-center justify-center max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold">
                    With our <span className="text-primary">expert</span> guidance and support
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg font-medium">Don&apos;t wait - Sign up now and
                    start growing your business todays</p>
      </div>
      <div className="flex flex-col max-w-xl mx-auto items-center justify-center gap-y-5 py-10">
        <div className="flex flex-col md:flex-row gap-y-5 items-center justify-center gap-x-5 w-full">
          <div
            className="flex flex-col items-center justify-center gap-y-2 border border-black/10 rounded-lg p-5 py-10 w-full lg:w-1/2">
            <p className="font-semibold text-4xl lg:text-5xl text-primary">300M</p>
            <p className="text-base lg:text-lg font-medium">Monthly Active User</p>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-y-2 w-full lg:w-1/2 rounded-lg border border-black/10 p-5 py-10">
            <p className="font-semibold text-4xl lg:text-5xl text-primary">100k</p>
            <p className="text-base lg:text-lg font-medium">Active Communities</p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-y-2 w-full rounded-lg border border-black/10 p-5 py-10">
          <p className="text-base md:text-xl xl:text-2xl font-semibold max-w-sm xl:max-w-md text-center">Reddit
                        attracts more than <span className="text-primary">430M </span>Monthly Active Users</p>
        </div>
      </div>
    </section>
  );
}
