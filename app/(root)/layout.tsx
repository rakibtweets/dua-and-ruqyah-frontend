import { BreakPointIndicator } from '@/components/BreakPointIndicator/BreakPointIndicator';
import MobileNav from '@/components/shared/navnar/MobileNav';
import Navbar from '@/components/shared/navnar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="z-0  lg:inset-x-0 xl:inset-x-0 xl:p-6 xl:pb-0 2xl:px-10 2xl:pt-6 2xl:inset-x-0 3xl:p-10 3xl:pb-0 d 3xl:inset-x-0">
      {/* <Navbar /> */}
      <div className=" h-16 rounded-3xl text-center">
        <MobileNav />
        <Navbar />
      </div>
      <div className="flex flex-col  lg:flex-row lg:overflow-hidden justify-center gap-8">
        {/* Icons */}
        <div className="bg-green-500 rounded-3xl px-4 dark:bg-dark-bg lg:h-[calc(85vh)] xl:h-[85vh] 2xl:h-[85vh] 3xl:h-[85vh] scrl-left pb-16">
          <div className="flex flex-col mt-7 mb-10 2xl:mb-16 gap-y-6 container">
            <div>Logo</div>
            <div>Icons</div>
            <div>Icons</div>
            <div>Icons</div>
            <div>Icons</div>
            <div>Icons</div>
          </div>
        </div>
        {/* categories */}
        <div className=" bg-orange-500 text-center rounded-3xl h-[85vh] z-0 lg:w-[350px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[350px] overflow-hidden  rounded-2lg  xs:hidden  xs:h-screen sm:h-screen lg:h-[85vh] xl:h-[85vh] 2xl:h-[85vh]">
          Categories
        </div>
        {/* content */}
        <section className="flex bg-blue-400 min-h-screen flex-1 flex-col px-4 pb-6  max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>

        {/* setting */}
        <div className=" bg-cyan-500 text-center rounded-3xl h-[85vh] z-0 lg:w-[350px] xl:w-[350px] 2xl:w-[350px] 3xl:w-[350px] overflow-hidden  rounded-2lg  xs:hidden  xs:h-screen sm:h-screen lg:h-[85vh] xl:h-[85vh] 2xl:h-[85vh]">
          settings
        </div>
      </div>
      <BreakPointIndicator />
    </main>
  );
};

export default Layout;
