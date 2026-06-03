import { fetchNoteById } from "../../../../lib/api";
import { Modal } from "../../../../components/Modal/Modal"
interface Props {
  params: Promise<{id: string}>
}

const NotesDetailPrewiew = async ({params}: Props) => {
const { id } = await params;
const note = await fetchNoteById(id);
    return (
        <Modal> 
            
        </Modal>
    );
}

export default NotesDetailPrewiew;