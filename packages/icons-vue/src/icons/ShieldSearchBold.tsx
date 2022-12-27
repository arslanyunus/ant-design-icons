// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShieldSearchBoldSvg from '@ant-design/icons-svg/lib/asn/ShieldSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShieldSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShieldSearchBold: ShieldSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShieldSearchBoldSvg}></AntdIcon>;
};

ShieldSearchBold.displayName = 'ShieldSearchBold';
ShieldSearchBold.inheritAttrs = false;
export default ShieldSearchBold;