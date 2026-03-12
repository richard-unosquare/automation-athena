import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginActions } from '../actions/LoginActions';
import { DashboardPage } from '../pages/DashboardPage';
import { DashboardAssertions } from '../assertions/DashboardAssertions';
import { ENV } from '../config/env';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const loginActions = new LoginActions(loginPage);
  const dashboardPage = new DashboardPage(page);
  const dashboardAssertions = new DashboardAssertions(dashboardPage);
  await loginActions.navigate(ENV.INSTANCE_URL);
  await loginActions.login(ENV.USERNAME, ENV.PASSWORD);
  await dashboardAssertions.verifyDashboardLoaded();
});
