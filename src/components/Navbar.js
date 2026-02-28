function Navbar() {
    return (
        <div class="navbar">
            <a href="../home/">HOME</a>
            <a href="../connect/">CONNECT</a>
            <a href="../events/">EVENTS</a>
            <a href="../gallery/">GALLERY</a>
            <span style={{ position: 'relative', display: 'inline-block' }}>
                <a href="../blog/">BLOG</a>
                <img src="/assets/blog_assets/blog_arrow.svg" alt="blog arrow" style={{ position: 'absolute', bottom: '-9px', right: '3px', width: '12px', height: '12px' }}/>
            </span>
        </div>
    );
}

export { Navbar };