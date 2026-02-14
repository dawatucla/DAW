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
      <div className="homePage">
            {postLists.map((post) => {
                return <div className="post" key={post.id}>
                    <div className="postHeader">
                        <div className="title">
                            <h1>{post.title}</h1>
                        </div>
                        {/* <div className="deletePost">
                            {isAuth && post.author.id === auth.currentUser.uid && 
                            <button onClick={() => deletePost(post.id)}>
                                X
                            </button>}
                        </div> */}
                    </div>
                    <h3>@{post.author.name}</h3>
                    <div className="postTextContainer">
                        {post.postText}
                    </div>
                    {/* {post.hasAudio && 
                    <div>
                        <script>
                            console.log(post.audioURL);
                        </script>
                        <AudioWave link={post.audioURL}/>
                    </div>} */}
                </div>
            })}
        </div>
              <footer>
        <p>© DAW 2025</p>
      </footer>

    </div>
    );
}

export default Blog;