export interface Apod {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    title: string;
}

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
  