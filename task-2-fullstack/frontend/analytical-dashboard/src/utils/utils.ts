import type { CustomerData, MaritalStatus } from "../type/type";

export const getAverageIncomeByDivision = (data: CustomerData[]) => {
  const divisionIncomeStats: {
    [division: string]: { total: number; count: number };
  } = {};

  data.forEach((customer) => {
    if (!divisionIncomeStats[customer.division]) {
      divisionIncomeStats[customer.division] = { total: 0, count: 0 };
    }

    if (customer.income > 0) {
      divisionIncomeStats[customer.division].total += customer.income;
      divisionIncomeStats[customer.division].count++;
    }
  });

  return Object.entries(divisionIncomeStats).map(([division, stats]) => ({
    division,
    averageIncome: stats.count > 0 ? Math.round(stats.total / stats.count) : 0,
  }));
};

export const countMaritalStatuses = (data: CustomerData[]) => {
  const count: Record<MaritalStatus, number> = {
    Single: 0,
    Married: 0,
    Divorced: 0,
  };

  data.forEach((person) => {
    if (person.maritalStatus in count) {
      count[person.maritalStatus]++;
    }
  });

  return count;
};
