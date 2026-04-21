import { db, auth } from "../../firebase-config"
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from "react";

function ManagePosts({isAuth}){
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

    return (
        <div style={{ padding: "20px" }}>
            <h1>Manage Posts</h1>
            <div className="postList">
                {postList.map((post) => (
                    <div key={post.id} style={{border: "1px solid black", marginBottom: "10px", padding: "10px", borderRadius: "5px"}}>
                        <h2>{post.title}</h2>
                        <p>{post.author.name}</p>
                        <p>{post.datePublished ? post.datePublished.toDateString() : "No date"}</p>
                        <button onClick={() => deletePost(post.id)}>Delete Post</button>
                        <button>Edit Post</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManagePosts;