export interface Job {
  id: number;
  jobNum: string;
  typeOfOrder: string;
  customerNumber: string;
  customerName: string;
  scheduledShipDate: string;
  pressRunFootage: number;
  itemNumber: string;
  description: string;
  quantity: number;
  varnish: boolean;
  materialOne: string;
  materialTwo: string;
  materialThree: string;
  die: string;
  ac: number;
  hpCopy: number;
  hpRepeat: number;
  maximumOd: number;
  productCode: string;
  hpRepeatFull: number;
  creationTime: string;
  tracking: string;
  tableCount: number;
  comment: string;



}
