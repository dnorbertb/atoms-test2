import type { IUser } from '@/types/IUser';

export interface IFile {
  name: string;
  url: string;
  previewUrl?: string;
  size: string;
  mime: string;
  author?: IUser;
  createdAt: string;
}
