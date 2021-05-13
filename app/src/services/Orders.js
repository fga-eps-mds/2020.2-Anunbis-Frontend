export function orderPop(post1, post2) {
  if (post1?.feedbacks.agrees > post2?.feedbacks.agrees) return -1;
  if (post1?.feedbacks.agrees < post2?.feedbacks.agrees) return 1;
  return 0;
}

export function orderDate(post1, post2) {
  if (post1?.post_date > post2?.post_date) return -1;
  if (post1?.post_date < post2?.post_date) return 1;
  return 0;
}

export function orderHRate(post1, post2) {
  if (post1?.rating > post2?.rating) return -1;
  if (post1?.rating < post2?.rating) return 1;
  return 0;
}

export function orderLRate(post1, post2) {
  if (post1?.rating < post2?.rating) return -1;
  if (post1?.rating > post2?.rating) return 1;
  return 0;
}

export const orders = [
  { fun: orderPop, id: 0, name: 'Mais popular', selected: true },
  { fun: orderDate, id: 1, name: 'Mais recente' },
  { fun: orderHRate, id: 2, name: 'Maior Nota Geral' },
  { fun: orderLRate, id: 3, name: 'Menor Nota Geral' },
];
