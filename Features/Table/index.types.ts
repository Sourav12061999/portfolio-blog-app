export interface ReviewTypes {
  positive: number;
  negative: number;
}
export interface TableDataTypes {
  title: string;
  author: string;
  year: number;
  reviews: ReviewTypes;
}
export interface PropTypes {
  data: TableDataTypes[];
}
