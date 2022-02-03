import { readdirSync } from 'fs';
import { join } from 'path';

export const getDirectoryFileNames = (directoryPath: string) =>
  readdirSync(join(directoryPath)).map((fileName) => fileName.split('.')[0]);
