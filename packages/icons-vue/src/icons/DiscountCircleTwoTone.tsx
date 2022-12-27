// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiscountCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiscountCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiscountCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiscountCircleTwoTone: DiscountCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscountCircleTwoToneSvg}></AntdIcon>;
};

DiscountCircleTwoTone.displayName = 'DiscountCircleTwoTone';
DiscountCircleTwoTone.inheritAttrs = false;
export default DiscountCircleTwoTone;