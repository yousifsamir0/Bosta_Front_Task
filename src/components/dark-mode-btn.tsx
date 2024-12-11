import useLocalStorage from '@/hooks/local_storage';
import { Moon, Sun } from 'lucide-react';
import { useEffect } from 'react';

export default function DarkModeToggle() {

    const [darkMode, setDarkMode] = useLocalStorage("theme", false);
    // Sync the dark mode state with the HTML document
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1  rounded-lg shadow-md focus:outline-none"
        >
            {!darkMode ? <Moon className='text-[#000]' /> : <Sun className='text-[#fff]' />}
        </button>
    );
}
