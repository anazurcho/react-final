import React from "react";
import { format } from "date-fns";

export const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'numberOfAvailableSeasons',
    selector: 'numberOfAvailableSeasons',
    sortable: true,
  }
];
export const columns2 = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'countryCode',
    selector: 'countryCode',
    sortable: true,
  },
  {
    name: 'parentArea',
    selector: 'parentArea',
    sortable: true,
  }
];