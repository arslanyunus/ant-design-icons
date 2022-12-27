// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityUserBoldSvg from '@ant-design/icons-svg/lib/asn/SecurityUserBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityUserBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityUserBold: SecurityUserBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityUserBoldSvg}></AntdIcon>;
};

SecurityUserBold.displayName = 'SecurityUserBold';
SecurityUserBold.inheritAttrs = false;
export default SecurityUserBold;