import axios from "axios";
import Form from "../../../component/Form";
import { useRouter } from "next/router";

const Edit = () => {
    const router = useRouter()
    const id = router.query.id;

    const blogEdit = (data) => {
        axios.patch(`/api/blog/edit/${id}`, data)
        // console.log(data)
    }
    
    return (
        <div>
            <Form 
                buttonText="Edit Content"
                redirectPath='/'
                onSubmit={blogEdit}
                postId={id}
            />
        </div>
    );
};

export default Edit;
