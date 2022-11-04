// app/blog/layout.js
export default function AppLayout({children}) {
    return (
        <>
            <header>
                This is a header
            </header>
            <main>
                {children}
            </main>
            <footer>
                This is footer
            </footer>
        </>
    );
}
