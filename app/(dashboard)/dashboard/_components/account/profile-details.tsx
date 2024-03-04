"use client";

import Avatar from "@/components/avatar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const ProfileDetails = () => {
  const user = useCurrentUser();
  const [profileImage, setProfileImage] = useState<Blob | MediaSource | null>(
    null
  );

  return (
    <>
      <div className="mt-8 flex-align-center gap-x-4 p-2 md:p-4 border border-border rounded-lg">
        <label htmlFor="image" className="flex-shrink-0">
          <input
            type="file"
            hidden
            id="image"
            onChange={(e) =>
              setProfileImage(e.target.files && e.target.files[0])
            }
          />
          <div className="relative">
            <div className="absolute w-8 h-8 rounded-full bg-slate-900 border-2 border-white dark:border-slate-950 text-white bottom-0 right-0 grid place-items-center cursor-pointer hover:bg-slate-900/80">
              <FiEdit2 />
            </div>
            {user?.image ? (
              <Avatar size="large" src={user?.image} />
            ) : (
              <Avatar size="large" />
            )}
          </div>
        </label>
        <div>
          <h1 className="text-xl">{user?.name}</h1>
          <p className="text-sm">{user?.email}</p>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
