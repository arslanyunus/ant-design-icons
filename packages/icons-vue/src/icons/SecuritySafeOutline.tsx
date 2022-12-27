// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecuritySafeOutlineSvg from '@ant-design/icons-svg/lib/asn/SecuritySafeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecuritySafeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecuritySafeOutline: SecuritySafeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecuritySafeOutlineSvg}></AntdIcon>;
};

SecuritySafeOutline.displayName = 'SecuritySafeOutline';
SecuritySafeOutline.inheritAttrs = false;
export default SecuritySafeOutline;