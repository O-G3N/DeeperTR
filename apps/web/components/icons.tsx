import type { SVGProps } from "react";
import {
  IconBook,
  IconChevronRight,
  IconHeart,
  IconLayoutDashboard,
  IconMessageSquare,
  IconSearch,
  IconShield,
  IconUsers
} from "@deepertr/ui";

type IconData = ReturnType<typeof IconSearch>;

function Vector({ data }: { data: IconData }) {
  const { paths, ...svgProps } = data;
  return (
    <svg {...(svgProps as SVGProps<SVGSVGElement>)} aria-hidden>
      {paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}

export const SearchIcon = () => <Vector data={IconSearch({ size: 16 })} />;
export const BookIcon = () => <Vector data={IconBook({ size: 16 })} />;
export const ChevronRightIcon = () => <Vector data={IconChevronRight({ size: 16 })} />;
export const HeartIcon = () => <Vector data={IconHeart({ size: 16 })} />;
export const DashboardIcon = () => <Vector data={IconLayoutDashboard({ size: 16 })} />;
export const UsersIcon = () => <Vector data={IconUsers({ size: 16 })} />;
export const MessageIcon = () => <Vector data={IconMessageSquare({ size: 16 })} />;
export const ShieldIcon = () => <Vector data={IconShield({ size: 16 })} />;
