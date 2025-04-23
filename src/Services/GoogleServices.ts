
interface Review {
    id: string;
    author_name: string;
    rating: number;
    relative_time_description: string;
    text: string;
    profile_photo_url: string;
  }
  
  interface GooglePlaceResult {
    reviews: Review[];
    rating: number;
    user_ratings_total: number;
  }
  
const fetchGoogleReviews = async (): Promise<GooglePlaceResult> => {
    // For Bánh Cuốn Tây Hồ 127
    const placeId = 'ChIJW1-z_1UrNTERnrQQoOQB2BA';
    const apiKey = 'YOUR_GOOGLE_API_KEY'; // Replace with your actual API key
    
    // In a production environment, this should be handled by a backend service
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    
    const data = await response.json();
    return data.result;
  };
  