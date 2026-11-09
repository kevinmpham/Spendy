-- Disable foreign key checks and autocommit for clean import
SET FOREIGN_KEY_CHECKS = 0;
SET AUTOCOMMIT = 0;

DROP TABLE IF EXISTS Expenses;
DROP TABLE IF EXISTS Incomes;

CREATE TABLE `Expenses` (
  `expenseID` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `expenseName` varchar(55) NOT NULL,
  `expenseAmount` decimal(10,2) NOT NULL,
  `expenseDate` date NOT NULL,
  PRIMARY KEY(expenseID)
);

CREATE TABLE `Incomes` (
  `incomeID` int(11) NOT NULL AUTO_INCREMENT UNIQUE,
  `incomeAmount` decimal(10,2) NOT NULL,
  PRIMARY KEY(incomeID)
);

INSERT INTO `Incomes` (`incomeID`, `incomeAmount`) VALUES
(1, 1000.00);

INSERT INTO `Expenses` (`expenseID`, `expenseName`, `expenseAmount`, `expenseDate`) VALUES
(1, 'Rent', 500.01, '2026-01-01'),
(2, 'Utilities', 100.01, '2026-01-01'),
(3, 'Groceries', 200.01, '2026-01-02'),
(4, 'Transportation', 50.01, '2026-01-03'),
(5, 'Entertainment', 150.01, '2026-01-04'),
(6, 'Rent', 500.02, '2026-02-01'),
(7, 'Utilities', 100.02, '2026-02-01'),
(8, 'Groceries', 200.02, '2026-02-02'),
(9, 'Transportation', 50.02, '2026-02-03'),
(10, 'Entertainment', 150.02, '2026-02-04'),
(11, 'Rent', 500.03, '2026-03-01'),
(12, 'Utilities', 100.03, '2026-03-01'),
(13, 'Groceries', 200.03, '2026-03-02'),
(14, 'Transportation', 50.03, '2026-03-03'),
(15, 'Entertainment', 150.03, '2026-03-04'),
(16, 'Rent', 500.04, '2026-04-01'),
(17, 'Utilities', 100.04, '2026-04-01'),
(18, 'Groceries', 200.04, '2026-04-02'),
(19, 'Transportation', 50.04, '2026-04-03'),
(20, 'Entertainment', 150.04, '2026-04-04'),
(21, 'Rent', 500.05, '2026-05-01'),
(22, 'Utilities', 100.05, '2026-05-01'),
(23, 'Groceries', 200.05, '2026-05-02'),
(24, 'Transportation', 50.05, '2026-05-03'),
(25, 'Entertainment', 150.05, '2026-05-04'),
(26, 'Rent', 500.06, '2026-06-01'),
(27, 'Utilities', 100.06, '2026-06-01'),
(28, 'Groceries', 200.06, '2026-06-02'),
(29, 'Transportation', 50.06, '2026-06-03'),
(30, 'Entertainment', 150.06, '2026-06-04'),
(31, 'Rent', 500.07, '2026-07-01'),
(32, 'Utilities', 100.07, '2026-07-01'),
(33, 'Groceries', 200.07, '2026-07-02'),
(34, 'Transportation', 50.07, '2026-07-03'),
(35, 'Entertainment', 150.07, '2026-07-04'),
(36, 'Rent', 500.08, '2026-08-01'),
(37, 'Utilities', 100.08, '2026-08-01'),
(38, 'Groceries', 200.08, '2026-08-02'),
(39, 'Transportation', 50.08, '2026-08-03'),
(40, 'Entertainment', 150.08, '2026-08-04'),
(41, 'Rent', 500.09, '2026-09-01'),
(42, 'Utilities', 100.09, '2026-09-01'),
(43, 'Groceries', 200.09, '2026-09-02'),
(44, 'Transportation', 50.09, '2026-09-03'),
(45, 'Entertainment', 150.09, '2026-09-04'),
(46, 'Rent', 500.10, '2026-10-01'),
(47, 'Utilities', 100.10, '2026-10-01'),
(48, 'Groceries', 200.10, '2026-10-02'),
(49, 'Transportation', 50.10, '2026-10-03'),
(50, 'Entertainment', 150.10, '2026-10-04'),
(51, 'Rent', 500.11, '2026-11-01'),
(52, 'Utilities', 100.11, '2026-11-01'),
(53, 'Groceries', 200.11, '2026-11-02'),
(54, 'Transportation', 50.11, '2026-11-03'),
(55, 'Entertainment', 150.11, '2026-11-04');

-- Re-enable foreign key checks and commit-
SET FOREIGN_KEY_CHECKS=1;
COMMIT;