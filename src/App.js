import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {

    // Fetch for api key to get images from pixabay
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
	.then(data => 
		{
			setImages(data.hits);
			setIsLoading(false);
		}
	)
    .catch(err => console.log(err));

  }, [term]);

  return (

	<div className="container mx-auto">

		{/* Image Search */}
		<ImageSearch searchText={(text) => setTerm(text)}/>

		{/* Card Grid */}

		{/* For No Results */}
		{
		
			// Checks to see image length
			!isLoading && images.length === 0 && 

			// No Results
			<h1 className="text-6xl text-center mx-auto mt-32">No Results</h1>
			
		}

		{/* For Loading */}
		{isLoading ? 
		
			// If page is loading
			<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
		
			: 
		
			// When page has loaded
			<div className="grid grid-cols-3 gap-4">

				{/* Images */}
				{images.map(
					
						image => ( <ImageCard key={image.id} image={image}/> )

					)
					
				}

			</div>

		}

	</div>

  );

}

export default App;
