// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTickBoldSvg from '@ant-design/icons-svg/lib/asn/BagTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTickBold: BagTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTickBoldSvg}></AntdIcon>;
};

BagTickBold.displayName = 'BagTickBold';
BagTickBold.inheritAttrs = false;
export default BagTickBold;