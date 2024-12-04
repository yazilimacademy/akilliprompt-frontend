function CtaSection() {
  return (
    <section className="max-w-5xl mx-auto py-14 lg:pb-20 px-5 lg:px-0">
      <div className="rounded-2xl mx-auto flex flex-col gap-y-5 justify-center items-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl max-w-xl lg:max-w-3xl mx-auto font-bold text-black text-center">
                    Get a list of{' '}
          <span className="text-primary">potential customerst</span> for your
                    business in 5 mins
        </h3>
        <p className="text-3xl lg:text-4xl">👇</p>
        <button
          className="bg-primary w-1/2 md:w-1/3 hover:shadow-lg border border-transparent hover:drop-shadow transition duration-200 lg:w-1/3 text-background font-semibold text-sm lg:text-base rounded px-4 py-2">
                    Register for free
        </button>
      </div>
    </section>
  );
}

export default CtaSection;
