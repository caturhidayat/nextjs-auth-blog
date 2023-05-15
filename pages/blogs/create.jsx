import axios from "axios";
import Form from "../../component/Form";


const Create = () => {
    const blogPost = (data) => {
        axios.post('/api/blog/create', data)
        // console.log(data)
    }
    
    return (
        <div>
            <Form 
                buttonText="Add Content"
                redirectPath='/'
                onSubmit={blogPost}
                postId={false}
            />
        </div>
    );
};

export default Create;
