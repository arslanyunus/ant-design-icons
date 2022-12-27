// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountShapeTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiscountShapeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountShapeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountShapeTwoTone: DiscountShapeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountShapeTwoToneSvg}></AntdIcon>;
};

DiscountShapeTwoTone.displayName = 'DiscountShapeTwoTone';
DiscountShapeTwoTone.inheritAttrs = false;
export default DiscountShapeTwoTone;