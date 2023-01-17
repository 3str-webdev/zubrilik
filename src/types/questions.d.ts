interface IQuestion {
  id: number;
  title: string;
  century: number | string;
  year?: number;
  country: string;
  city: string;
  architect: string;
  other?: string;
}
