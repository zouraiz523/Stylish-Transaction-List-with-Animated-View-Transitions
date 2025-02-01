// ? Selecting the container element that holds all transactions.
const container = document.querySelector('.container');

// * Attach a click event listener to the container.
container.addEventListener('click', (e) => {
  // ? Determine if the clicked element is part of a transaction.
  const transaction = e.target.closest('.transaction');
  // ? Determine if the clicked element is a close button.
  const closeBtn = e.target.closest('.close-btn');

  // ! If a close button is clicked, collapse the expanded transaction.
  if (closeBtn) {
    // NOTE: Get the currently expanded transaction (if any).
    const expandedTransaction = document.querySelector('.transaction.expanded');
    // NOTE: Get all other transactions to remove the "not-expanded" class.
    const otherTransactions = [...document.querySelectorAll('.transaction')].filter(
      t => t !== expandedTransaction
    );
    // * Remove the "not-expanded" styling from non-active transactions.
    otherTransactions.forEach(t => t.classList.remove('not-expanded'));

    // ? If there is an expanded transaction, collapse it with a transition.
    if (expandedTransaction) {
      document.startViewTransition({
        update: () => {
          // TODO: Remove the "expanded" class to collapse the transaction.
          expandedTransaction.classList.remove('expanded');
        },
        types: ['collapse']
      });
    }
    return;
  }
  // ! If a transaction (but not a close button) is clicked, expand it.
  else if (transaction) {
    // NOTE: Only expand the transaction if it's not already expanded.
    if (!transaction.classList.contains('expanded')) {
      // ? Add "not-expanded" class to all other transactions.
      const otherTransactions = [...document.querySelectorAll('.transaction')].filter(
        t => t !== transaction
      );
      otherTransactions.forEach(t => t.classList.add('not-expanded'));

      // * Start the view transition to expand the clicked transaction.
      document.startViewTransition({
        update: () => {
          // TODO: Add the "expanded" class to the clicked transaction.
          transaction.classList.add('expanded');
        },
        types: ['expand']
      });
    }
  }
});
