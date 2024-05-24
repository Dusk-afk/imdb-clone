import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link className="hover:text-amber-500" href={address}>
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
};

export default MenuItem;
