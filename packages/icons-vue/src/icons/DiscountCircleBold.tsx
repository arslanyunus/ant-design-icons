// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountCircleBoldSvg from '@ant-design/icons-svg/lib/asn/DiscountCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountCircleBold: DiscountCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountCircleBoldSvg}></AntdIcon>;
};

DiscountCircleBold.displayName = 'DiscountCircleBold';
DiscountCircleBold.inheritAttrs = false;
export default DiscountCircleBold;