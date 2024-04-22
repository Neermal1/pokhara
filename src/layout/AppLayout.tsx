import Footer from "@/components/Footer/components/Footer";
import Header from "../components/Header/Header";

interface ILayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="">
      <div className="bg-white">
        <div className="">
          <Header />
        </div>
        <main>{children}</main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
