import Header from "./Components/Header.jsx";
import Entry from "./Components/Entry.jsx";
import Footer from "./Components/Footer";
import data from "./data.js"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                entry={entry}
            />
        )
    })
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
            <Footer />
        </>
    )
}