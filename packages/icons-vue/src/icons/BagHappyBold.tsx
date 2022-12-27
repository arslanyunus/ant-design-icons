// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagHappyBoldSvg from '@ant-design/icons-svg/lib/asn/BagHappyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagHappyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagHappyBold: BagHappyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagHappyBoldSvg}></AntdIcon>;
};

BagHappyBold.displayName = 'BagHappyBold';
BagHappyBold.inheritAttrs = false;
export default BagHappyBold;