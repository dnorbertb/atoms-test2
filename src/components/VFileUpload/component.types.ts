import type { IFile } from '@/types/IFile';

export interface IState {
  dragOver: boolean;
  uploading: boolean;
  file: IFile | null;
  progress: number;
  uploadFailed: boolean;
}
