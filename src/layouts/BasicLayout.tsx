import React from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  // SettingDrawer,
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

  // const [settings, setSettings] = useState({});

  return (
    <ProLayout
      title="React 模板"
      logo={logo}
      // route={props.route}
      // {...settings}
      // layout="mix"
      siderWidth={180}
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
      rightContentRender={() => <div style={{ color: '#fff' }}>RightContent</div>}
      {...props}
    >
      {renderRoutes(props.route?.routes, true)}
      {/* <SettingDrawer settings={settings} onSettingChange={setSettings} /> */}
    </ProLayout>
  );
};

export default BasicLayout;
