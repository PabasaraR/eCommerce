import Men from "../assets/Images/Men.jpg";
import Women from "../assets/Images/Women.jpg";
import Kid from "../assets/Images/Kids.jpg";

export default function CategorySection() {
  const category = [
    { iamge: Men, title: "Men" },
    { iamge: Women, title: "Women" },
    { iamge: Kid, title: "Kids" },
  ];
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
      {category.map((category, index) => {
        return (
          <div key={index}>
            {
              <div className="relative duration-500 hover:scale-110">
                {" "}
                <img
                  src={category.iamge}
                  alt="image"
                  className="rounded-[15px] cursor-pointer    "
                />
                <div className="absolute top-20 left-14">
                  <div className="text-[1.5rem] font-bold">
                    {category.title}
                  </div>
                  <div className="">View All</div>
                </div>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
}
