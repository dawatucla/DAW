import React, {useState, useEffect} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth, storage } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

function CreatePost({isAuth}){

    const [ title, setTitle ] = useState("");
    const [ postText, setPostText ] = useState("");
    // const [ fileUpload, setFileUpload ] = useState(null);
    // const [ hasAudio, setHasAudio ] = useState(false); 
    // const [ filev4, setFilev4 ] = useState("");
    // const [ audioURL, setAudioURL ] = useState("");
    const postCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postCollectionRef, 
            {
                title,
                postText,
                author: {name: "Admin", id: 0 },
                // hasAudio,
                // audioURL,
            });
            navigate("/");
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
                    <label>Post:</label>
                    <textarea 
                    placeholder="type that shit out twin ฅ^>⩊<^ ฅ"
                    onChange={(event) => {
                        setPostText(event.target.value);
                    }}
                    />
                </div>
                {/* <div className="fileUpload">
                    <input type="file" onChange={(event) =>{setFileUpload(event.target.files[0])}} />
                    <button onClick={uploadFile} >Upload Audio</button>
                </div> */}
                <button onClick={createPost}>Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;