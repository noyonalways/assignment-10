import React from "react";
import useFetchData from "../../hooks/useFetchData";
import SingleFeatured from "../SingleFeatured/SingleFeatured";

const Featured = () => {
    const [features,] = useFetchData("slides.json")
	return (
		<section class="text-gray-600 body-font">
			<div class="w-5/6 py-24 mx-auto">
            <h2 className="text-4xl mb-10 text-center section-title" data-aos="zoom-in" data-aos-duration="500">Featured Photos</h2>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 ">
					{
                        features.map(ft => <SingleFeatured featuredItem={ft} key={ft.id}/>)
                    }
				</div>
			</div>
		</section>
	);
};

export default Featured;
