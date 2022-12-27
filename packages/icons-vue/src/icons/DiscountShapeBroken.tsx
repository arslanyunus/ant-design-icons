// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountShapeBrokenSvg from '@ant-design/icons-svg/lib/asn/DiscountShapeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountShapeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountShapeBroken: DiscountShapeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountShapeBrokenSvg}></AntdIcon>;
};

DiscountShapeBroken.displayName = 'DiscountShapeBroken';
DiscountShapeBroken.inheritAttrs = false;
export default DiscountShapeBroken;