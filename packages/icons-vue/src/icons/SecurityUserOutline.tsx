// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityUserOutlineSvg from '@ant-design/icons-svg/lib/asn/SecurityUserOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityUserOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityUserOutline: SecurityUserOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityUserOutlineSvg}></AntdIcon>;
};

SecurityUserOutline.displayName = 'SecurityUserOutline';
SecurityUserOutline.inheritAttrs = false;
export default SecurityUserOutline;