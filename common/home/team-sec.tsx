import MemberCard from "../../components/member_card";
import { TeamData } from "../../types/consts";

const TeamSection = () => {
  return (
    <div className="my-12px">
      <p className="text-center text-white text-[32px] my-6">Team Members</p>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          {TeamData.map((ele, index) => {
            const bgColor =
              index % 2
                ? "bg-[#14173c] rounded-2xl"
                : "bg-[#201f45] rounded-2xl";
            return (
              <div className={bgColor} key={index}>
                <MemberCard
                  name={ele.name}
                  title={ele.title}
                  image={ele.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
