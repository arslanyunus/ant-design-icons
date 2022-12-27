// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BusBoldSvg from '@ant-design/icons-svg/lib/asn/BusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BusBold: BusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BusBoldSvg}></AntdIcon>;
};

BusBold.displayName = 'BusBold';
BusBold.inheritAttrs = false;
export default BusBold;