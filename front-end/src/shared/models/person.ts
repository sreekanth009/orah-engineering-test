export interface Person {
  id: number
  first_name: string
  last_name: string
  photo_url?: string
  type: string
}

export const PersonHelper = {
  getFullName: (p: Person) => `${p.first_name} ${p.last_name}`,
}

export type ContextState = {
  studentMainList: Person[];
  unmarkedList: Person[];
  updateMainList: (filter: Person) => void;
  loadState: string;
  open: string;
  presentList: Person[];
  lateList: Person[];
  absentList: Person[];
  completedRollList: Person[];
  updatePresentList: (present: Person) => void;
  updateLateList: (present: Person) => void;
  updateAbsentList: (present: Person) => void;
  updateCompletedRollList: (present: Person) => void;
  handleCloseToaster: (present: Person) => void;
  labelValue: string;
  handleDropDownChange: (present: Person) => void;
};
