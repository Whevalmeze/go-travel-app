import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
export default function Layout({ children }) {
  return (
        <div className="w-full h-full gap-4 flex">
            <Sidebar />
          <section className="bg-[#F0F2F5] gap-4 w-full h-full flex">
            {children}
          </section>
        </div>
  );
}
