import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((match: string): string[] => match.split(','));
  }
}
