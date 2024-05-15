import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";

const Calendar = () => {
  const { fetchedData, loading } = useFetchData("company-profile");
  if (fetchedData) {
    return (
      <div>
        <Link
          href={fetchedData?.calendar_link}
          target="__blank"
          style={{
            backgroundColor: "var(--accent-color)",
            color: "white",
          }}
          className="fixed top-[50%]   hover:cursor-pointer rotate-90 translate-x-[56px] px-6 py-3 rounded-l-[4px] rounded-r-[4px]     right-0 z-50"
        >
          View Calendar
        </Link>
      </div>
    );
  } else if (loading) {
    return <div>Loading</div>;
  }
};

export default Calendar;
