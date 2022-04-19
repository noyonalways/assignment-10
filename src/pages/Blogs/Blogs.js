import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import useFetchData from "../../hooks/useFetchData";

const Blogs = () => {

    const [questions] = useFetchData('questions.json');

	return (
		<section className="py-8">
			<div className="mx-auto w-11/12 md:w-5/6 ">
            <h2 className="text-3xl text-center mb-12 section-title" data-aos="zoom-in">Blogs</h2>
				<div className="flex md:justify-between flex-wrap items-center">
					<div className="basis-[45%] sm:basis-[50] md:basis-[30%] lg:basis-[25%] mx-auto md:mx-0" data-aos="fade-right" data-aos-duration="1000">
                        <img src="https://cdn-icons-png.flaticon.com/512/5361/5361003.png" alt="" className="w-full" />
                    </div>
					<div className="md:basis-[60%] basis-[100%]" data-aos="fade-left" data-aos-duration="1000">
						<div className="rounded overflow-hidden border">
                            {
                                questions.map(question => <Accordion key={question.id} singleQuestion={question}/>)
                            }
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;
