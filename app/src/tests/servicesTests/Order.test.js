import renderer from 'react-test-renderer';
import {
  orderPop,
  orderDate,
  orderHRate,
  orderLRate,
  orders,
} from '../../services/Orders';

describe('orderPop service test', () => {
  function createPostWithAgree(num) {
    const post = {
      feedbacks: {
        agrees: num,
      },
    };
    return post;
  }
  it('must return -1 on orderPop', () => {
    const post1 = createPostWithAgree(5);
    const post2 = createPostWithAgree(4);
    expect(orderPop(post1, post2)).toBe(-1);
  });
  it('must return 1 on orderPop', () => {
    const post1 = createPostWithAgree(4);
    const post2 = createPostWithAgree(5);
    expect(orderPop(post1, post2)).toBe(1);
  });
  it('must return 0 on orderPop', () => {
    const post1 = createPostWithAgree(5);
    const post2 = createPostWithAgree(5);
    expect(orderPop(post1, post2)).toBe(0);
  });
});

describe('orderDate service test', () => {
  function createPostWithDate(date) {
    const post = {
      post_date: date,
    };
    return post;
  }
  it('orderDate must return -1', () => {
    const post1 = createPostWithDate(2021);
    const post2 = createPostWithDate(2020);
    expect(orderDate(post1, post2)).toBe(-1);
  });
  it('orderDate must return 1', () => {
    const post1 = createPostWithDate(2020);
    const post2 = createPostWithDate(2021);
    expect(orderDate(post1, post2)).toBe(1);
  });
  it('orderDate must return 0', () => {
    const post1 = createPostWithDate(2020);
    const post2 = createPostWithDate(2020);
    expect(orderDate(post1, post2)).toBe(0);
  });
});

describe('orderHRate service test', () => {
  function createPostWithRating(rating) {
    const post = {
      rating,
    };
    return post;
  }
  it('orderDate must return -1', () => {
    const post1 = createPostWithRating(5);
    const post2 = createPostWithRating(4);
    expect(orderHRate(post1, post2)).toBe(-1);
  });
  it('orderDate must return 1', () => {
    const post1 = createPostWithRating(4);
    const post2 = createPostWithRating(5);
    expect(orderHRate(post1, post2)).toBe(1);
  });
  it('orderDate must return 0', () => {
    const post1 = createPostWithRating(4);
    const post2 = createPostWithRating(4);
    expect(orderHRate(post1, post2)).toBe(0);
  });
});

describe('orderLRate service test', () => {
  function createPostWithRating(rating) {
    const post = {
      rating,
    };
    return post;
  }
  it('orderDate must return -1', () => {
    const post1 = createPostWithRating(4);
    const post2 = createPostWithRating(5);
    expect(orderLRate(post1, post2)).toBe(-1);
  });
  it('orderDate must return 1', () => {
    const post1 = createPostWithRating(5);
    const post2 = createPostWithRating(4);
    expect(orderLRate(post1, post2)).toBe(1);
  });
  it('orderDate must return 0', () => {
    const post1 = createPostWithRating(4);
    const post2 = createPostWithRating(4);
    expect(orderLRate(post1, post2)).toBe(0);
  });
});

describe('orders service test', () => {
  it('orders must be the same', () => {
    expect(orders).toMatchSnapshot();
  });
});
