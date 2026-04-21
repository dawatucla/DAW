import React, {useState, useEffect, useRef} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth, storage } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import Quill from 'quill';
import Editor from '../../components/Editor';
import "./Admin.css";

const Delta = Quill.import('delta');

function CreatePost({isAuth}){

    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    // const [ fileUpload, setFileUpload ] = useState(null);
    // const [ hasAudio, setHasAudio ] = useState(false); 
    // const [ filev4, setFilev4 ] = useState("");
    // const [ audioURL, setAudioURL ] = useState("");
    const postCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const [lastChange, setLastChange] = useState();
    const [range, setRange] = useState();
    const quillRef = useRef();

    const createPost = async () => {
        const content = quillRef.current.getContents();
        await addDoc(postCollectionRef, 
            {
                title,
                content: content.ops,  // Store just the ops array
                author: {name: author, id: 0 },
                datePublished: new Date(),
                // hasAudio,
                // audioURL,
            });
            navigate("/admin/dashboard");
    };


    // const uploadFile = async () => {
    //     if (!fileUpload) return;

    //     const ext = fileUpload.name.split('.').pop();
    //     const id = v4();
    //     const fileName = `${id}.${ext}`;
    //     const fileRef = ref(storage, fileName);

    //     try {
    //         const snapshot = await uploadBytes(fileRef, fileUpload);
    //         const url = await getDownloadURL(snapshot.ref);

    //         setHasAudio(true);
    //         setAudioURL(url);

    //         alert(`FILE UPLOADED ${fileName}`);
    //         console.log("FILE UPLOADED", url);
    //     } catch (err) {
    //         console.error(err);
    //         alert(`Upload failed: ${err.message}`);
    //     }
    // };

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create Post</h1>
                <div className="inputGroup">
                    <label>Title:</label>
                    <input 
                    placeholder="Title... ₍^. .^₎⟆" 
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }} 
                    />
                </div>
                <div className="inputGroup">
                    <label>Author:</label>
                    <input 
                    placeholder="Your name" 
                    onChange={(event) => {
                        setAuthor(event.target.value);
                    }} 
                    />
                </div>
                <div className="inputGroup">
                    <label>Post:</label>
                    <Editor
                        ref={quillRef}
                        defaultValue={new Delta()
                            .insert("type that shit out twin ฅ^>⩊<^ ฅ")
                            .insert('\n')
                        }
                        onSelectionChange={setRange}
                        onTextChange={setLastChange}
                    />
                </div>
                {/* <div className="fileUpload">
                    <input type="file" onChange={(event) =>{setFileUpload(event.target.files[0])}} />
                    <button onClick={uploadFile} >Upload Audio</button>
                </div> */}
                {title.length !== 0 && author.length !== 0 ? (
                    <button onClick={createPost}>Submit Post</button>
                ) : <p>Please fill all fields to post!</p>}
            </div>
        </div>
    );
}

export default CreatePost;