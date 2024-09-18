// Interface APOD

export interface Apod {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    title: string;
}


//Interfaces Epic 
export interface Epic {
    attitude_quaternions: Quaternions;
    caption: string;
    centroid_coordinates: Coordinates;
    coords: Coords;
    date: string;
    dscovr_j2000_position: Position;
    identifier: string;
    image: string;
    lunar_j2000_position: Position;
    sun_j2000_position: Position;
  }
  
  export interface Quaternions {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
  }
  
  export interface Coordinates {
    lat: number;
    lon: number;
  }
  
  export interface Position {
    x: number;
    y: number;
    z: number;
  }
  
  export interface Coords {
    centroid_coordinates: Coordinates;
    dscovr_j2000_position: Position;
    lunar_j2000_position: Position;
    sun_j2000_position: Position;
    attitude_quaternions: Quaternions;
  }

  // Interfaces Nasa Image and videos library
  
  export interface NasaImageCollection {
    collection: Collection;
  }
  
  export interface Collection {
    version: string;
    href: string;
    items: Item[];
  }
  
  export interface Item {
    href: string;
    data: Data[];
    links: Link[];
  }
  
  export interface Data {
    center: string;
    title: string;
    nasa_id: string;
    date_created: string;
    keywords: string[];
    media_type: string;
    description_508: string;
    secondary_creator: string;
    description: string;
  }
  
  export interface Link {
    href: string;
    rel: string;
    render: string;
  }
  
  // Mars rover interfaces

  // Interface para a câmera
export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

// Interface para o rover
export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: {
    name: string;
    full_name: string;
  }[];
}

// Interface para a foto
export interface Photo {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

// Interface para o objeto principal contendo fotos
 export interface PhotosResponse {
  photos: Photo[];
}
