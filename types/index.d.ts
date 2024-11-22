export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface ISettingsCard {
  id: number;
  icon: string;
  label: string;
}
export interface IDuaCardLinks {
  id: number;
  icon: string;
  label: string;
}
export interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}
