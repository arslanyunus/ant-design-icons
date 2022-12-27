// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LogoutBoldSvg from '@ant-design/icons-svg/lib/asn/LogoutBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LogoutBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LogoutBold: LogoutBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBoldSvg}></AntdIcon>;
};

LogoutBold.displayName = 'LogoutBold';
LogoutBold.inheritAttrs = false;
export default LogoutBold;