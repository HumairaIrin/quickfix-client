import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // পেজ চেঞ্জ হওয়ার সাথে সাথে স্ক্রোল পজিশন একদম টপে (০,০) নিয়ে যাবে
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTop;