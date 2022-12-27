// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountShapeBoldSvg from '@ant-design/icons-svg/lib/asn/DiscountShapeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountShapeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountShapeBold: DiscountShapeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountShapeBoldSvg}></AntdIcon>;
};

DiscountShapeBold.displayName = 'DiscountShapeBold';
DiscountShapeBold.inheritAttrs = false;
export default DiscountShapeBold;