// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/DiscountCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountCircleBroken: DiscountCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountCircleBrokenSvg}></AntdIcon>;
};

DiscountCircleBroken.displayName = 'DiscountCircleBroken';
DiscountCircleBroken.inheritAttrs = false;
export default DiscountCircleBroken;