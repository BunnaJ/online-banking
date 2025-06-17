import { Bell } from "lucide-react";
import Image from "next/image";

export default function NotificationAvatar({ userImage }: { userImage: string }) {
  return (
    <div className="flex items-center justify-end gap-4 pr-24">
      {/* Notification Icon with dot */}
      {/* <div className="relative ">
        <Bell className="w-6 h-6 text-gray-700 size-20" />
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
      </div> */}

      {/* User Avatar */}
      {/* <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-gray-300">
        <Image
          src={userImage}
          alt="User Avatar"
          width={400}
          height={40}
          className="object-cover w-full h-full"
        />
      </div> */}
    </div>
  );
}
