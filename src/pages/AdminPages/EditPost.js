import React, {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';
import Quill from 'quill';
import Editor from '../../components/Editor';
import "./Admin.css";

const Delta = Quill.import('delta');

function EditPost({isAuth}){

    // get id from route params when this page is mounted at /admin/edit/:id
    const params = useParams();
    const id = params.id;

    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const postCollectionRef = collection(db, "posts");
    const [initialContent, setInitialContent] = useState(null);
    let navigate = useNavigate();

    const [lastChange, setLastChange] = useState();
    const [range, setRange] = useState();
    const quillRef = useRef();

    const createPost = async () => {
        const content = quillRef.current.getContents();
        const payload = {
            title,
            content: content.ops,  // Store just the ops array
            author: {name: author, id: 0 },
            datePublished: new Date(),
        };

        if (id) {
            // update existing post
            const postDocRef = doc(db, 'posts', id);
            await updateDoc(postDocRef, payload);
        } else {
            // create new post
            await addDoc(postCollectionRef, payload);
        }

        navigate('/admin/manageposts');
    };

    // load post data on mount
    useEffect(() => {
        if (!id) return;

        // fetch post data from firestore using id
        const fetchPostData = async () => {
            try {
                const postDoc = doc(db, "posts", id);
                const postSnap = await getDoc(postDoc);
                if (postSnap.exists()) {
                    const postData = postSnap.data();
                    setTitle(postData.title || "");
                    setAuthor((postData.author && postData.author.name) || "");
                    const ops = postData.content || [];
                    setInitialContent(new Delta(ops));
                    console.log("Fetched post data:", postData);
                } else {
                    console.error("No such document!");
                }
            } catch (err) {
                console.error('Error fetching post:', err);
            }
        };
        fetchPostData();
    }, [id]);

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Edit Post</h1>
                <div className="inputGroup">
                    <label>Title:</label>
                    <input 
                    placeholder="Title... ₍^. .^₎⟆" 
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }} 
                    />
                </div>
                <div className="inputGroup">
                    <label>Author:</label>
                    <input 
                    placeholder="Your name" 
                    value={author}
                    onChange={(event) => {
                        setAuthor(event.target.value);
                    }} 
                    />
                </div>
                <div className="inputGroup">
                    <label>Post:</label>
                    {initialContent ? (
                        <Editor
                            ref={quillRef}
                            defaultValue={initialContent}
                            onSelectionChange={setRange}
                            onTextChange={setLastChange}
                        />
                    ) : (
                        <p>Loading post content...</p>
                    )}
                </div>
                {title.length !== 0 && author.length !== 0 ? (
                    <button onClick={createPost}>Submit Post</button>
                ) : <p>Please fill all fields to post!</p>}
            </div>
        </div>
    );
}

export default EditPost;