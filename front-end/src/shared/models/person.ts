export interface Person {
  id: number
  first_name: string
  last_name: string
  photo_url?: string
}

export const PersonHelper = {
  getFullName: (p: Person) => `${p.first_name} ${p.last_name}`,
}

export type ContextState = {
  studentMainList: Person[];
  updateMainList: (filter: Person) => void;
  loadState: string;
  presentList: Person[];
  lateList: Person[];
  absentList: Person[];
  updatePresentList: (present: Person) => void;
  updateLateList: (present: Person) => void;
  updateAbsentList: (present: Person) => void;
};
