import React from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
} from '@ant-design/pro-layout';
import { renderRoutes } from '../routes/index';
import { Link, useHistory } from 'react-router-dom';
import logo from 'assets/logo.svg';

export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'];
}

const TitleDom = () => {
  return <span style={{ color: 'black' }}>Title</span>;
};

const BasicLayout: React.FC<BasicLayoutProps> = props => {
  const history = useHistory();
  return (
    <ProLayout
      title="Summer"
      logo={logo}
      // route={props.route}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页',
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      headerContentRender={TitleDom}
      rightContentRender={() => <div>RightContent</div>}
      {...props}
    >
      {renderRoutes(props.route ? props.route.routes : [], true)}
    </ProLayout>
  );
};

export default BasicLayout;
