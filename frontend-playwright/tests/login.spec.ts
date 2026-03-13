import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginActions } from '../actions/LoginActions';
import { DashboardPage } from '../pages/DashboardPage';
import { DashboardAssertions } from '../assertions/DashboardAssertions';
import { ENV } from '../config/env';

let loginPage: LoginPage;
let loginActions: LoginActions;
let dashboardPage: DashboardPage;
let dashboardAssertions: DashboardAssertions;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  loginActions = new LoginActions(loginPage);
  dashboardPage = new DashboardPage(page);
  dashboardAssertions = new DashboardAssertions(dashboardPage);
});

test('User can login successfully', async () => {
  await loginActions.navigate(ENV.INSTANCE_URL);
  await loginActions.login(ENV.USERNAME, ENV.PASSWORD);
  await dashboardAssertions.verifyDashboardLoaded();
});
