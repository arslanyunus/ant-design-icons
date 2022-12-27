// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCrossBoldSvg from '@ant-design/icons-svg/lib/asn/BagCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCrossBold: BagCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCrossBoldSvg}></AntdIcon>;
};

BagCrossBold.displayName = 'BagCrossBold';
BagCrossBold.inheritAttrs = false;
export default BagCrossBold;