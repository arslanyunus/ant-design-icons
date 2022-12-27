// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityBrokenSvg from '@ant-design/icons-svg/lib/asn/SecurityBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityBroken: SecurityBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityBrokenSvg}></AntdIcon>;
};

SecurityBroken.displayName = 'SecurityBroken';
SecurityBroken.inheritAttrs = false;
export default SecurityBroken;