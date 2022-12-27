// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecuritySafeBrokenSvg from '@ant-design/icons-svg/lib/asn/SecuritySafeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecuritySafeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecuritySafeBroken: SecuritySafeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecuritySafeBrokenSvg}></AntdIcon>;
};

SecuritySafeBroken.displayName = 'SecuritySafeBroken';
SecuritySafeBroken.inheritAttrs = false;
export default SecuritySafeBroken;