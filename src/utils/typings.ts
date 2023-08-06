export interface FormData {
  name?: string;
  email: string;
  password: string;
  password2?: string;
}

export interface ProfileFormData {
  company?: string;
  website?: string;
  location?: string;
  status?: string;
  skills?: string[];
  bio?: string;
  githubusername?: string;
  youtube?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  education?: EducationFormData[];
  experience?: ExperienceFormData[];
}

export interface ProfileInitialState {
  profile: ProfileFormData | null;
  profiles: ProfileFormData[];
  error: object | null;
}


export interface EducationFormData {
  id?: string;
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to?: string;
  current?: boolean;
  description?: string;
}

export interface ExperienceFormData {
  id?: string;
  title: string;
  company: string;
  location?: string;
  from: string;

}
export interface AuthInitialState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  user: FormData | null;
  error: string | null;
}

export function formatDate(date: any) {
  return new Intl.DateTimeFormat().format(new Date(date));
}

export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";
export const LOGOUT = "LOGOUT";
