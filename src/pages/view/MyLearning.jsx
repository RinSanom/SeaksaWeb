import { useState } from "react";
import { IoMdAlarm } from "react-icons/io";
import CartComponent from "../../components/ui/CartComponent";

import { MorkUpData } from "../../lib/data/MorkUpData";
const CourseContent = ({ isRemind = true, value = 1 }) => {
  // Fetch data from MorkUpData
  const data = MorkUpData;
  // Fetch data from favouriteCoursesData
  const favouriteCourse = JSON.parse(localStorage.getItem("bookmark")) || [];

  return (
    <div>
      {isRemind && <RemindLearning />}

      {value === 1 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
          {data.map((item) => (
            <CartComponent id={item.id} key={item.id} />
          ))}
        </div>
      )}

      {value === 2 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
          {
            // Filter data based on the id in favouriteCourses
            data.length != 0 && favouriteCourse.length != 0 ? (
              data
                .filter((item) => favouriteCourse.includes(item.id))
                .map((item) => <CartComponent id={item?.id} key={item.id} />)
            ) : (
              <p className="text-left text-lg font-bold">
                No Favourite Courses
              </p>
            )
          }
        </div>
      )}

      {value === 3 && (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-6">
          {[...Array(5)].fill().map((_, index) => (
            <CartComponent id={index + 1} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

const TabSection = ({ isRemind = true }) => {
  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full mt-8 ">
      <div className="flex">
        <button
          onClick={() => handleChange(1)}
          className={`px-4 py-2 text-sm font-bold transition-all duration-300 dark:text-textDark ${
            value === 1
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700 "
          }`}
          role="tab"
          aria-selected={value === 1}
        >
          All Courses
        </button>
        <button
          onClick={() => handleChange(2)}
          className={`px-4 py-2 text-sm font-bold transition-all duration-300 dark:text-textDark ${
            value === 2
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          role="tab"
          aria-selected={value === 2}
        >
          Wishlist
        </button>
        <button
          onClick={() => handleChange(3)}
          className={`px-4 py-2 text-sm font-bold transition-all duration-300 dark:text-textDark ${
            value === 3
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 hover:text-gray-700"
          }`}
          role="tab"
          aria-selected={value === 3}
        >
          Others
        </button>
      </div>
      <CourseContent isRemind={isRemind} value={value} />
    </div>
  );
};

const RemindLearning = ({
  className = "flex gap-2 p-4 bg-gray-50 dark:bg-primaryDark dark:border-[1px] dark:text-textDark rounded-xl my-6 ",
}) => {
  return (
    <div className={`${className}`}>
      {/* Alarm Icon */}
      <div>
        <IoMdAlarm size={32} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-lg dark:text-textDark">
            Remind Learning
          </p>
          <p className="text-sm">
            Learning a little each day adds up. Research shows that students who
            make learning a habit are more likely to reach their goals. Set time
            aside to learn and get reminders using your learning scheduler.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="text-black dark:text-textDark border-2 border-green-600 p-2 rounded-md text-sm font-bold hover:bg-primary hover:text-white transition-all duration-300">
            Set Reminder
          </button>
          <button className=" dark:text-textDark font-bold text-sm text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

const MyLearningPage = () => (
  <section className="dark:bg-primaryDark">
    <div className="w-[75%] mx-auto py-10">
      <p className="font-bold xl:text-5xl text-4xl dark:text-textDark">
        My Learning Page
      </p>
      <TabSection />
    </div>
  </section>
);

export default MyLearningPage;
