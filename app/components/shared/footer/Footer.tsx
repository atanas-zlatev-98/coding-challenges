export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-gray-700 text-white p-4 absolute bottom-0 left-0">
            <div className="max-w-7xl mx-auto text-center">
                &copy; {new Date().getFullYear()} Coding Challenges. All rights reserved.
            </div>
        </footer>
    );
}