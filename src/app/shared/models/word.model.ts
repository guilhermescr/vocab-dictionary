import { Meaning } from './meaning.model';

export interface Word {
  word: string;
  pronunciationFile: string;
  pronunciationIpa: string;
  meanings: Meaning[];
}
