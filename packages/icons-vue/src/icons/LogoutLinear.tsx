// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutLinearSvg from '@ant-design/icons-svg/lib/asn/LogoutLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutLinear: LogoutLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutLinearSvg}></AntdIcon>;
};

LogoutLinear.displayName = 'LogoutLinear';
LogoutLinear.inheritAttrs = false;
export default LogoutLinear;