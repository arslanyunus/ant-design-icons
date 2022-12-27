// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityBoldSvg from '@ant-design/icons-svg/lib/asn/SecurityBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityBold: SecurityBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityBoldSvg}></AntdIcon>;
};

SecurityBold.displayName = 'SecurityBold';
SecurityBold.inheritAttrs = false;
export default SecurityBold;