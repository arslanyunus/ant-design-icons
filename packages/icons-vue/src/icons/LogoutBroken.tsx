// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutBrokenSvg from '@ant-design/icons-svg/lib/asn/LogoutBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutBroken: LogoutBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBrokenSvg}></AntdIcon>;
};

LogoutBroken.displayName = 'LogoutBroken';
LogoutBroken.inheritAttrs = false;
export default LogoutBroken;