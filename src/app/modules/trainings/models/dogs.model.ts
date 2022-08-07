export interface DogTrainingOverview {
  dogTrainingId: string;
  dogName: string;
  startTime: Date;
}

export interface DogTraining {
  id: string;
  
  delayTime: string;
  duration: string;
  weather: string;
  notes: string;
  groundType: string;
  
  dogTrackData: DogTrackData;
  lostPersonTrackData: LostPersonTrackData;
}

export interface DogTrackData {
  dogTrackPoints: TrackPoint[];
  dogTrailLength: string;
  dogStartTime: Date;
}

export interface LostPersonTrackData {
  lostPersonName: string;
  lostPersonTrackPoints: TrackPoint[];
  lostPersonTrailLength: string;
  lostPersonStartTime: Date;
}

export interface TrackPoint {
  // TODO id from 0 to x? (currently starts from 1)
  id: number;
  latitude: number;
  longitude: number;
  time: Date;
}