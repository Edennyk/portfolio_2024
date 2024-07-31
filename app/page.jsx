import Social from "@/components/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center pt-50 gap-4">
          <div className="text-center flex flex-col items-center w-full">
            <h1 className="h1 mt-8 mb-8 top-text-stroke">Hello <span>I&rsquo;m Eden</span></h1>
            <span className=" name-text bottom-text-stroke">Frontend Developer</span>
          </div>
          <div className="flex flex-col items-center gap-7">
            <div className="mb-8 xl:mb-0">
              <Social 
                containerStyles="flex flex-row gap-4"
                iconStyles="text-6xl w-20 h-20 border border-accent rounded-full flex justify-center
                items-center text-accent hover:text-primary hover:bg-accent hover:transition-all
                duration-500"
              />
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Home;