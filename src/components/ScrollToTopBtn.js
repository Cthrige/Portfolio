import { useEffect } from "react";
import { ArrowUpCircle } from 'react-bootstrap-icons';

export default function ScrollToTopBtn() {
    useEffect(() => {
        // When the user scrolls down 500px from the top of the document, show the button
        window.onscroll = function () {
            watchScroll();
        };
    }, []);

    function watchScroll() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    }

    function scrollToTheTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <button id="scrollTop" onClick={scrollToTheTop}>scroll.(top) <ArrowUpCircle size={25} /></button>
    );
}
