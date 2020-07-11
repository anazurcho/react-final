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