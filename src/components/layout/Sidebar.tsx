


function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                <span>SystemPulse</span>
            </div>

            <nav className="sidebar__nav" aria-label="Esas Menyu">
                <button
                type="button"
                className="sidebar__item sidebar__item--active"
                aria-current="page">
                İcmal
                </button>

                <button type="button" className="sidebar__item">
                Prosessor
                </button>

                <button type="button" className="sidebar__item">
                Yaddaş
                </button>

                <button type="button" className="sidebar__item">
                Disk
                </button>

                <button type="button" className="sidebar__item">
                Şəbəkə
                </button>

                <button type="button" className="sidebar__item">
                Proseslər
                </button>
            </nav>

            <div className="sidebar__footer">
                <button type="button" className="sidebar__item">
                Parametrlər
                </button>

                <span className="sidebar__version">v0.1.0</span>
            </div>
        </aside>
    )
}

export default Sidebar;