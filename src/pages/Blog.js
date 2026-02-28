import './Blog.css';
import { BlogPreview } from '../components/BlogPreview.js';
import { Navbar } from '../components/Navbar.js';
import React, {useEffect, useState} from 'react'
import { db, auth } from "../firebase-config"
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

function Blog(){
    const [postList, setPostList] = useState([]);
    const postsCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
        getPosts();
    }

    const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setPostList(
            data.docs.map((doc) => {
                const postData = doc.data();
                return {
                    ...postData,
                    id: doc.id,
                    datePublished: postData.datePublished
                        ? new Date(postData.datePublished.seconds * 1000)
                        : null,
                };
            })
        );
    };


    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        console.log(postList);
    }, [postList]);

    
    return (
        <div>
            <Navbar />
            <div class = "blog-body">
                <div class = "blog-header">
                    <img src="/assets/DAW_logo.svg" alt="DAW logo" style={{ width: "40vw" }}/>
                    <div style={{ marginTop: "10px", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '40vw' }}>
                        <h1>#blog</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '1vw' }}>
                            <div style={{width: '8vw', height: '8vw', background: '#BFD630', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src="/assets/blog_assets/blog_arrow_down.svg" alt="blog arrow down" style={{ width: "4vw" }}/>
                            </div>
                            <div style={{width: '8vw', height: '8vw', background: '#FF1D8E', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src="/assets/blog_assets/B.svg" alt="blog B" style={{ width: "4vw" }}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "blog-posts">
                    <div className="blog-divider" />
                    {postList.map((post, i) => (
                        <React.Fragment key={post.id}>
                            <BlogPreview idx={i + 1} title={post.title} date={post.datePublished} excerpt={post.excerpt}/>
                            <div className="blog-divider" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;