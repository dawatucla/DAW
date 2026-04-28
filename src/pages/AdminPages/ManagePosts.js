import { db, auth } from "../../firebase-config"
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    const handleDeletePost = async (id) => {
        // Display a confirmation dialog before deleting
        const confirmDelete = window.confirm("Are you sure you want to delete this post? This action cannot be undone.");
        if (!confirmDelete) return;
        await deletePost(id);
        getPosts();
    }

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
                        <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
                        <Link to={`/admin/editpost/${post.id}`}>
                            <button>Edit Post</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManagePosts;