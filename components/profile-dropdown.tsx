"use client";

import { logout } from "@/actions/logout";
import Avatar from "@/components/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";

const ProfileDropdown = () => {
  const user = useCurrentUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer">
            {user?.image ? (
              <Avatar size="small" src={user?.image} name={user?.name!} />
            ) : (
              <Avatar size="small" />
            )}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <div>
            <DropdownMenuItem asChild>
              <Link href="/dashboard" className="flex-align-center gap-x-2">
                <BsGrid className="text-lg text-slate-600 dark:text-slate-400" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
          </div>

          <DropdownMenuItem asChild>
            <Link
              href="/dashboard/account"
              className="flex-align-center gap-x-2"
            >
              <BiUserCircle className="text-xl text-slate-600 dark:text-slate-400" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild onClick={() => logout()}>
            <div>
              <LogOut className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="ml-2">logout</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
