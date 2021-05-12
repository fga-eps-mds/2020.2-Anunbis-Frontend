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
  const rating1 =
    post1?.didactic +
    post1?.metod +
    post1?.avaliations +
    post1?.disponibility / 4;

  const rating2 =
    post2?.didactic +
    post2?.metod +
    post2?.avaliations +
    post2?.disponibility / 4;

  if (rating1 > rating2) return -1;
  if (rating1 < rating2) return 1;
  return 0;
}

export function orderLRate(post1, post2) {
  const rating1 =
    post1?.didactic +
    post1?.metod +
    post1?.avaliations +
    post1?.disponibility / 4;

  const rating2 =
    post2?.didactic +
    post2?.metod +
    post2?.avaliations +
    post2?.disponibility / 4;

  if (rating1 < rating2) return -1;
  if (rating1 > rating2) return 1;
  return 0;
}

export const orders = [
  { fun: orderPop, id: 0, name: 'Mais popular', selected: true },
  { fun: orderDate, id: 1, name: 'Data de Envio' },
  { fun: orderHRate, id: 2, name: 'Maior Nota Geral' },
  { fun: orderLRate, id: 3, name: 'Menor Nota Geral' },
];
