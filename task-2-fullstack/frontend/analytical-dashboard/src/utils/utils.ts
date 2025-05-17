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

export const calculateAverageIncomePercentage = (
  data: CustomerData[],
  maxIncome: number
): string => {
  if (data.length === 0 || maxIncome <= 0) return "0%";

  const totalIncome = data.reduce((sum, person) => sum + person.income, 0);
  const averageIncome = totalIncome / data.length;
  const percentage = (averageIncome / maxIncome) * 100;

  return `${percentage.toFixed(2)}%`;
};

export const countGender = (data: CustomerData[]) => {
  const count = {
    Male: 0,
    Female: 0,
  };

  data.forEach((person) => {
    if (person.gender === "M") {
      count.Male++;
    } else if (person.gender === "F") {
      count.Female++;
    }
  });

  return count;
};
