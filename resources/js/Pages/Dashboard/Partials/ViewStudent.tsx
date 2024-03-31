import Modal from "@/Components/Modal";

export default function ViewStudent(
    { image, show, onClose }: 
    { image: string|null, show: boolean, onClose: CallableFunction}
) {

    function sanitizeImageUrl(image_url: string) {
        return image_url.replace('public', '/storage');
    }
    
    return (
        <Modal maxWidth="md" show={show} onClose={onClose}>
            <div className="px-5 py-3 mx-auto">
                <h5 className="text-center font-extrabold text-xl underline underline-offset-2">Student Image</h5>
                <div className="p-3 flex flex-row justify-center">
                    {image !== null ? 
                        <img className="w-[300px] h-[300px] object-contain" src={sanitizeImageUrl(image)} alt="" /> 
                        : 
                        <p>No image is available!</p>}
                    

                </div>
            </div>
        </Modal>
    );
}