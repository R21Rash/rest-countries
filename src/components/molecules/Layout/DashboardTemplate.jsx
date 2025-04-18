import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";

const DashboardTemplate = ({ children }) => {
  return (
    <div className="bg-white text-black dark:bg-brand-dark dark:text-white blue:bg-brand-blue">
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <main className="flex-1 p-4 max-w-7xl w-full mx-auto">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardTemplate;
