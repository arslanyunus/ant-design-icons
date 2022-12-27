// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagBoldSvg from '@ant-design/icons-svg/lib/asn/BagBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagBold: BagBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagBoldSvg}></AntdIcon>;
};

BagBold.displayName = 'BagBold';
BagBold.inheritAttrs = false;
export default BagBold;