// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountShapeOutlineSvg from '@ant-design/icons-svg/lib/asn/DiscountShapeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountShapeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountShapeOutline: DiscountShapeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountShapeOutlineSvg}></AntdIcon>;
};

DiscountShapeOutline.displayName = 'DiscountShapeOutline';
DiscountShapeOutline.inheritAttrs = false;
export default DiscountShapeOutline;