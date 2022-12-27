// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityCardBrokenSvg from '@ant-design/icons-svg/lib/asn/SecurityCardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityCardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityCardBroken: SecurityCardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityCardBrokenSvg}></AntdIcon>;
};

SecurityCardBroken.displayName = 'SecurityCardBroken';
SecurityCardBroken.inheritAttrs = false;
export default SecurityCardBroken;