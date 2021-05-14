import renderer from 'react-test-renderer';
import { getPosts } from '../../services/Posts';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {createPostHandler, data, setPosts} from '../../mocks/handlers/post-handler';

// const api = setupServer(
//     rest.get('/post', (req, res, ctx) => {
//       return res(ctx.json({ posts: 'hello there' }))
//     })
//   )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

describe('Snapshot Api component', () => {
    it('getting Posts', () => {
    const data = {};
    const setPosts = (data) => {
        data = data
    }

    getPosts(setPosts)
    expect(data).toBe();
    })
})