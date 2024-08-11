import { NavSidebar } from '@/features/nav-sidebar'

const MainLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-base-200 h-full rounded-2xl text-opacity-65 shadow-lg">
        <main className="h-full overflow-scroll rounded-lg p-8 md:mr-[350px]">{children}</main>
        <div className="h-sidebar fixed right-[1.25rem] top-[1.25rem] z-30 hidden w-[350px] p-5 md:flex">
            <NavSidebar />
        </div>
    </div>
)

export default MainLayout
