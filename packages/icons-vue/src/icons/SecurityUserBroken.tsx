// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityUserBrokenSvg from '@ant-design/icons-svg/lib/asn/SecurityUserBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityUserBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityUserBroken: SecurityUserBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityUserBrokenSvg}></AntdIcon>;
};

SecurityUserBroken.displayName = 'SecurityUserBroken';
SecurityUserBroken.inheritAttrs = false;
export default SecurityUserBroken;