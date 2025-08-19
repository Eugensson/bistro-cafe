export const Newsletter = () => {
  return (
    <section className="bg-none lg:bg-[url(/assets/newsletter/bg.png)] bg-cover bg-no-repeat bg-center lg:px-24 lg:h-55 xl:bg-auto">
      <div className="h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-4">
          <h3 className="text-[26px] font-primary italic text-white capitalize mb-2">
            join our newsletter
          </h3>
          <p>Get latest news & updates in your inbox.</p>
        </div>
        <form className="flex flex-col lg:flex-row items-center gap-y-4 lg:gap-x-2.5">
          <input
            type="text"
            placeholder="Subscribe our delicious dishes"
            className="input"
          />
          <button
            type="button"
            className="btn w-full lg:max-w-[204px] capitalize"
          >
            subscribe now
          </button>
        </form>
      </div>
    </section>
  );
};
