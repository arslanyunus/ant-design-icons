// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseCrossBoldSvg from '@ant-design/icons-svg/lib/asn/BrifecaseCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseCrossBold: BrifecaseCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseCrossBoldSvg}></AntdIcon>;
};

BrifecaseCrossBold.displayName = 'BrifecaseCrossBold';
BrifecaseCrossBold.inheritAttrs = false;
export default BrifecaseCrossBold;