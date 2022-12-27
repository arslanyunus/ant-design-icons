// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GeminiBoldSvg from '@ant-design/icons-svg/lib/asn/GeminiBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GeminiBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GeminiBold: GeminiBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GeminiBoldSvg}></AntdIcon>;
};

GeminiBold.displayName = 'GeminiBold';
GeminiBold.inheritAttrs = false;
export default GeminiBold;