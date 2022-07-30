export interface TrainingOverview {
  id: string;
  localization: string;
  address: string;
  date: Date;
}

export interface TrainingDetails {
  id: string;
  localization: string;
  address: string;
  date: Date;
  notes: string;
  weather: string;
  // TODO: add dogs list
}