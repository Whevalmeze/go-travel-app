import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
export default function Layout({ children }) {
  return (
        <div className="h-screen w-full">
          <section className="bg-[#F0F2F5] gap-4 p-4 w-full h-[90%] flex">
            <Sidebar />
            {children}
          </section>
        </div>
  );
}
