// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutOutlineSvg from '@ant-design/icons-svg/lib/asn/LogoutOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutOutline: LogoutOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutOutlineSvg}></AntdIcon>;
};

LogoutOutline.displayName = 'LogoutOutline';
LogoutOutline.inheritAttrs = false;
export default LogoutOutline;