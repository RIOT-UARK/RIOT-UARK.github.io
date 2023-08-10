const DarkMode = () => {
    function toggle() {
        var element = document.body;
        element.classList.toggle('darkMode');
    }

    return (
        <div id="darkMode" onClick={toggle}>
            <span>Dark Mode</span>
            <img
                id="darkModeIcon"
                width="17px"
                height="17px"
                src="Dark Mode Icon.png"
                alt=""
            ></img>
        </div>
    );
};

export default DarkMode;
