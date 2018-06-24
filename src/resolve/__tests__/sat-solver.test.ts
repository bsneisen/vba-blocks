import { solve } from '../sat-solver';
import Resolver from '../resolver';
import { getConfig } from '../../../tests/__helpers__';
import * as workspaces from '../../../tests/__fixtures__/workspaces';

test('solves simple tree', async () => {
  const config = getConfig();
  const resolver = new Resolver(config);

  const solution = await solve(workspaces.simple, resolver);

  expect(solution).toMatchSnapshot();
});

test('solves complex tree', async () => {
  const config = getConfig();
  const resolver = new Resolver(config);

  const solution = await solve(workspaces.complex, resolver);

  expect(solution).toMatchSnapshot();
});

test('solves needs-sat tree', async () => {
  const config = getConfig();
  const resolver = new Resolver(config);

  const solution = await solve(workspaces.needsSat, resolver);

  expect(solution).toMatchSnapshot();
});

test('fails to solve unresolvable tree', async () => {
  const config = getConfig();
  const resolver = new Resolver(config);

  await expect(
    solve(workspaces.unresolvable, resolver)
  ).rejects.toMatchSnapshot();
});
