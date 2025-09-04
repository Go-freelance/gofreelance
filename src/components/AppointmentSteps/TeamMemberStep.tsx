import React from "react";
import { TeamMember } from "../../hooks/useAppointmentForm";

interface TeamMemberStepProps {
  selectedTeamMember: string;
  teamMembers: TeamMember[];
  onTeamMemberSelect: (member: TeamMember) => void;
}

export const TeamMemberStep: React.FC<TeamMemberStepProps> = ({
  selectedTeamMember,
  teamMembers,
  onTeamMemberSelect,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className={`p-3 sm:p-4 rounded-xl border-2 cursor-pointer transition-all ${
            selectedTeamMember === member.name
              ? "border-primary bg-primary/5"
              : "border-neutral-200 hover:border-primary/30"
          }`}
          onClick={() => onTeamMemberSelect(member)}
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2 sm:mb-3 border-4 border-white shadow-md">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg">{member.name}</h3>
            {/* <p className="text-primary font-medium text-xs sm:text-sm">
              {member.role}
            </p> */}
            {/* <p className="text-neutral-500 text-xs sm:text-sm mt-1 sm:mt-2">
              {member.specialty}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
};
