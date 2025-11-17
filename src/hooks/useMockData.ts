import { Transaction } from "../types/transaction.dto";

const data: Transaction[] = [
  {id: 0,
  date: new Date('1-1-12'),
  description: "initial payment",
  amount: 3.5,
  },
  {id: 1,
  date: new Date('12-12-12'),
  description: "initial payment",
  amount: 3.5,
  },
  {id: 2,
  date: new Date('12-12-13'),
  description: "initial payment",
  amount: 3.5,
  },
  {id: 3,
  date: new Date('12-12-14'),
  description: "initial payment",
  amount: 3.5,
  },
  {id: 4,
  date: new Date('1-2-16'),
  description: "initial payment",
  amount: 3.5,
  },
  {id: 5,
  date: new Date('12-12-17'),
  description: "initial payment",
  amount: 3.5,
  },
  {id: 6,
  date: new Date('12-12-18'),
  description: "initial payment",
  amount: 3.5,
  },
];

const useMockData = () => {
    const getData = (from?: Date, to?: Date)=> {
      return data
      .filter(t => !to || t.date < to) 
      .filter(t => !from || t.date > from);
    }
  return {
    getData,
  }
};

export {useMockData};