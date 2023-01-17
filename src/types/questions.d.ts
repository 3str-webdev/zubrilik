interface IQuestion {
  id: number;
  title: string;
  century: number | string;
  year?: string | number;
  country: string;
  city: string;
  architect: string;
  other?: string;
  style?: string;
}
