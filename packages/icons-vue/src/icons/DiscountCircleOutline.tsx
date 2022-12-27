// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/DiscountCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountCircleOutline: DiscountCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountCircleOutlineSvg}></AntdIcon>;
};

DiscountCircleOutline.displayName = 'DiscountCircleOutline';
DiscountCircleOutline.inheritAttrs = false;
export default DiscountCircleOutline;