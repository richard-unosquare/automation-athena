import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginActions } from '../actions/LoginActions';
import { LoginAssertions } from '../assertions/LoginAssertions';
import { DashboardAssertions } from '../assertions/DashboardAssertions';
import { DashboardPage } from '../pages/DashboardPage';
import { DashboardActions } from '../actions/DashboardActions';
import { ENV } from '../config/env';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let loginActions: LoginActions;
let dashboardActions: DashboardActions;
let loginAssertions: LoginAssertions;
let dashboardAssertions: DashboardAssertions;

test.describe('Logout Tests', () => {

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    loginActions = new LoginActions(loginPage);
    dashboardActions = new DashboardActions(dashboardPage);
    loginAssertions = new LoginAssertions(loginPage);
    dashboardAssertions = new DashboardAssertions(dashboardPage);
  });

  test('User can logout successfully', async () => {
    await loginActions.navigate(ENV.INSTANCE_URL);
    await loginActions.login(ENV.USERNAME, ENV.PASSWORD);
    await dashboardAssertions.verifyDashboardLoaded();
    await dashboardActions.logout();
    await loginAssertions.verifyLoginLoaded();
  });

});
