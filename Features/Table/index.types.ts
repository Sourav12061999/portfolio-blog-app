export interface ReviewTypes {
  positive: number;
  negative: number;
}
export interface TableDataTypes {
  id: string;
  title: string;
  visits: number;
  reviews: ReviewTypes;
  topics: string[];
}
export interface PropTypes {
  data: TableDataTypes[];
}
