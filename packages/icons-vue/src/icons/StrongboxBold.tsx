// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrongboxBoldSvg from '@ant-design/icons-svg/lib/asn/StrongboxBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrongboxBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrongboxBold: StrongboxBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrongboxBoldSvg}></AntdIcon>;
};

StrongboxBold.displayName = 'StrongboxBold';
StrongboxBold.inheritAttrs = false;
export default StrongboxBold;