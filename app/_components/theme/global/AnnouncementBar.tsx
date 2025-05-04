
export default function AnnouncementBar() {
    return (
        <div className="relative isolate flex items-center justify-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 font-poppins" style={{ backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)" }}>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                <p className="text-sm/6 text-gray-900 text-center">
                    <strong className="font-semibold">{"Summar Sale 2025"}</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline size-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
                    {"Get 10% offer for all the products"}
                </p>
                <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">
                    {"Shop now"}
                </a>
            </div>
        </div>
    )
}