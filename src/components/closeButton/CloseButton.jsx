import { IoMdCloseCircle } from "react-icons/io";

export default function CloseButton({onClose}) {
	return(
		<div onClick={onClose}>
			<IoMdCloseCircle className="closeButton"/>
		</div>
	);
}