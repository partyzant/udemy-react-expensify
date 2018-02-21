export default (expenses) => (
    expenses.reduce((sum, elem) => sum + elem.amount, 0)
);