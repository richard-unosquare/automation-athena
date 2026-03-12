import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginActions } from '../actions/LoginActions';
import { LoginAssertions } from '../assertions/LoginAssertions';
import { DashboardAssertions } from '../assertions/DashboardAssertions';
import { DashboardPage } from '../pages/DashboardPage';
import { DashboardActions } from '../actions/DashboardActions';

import { ENV } from '../config/env';

test('User can logout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const loginActions = new LoginActions(loginPage);
  const dashboardActions = new DashboardActions(dashboardPage);
  const loginAssertions = new LoginAssertions(loginPage);
  const dashboardAssertions = new DashboardAssertions(dashboardPage);
  await loginActions.navigate(ENV.INSTANCE_URL);
  await loginActions.login(ENV.USERNAME, ENV.PASSWORD);
  await dashboardAssertions.verifyDashboardLoaded();
  await dashboardActions.logout();
  await loginAssertions.verifyLoginLoaded();
});
