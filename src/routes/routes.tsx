import React, { lazy } from 'react';
import { RouteConfig } from './renderRoutes';
import { HomeFilled } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

const routes: RouteConfig[] = [
  {
    path: '/',
    requireAuth: true,
    hasPermission: true,
    component: lazy(() => import('layouts/BasicLayout')),
    routes: [
      {
        path: '/',
        exact: true,
        hasPermission: true,
        render: () => <Redirect to="/dashboard/analysis" push />,
      },
      {
        name: 'dashboard',
        icon: <HomeFilled />,
        path: '/dashboard',
        hasPermission: true,
        routes: [
          {
            key: 'analysis',
            name: '分析页',
            icon: <HomeFilled />,
            path: '/dashboard/analysis',
            exact: true,
            requireAuth: true,
            hasPermission: true,
            component: lazy(() => import('pages/dashboard/analysis')),
          },
          {
            key: 'monitor',
            name: '监控页',
            icon: <HomeFilled />,
            path: '/dashboard/monitor',
            exact: true,
            requireAuth: true,
            hasPermission: true,
            component: lazy(() => import('pages/dashboard/monitor')),
          },
        ],
      },
      {
        key: '404',
        hasPermission: true,
        component: lazy(() => import('pages/exception/404/index')),
      },
    ],
  },
];

export default routes;
