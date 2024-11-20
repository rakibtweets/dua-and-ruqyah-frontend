import { BreakPointIndicator } from '@/components/BreakPointIndicator/BreakPointIndicator';
import Category from '@/components/Category/Category';
import Profile from '@/components/Profile/Profile';
import SearchBar from '@/components/SearchBar/SearchBar';
import MobileNav from '@/components/shared/navnar/MobileNav';
import Sidebar from '@/components/shared/sidebar/sidebar';
import { Card } from '@/components/ui/card';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="z-0 p-4 lg:p-0 ">
      {/* <Navbar /> */}
      <div className="flex flex-col  lg:flex-row lg:overflow-hidden justify-center gap-8">
        <MobileNav />
        {/* <div className=" h-16 rounded-3xl text-center">
        <Navbar />
      </div> */}

        {/* Icons */}
        <Card className="hidden xl:flex rounded-3xl w-[100px]  px-4 lg:my-7 lg:h-[91vh] xl:h-[92vh] 2xl:h-[93vh] 3xl:h-[94vh] overflow-y-auto custom-scrollbar pb-16">
          <Sidebar />
        </Card>

        {/* categories */}
        <div className="lg:w-[22.34vw] flex flex-col lg:gap-5  lg:my-7">
          <Category />
        </div>

        {/* content */}
        <div className="lg:w-[46.35vw] flex flex-col lg:gap-5 lg:h-[92vh] lg:mt-7">
          <div className="h-[6vh] hidden lg:flex justify-end">
            <SearchBar />
          </div>
          <div className="lg:h-fit overflow-y-auto rounded-lg lg:rounded-xl bg-white">
            {children}
          </div>
        </div>

        {/* setting */}
        {/* ---------- Settings ---------- */}
        <div className="lg:w-[17.19vw] flex flex-col lg:gap-5 lg:h-[92vh] lg:my-7">
          <Profile />
          <Card className="lg:h-[86vh] hidden lg:flex bg-white rounded-2xl">
            Settings
          </Card>
        </div>
      </div>
      <BreakPointIndicator />
    </main>
  );
};

export default Layout;
