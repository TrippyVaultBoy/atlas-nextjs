import { auth } from "../auth";
import defaultUser from "../assets/default-avatar.png";

export async function LoggedInUser() {
    const session = await auth();

    if (!session?.user) return null;

    return (
        <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-primary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded-full">
                <img
                    className="w-full h-full object-cover"
                    src={session.user.image ?? defaultUser.src}
                    alt="User Avatar"
                />
            </div>

            <div className="hidden md:block">{session.user.name ?? "Test User"}</div>
        </button>
    );
}