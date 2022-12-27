// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FatrowsBoldSvg from '@ant-design/icons-svg/lib/asn/FatrowsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FatrowsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FatrowsBold: FatrowsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FatrowsBoldSvg}></AntdIcon>;
};

FatrowsBold.displayName = 'FatrowsBold';
FatrowsBold.inheritAttrs = false;
export default FatrowsBold;