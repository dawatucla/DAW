import './BlogPreview.css';

// utility function to add a 0 in front of single digit numbers
function formatIndex(num) {
    return num < 10 ? `0${num}` : num;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // format to "MM.DD.YYYY" in number format
    const month = formatIndex(date.getMonth() + 1);
    const day = formatIndex(date.getDate());
    const year = date.getFullYear();
    return `${month}.${day}.${year}`;
}

function idxToColor(idx) {
    const colors = ['#BFD630', '#FF1D8E', '#11FF35'];
    return colors[(idx - 1) % colors.length];
}

function BlogPreview({ idx, title, date, excerpt }) {
    return (
        <div className="blog-preview">
            <div className="blog-idx-container" style={{ background: idxToColor(idx) }}>
                <p className="blog-idx">{formatIndex(idx)}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5vw' }}>
                <p className="blog-date">{formatDate(new Date(date))}</p>
                <p className="blog-title">{title}</p>
                { /* <p className="blog-excerpt">{excerpt}</p> */ }
            </div>
        </div>
    );
}

export { BlogPreview };