import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';

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

  }, []);

  return (

	<div className="container mx-auto">

		{/* Card Grid */}
		<div className="grid grid-cols-3 gap-4">

			{/* Images */}
			{images.map(
				
					image => ( <ImageCard key={image.id} image={image}/> )

				)
				
			}

		</div>

	</div>

  );

}

export default App;
