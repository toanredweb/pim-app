/*
 * @copyright   Copyright (C) 2022 AesirX. All rights reserved.
 * @license     GNU General Public License version 3, see LICENSE.
 */

// import { isLogin } from 'auth';

import CategoriesPage from 'containers/CategoriesPage';
import React, { lazy } from 'react';
// import { Redirect } from 'react-router-dom';

const LoginPage = lazy(() => import('../containers/LoginPage'));

const WelcomePage = lazy(() => import('../containers/WelcomePage'));
const DashboardPage = lazy(() => import('../containers/Dashboard'));
const SubscriptionPage = lazy(() => import('../containers/SubscriptionPage'));
const MembersListPage = lazy(() => import('../containers/MembersListPage'));
const DataStreamPage = lazy(() => import('../containers/DataStreamPage'));
const RegionCountryPage = lazy(() => import('../containers/RegionCountryPage'));
const SettingPage = lazy(() => import('containers/SettingPage'));
const HelpCenterPage = lazy(() => import('containers/HelpCenterPage'));
const EditProductProvider = lazy(() => import('containers/ProductsPage/edit'));
const EditCategoryProvider = lazy(() => import('containers/CategoriesPage/edit'));
const EditFieldProvider = lazy(() => import('containers/FieldsPage/edit'));
const DigitalAssetsPage = lazy(() => import('containers/DigitalAssetsPage'));

const ProfilePage = lazy(() => import('../containers/ProfilePage'));
const ProductsPage = lazy(() => import('../containers/ProductsPage'));

const authRoutes = [
  {
    path: '/login',
    exact: true,
    main: () => <LoginPage />,
  },
];

const mainRoutes = [
  {
    path: ['/'],
    exact: true,
    main: () => <DashboardPage />,
  },
  {
    path: ['/products', '/products/all'],
    exact: true,
    main: () => <ProductsPage />,
  },
  {
    path: ['/categories', '/categories'],
    exact: true,
    main: () => <CategoriesPage />,
  },
  {
    path: '/subscription',
    exact: true,
    main: () => <SubscriptionPage />,
  },
  {
    path: '/members-list',
    exact: true,
    main: () => <MembersListPage />,
  },
  {
    path: '/data-stream',
    exact: true,
    main: () => <DataStreamPage />,
  },
  {
    path: ['/setting', '/setting/configuration'],
    exact: true,
    main: () => <SettingPage />,
  },
  {
    path: '/region-country',
    exact: true,
    main: () => <RegionCountryPage />,
  },
  {
    path: '/help-center',
    exact: true,
    main: () => <HelpCenterPage />,
  },
  {
    path: '/products/edit/:id',
    exact: true,
    main: ({ match }) => <EditProductProvider match={match} />,
  },
  {
    path: '/products/add',
    exact: true,
    main: () => <EditProductProvider />,
  },
  {
    path: '/categories/edit/:id',
    exact: true,
    main: ({ match }) => <EditCategoryProvider match={match} />,
  },
  {
    path: '/categories/add',
    exact: true,
    main: () => <EditCategoryProvider />,
  },
  {
    path: '/fields/edit/:id',
    exact: true,
    main: ({ match }) => <EditFieldProvider match={match} />,
  },
  {
    path: '/fields/add',
    exact: true,
    main: () => <EditFieldProvider />,
  },
  {
    path: '/dam',
    exact: true,
    main: () => <DigitalAssetsPage />,
  },
];

const settingRoutes = [
  {
    path: '/profile',
    exact: false,
    main: ({ match, location }) => <ProfilePage match={match} location={location} />,
  },
  {
    path: '/welcome',
    exact: true,
    main: () => <WelcomePage />,
  },
];

export { authRoutes, mainRoutes, settingRoutes };
