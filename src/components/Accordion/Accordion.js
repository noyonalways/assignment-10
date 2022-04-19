import React from "react";
import { VscChevronDown } from "react-icons/vsc";

const Accordion = ({singleQuestion}) => {
    const {id, question, answer} = singleQuestion;
	return (
		<div className="group outline-none accordion-section border" tabIndex={id}>
			<div className="group bg-white flex justify-between px-4 py-3 items-center text-black transition ease duration-500 cursor-pointer pr-10 relative  group-focus:bg-gray-100">
				<div className="group-focus:text-black transition ease duration-500 text-lg">
					{question}
				</div>
				<div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-black group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
					<VscChevronDown />
				</div>
			</div>
			<div className="group-focus:max-h-screen max-h-0 bg-white px-4 overflow-hidden ease duration-500">
				<p className="py-2 text-gray-400 text-justify">{answer}</p>
			</div>
		</div>
	);
};

export default Accordion;
