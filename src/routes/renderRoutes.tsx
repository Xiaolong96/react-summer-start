import React, { Suspense } from 'react';
import { Switch, Route, Redirect, RouteComponentProps, SwitchProps } from 'react-router-dom';
import { Location } from 'history';
import NoAuth from 'pages/exception/403';

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}>
  extends RouteComponentProps<Params> {
  route?: RouteConfig;
}

export interface MenuDataItem {
  hideChildrenInMenu?: boolean; // 是否在菜单中隐藏子路由
  hideInMenu?: boolean; // 是否在菜单中隐藏
  icon?: React.ReactNode; // 图标
  name?: string; // 菜单名称
}

export interface RouteConfig extends MenuDataItem {
  // accepts key prop to prevent remounting component when transition was made from route with the same component and same key prop
  key?: React.Key;
  location?: Location;
  component?:
    | React.ComponentType<RouteConfigComponentProps<any>>
    | React.ComponentType
    | React.LazyExoticComponent<any>;
  path?: string | string[];
  exact?: boolean;
  strict?: boolean;
  routes?: RouteConfig[];
  render?: (props: RouteConfigComponentProps<any>) => React.ReactNode;
  requireAuth?: boolean; // 是否需要登陆鉴权
  hasPermission?: boolean; // 是否有访问权限
  [propName: string]: any;
}

/**
 * renderRoutes
 *
 * @param {(RouteConfig[] | undefined)} routes 传入的路由配置
 * @param {boolean} authed  是否已经登陆授权
 * @param {string} [authPath="/login"] 登陆授权路径
 * @param {*} [extraProps={}] 额外的一些属性
 * @param {SwitchProps} [switchProps={}] Switch 的属性
 * @returns
 */
function renderRoutes(
  routes: RouteConfig[] | undefined,
  authed: boolean,
  authPath = '/login',
  extraProps = {},
  switchProps: SwitchProps = {},
) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: RouteConfig, i: number) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            if (!route.requireAuth || authed || route.path === authPath) {
              if (route.hasPermission) {
                return route.render ? (
                  route.render({ ...props, ...extraProps, route })
                ) : route.component ? (
                  <Suspense fallback={null}>
                    <route.component {...props} {...extraProps} route={route} />
                  </Suspense>
                ) : (
                  route.routes && renderRoutes(route.routes, authed, authPath)
                );
              }
              return <NoAuth />;
            }
            return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />;
          }}
        />
      ))}
    </Switch>
  ) : null;
}

export default renderRoutes;
