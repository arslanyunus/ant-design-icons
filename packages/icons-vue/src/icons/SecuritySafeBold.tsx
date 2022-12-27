// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecuritySafeBoldSvg from '@ant-design/icons-svg/lib/asn/SecuritySafeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecuritySafeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecuritySafeBold: SecuritySafeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecuritySafeBoldSvg}></AntdIcon>;
};

SecuritySafeBold.displayName = 'SecuritySafeBold';
SecuritySafeBold.inheritAttrs = false;
export default SecuritySafeBold;