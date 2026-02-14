import './Blog.css';
import { BlogPreview } from '../components/BlogPreview.js';
import React, {useEffect, useState} from 'react'
import { db, auth } from "../firebase-config"
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
// import AudioWave from '../components/AudioWave';

function Blog(){
    const [postLists, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };

        getPosts();
    }, [deletePost]);

    
    return (
        <div>
            <div class="navbar">
                <a href="../home/">HOME</a>
                <a href="../connect/">CONNECT</a>
                <a href="../events/">EVENTS</a>
                <a href="../gallery/">GALLERY</a>
                <a href="../blog/">BLOG</a>
            </div>
            <div class = "sub-body">
                <div class = "blog-header">
                    <img src="/assets/DAW_logo.svg" alt="DAW logo" style={{ width: "60%" }}/>
                    <div style={{ marginTop: "10px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
                        <h1>#blog</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <div style={{width: '7vw', height: '7vw', background: '#BFD630', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src="/assets/blog_assets/blog_arrow_down.svg" alt="blog arrow down" style={{ width: "6vh", height: "6vh" }}/>
                            </div>
                            <div style={{width: '7vw', height: '7vw', background: '#FF1D8E', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src="/assets/blog_assets/B.svg" alt="blog B" style={{ width: "6vh", height: "6vh" }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "blog-posts">
                    <div class="divider" />
                    <BlogPreview idx={1} title="title 1" date="June 1, 2024" excerpt="meow"/>
                    <div class="divider" />
                    <BlogPreview idx={2} title="title 2" date="June 15, 2024" excerpt="meow"/>
                    <div class="divider" />
                    <BlogPreview idx={3} title="title 3" date="June 30, 2024" excerpt="meow"/>
                    <div class="divider" />
                    <BlogPreview idx={4} title="title 4" date="July 1, 2024" excerpt="meow"/>
                    <div class="divider" />
                    <BlogPreview idx={5} title="title 5" date="July 15, 2024" excerpt="meow"/>
                    <div class="divider" />
                    <BlogPreview idx={6} title="title 6" date="July 30, 2024" excerpt="meow"/>
                </div>
            </div>
        </div>
    );
}

export default Blog;