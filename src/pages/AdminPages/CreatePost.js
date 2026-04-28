import React, {useState, useEffect, useRef, useMemo} from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth, storage } from "../../firebase-config";
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import Quill from 'quill';
import Editor from '../../components/Editor';
import "./Admin.css";
import imageCompression from "browser-image-compression";


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

    /* Editor customization */

    const compressImagetoWebP = async (file) => {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: "image/webp",
        initialQuality: 0.8,
      };
      return await imageCompression(file, options);
    };

    const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (!file) return;

            const compressedFile = await compressImagetoWebP(file);
            const originalNameWithoutExtension = file.name.replace(/\.[^/.]+$/, "");
            const uniqueName = `${v4()}-${originalNameWithoutExtension}.webp`;
            const fileName = `postImages/${uniqueName}`;
            const storageRef = ref(storage, fileName);

            try {
                const snapshot = await uploadBytes(storageRef, compressedFile);
                const url = await getDownloadURL(snapshot.ref);

                const quill = quillRef.current; 
                const range = quill.getSelection();
                quill.insertEmbed(range.index, 'image', url);
                quill.setSelection(range.index + 1);
            } catch (error) {
                console.error("Upload failed:", error);
            }
        };
    };


    // Define the modules object
    const modules = useMemo(() => ({
            toolbar: {
                container: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'link'],
                    ['clean']
                ],
                handlers: {
                    image: imageHandler
                }
            }
        }
    ), []);

    return (
        <div className="createPostPage">
            <div className="createPostContainer">
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
                        modules={modules}
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