// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityOutlineSvg from '@ant-design/icons-svg/lib/asn/SecurityOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityOutline: SecurityOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityOutlineSvg}></AntdIcon>;
};

SecurityOutline.displayName = 'SecurityOutline';
SecurityOutline.inheritAttrs = false;
export default SecurityOutline;