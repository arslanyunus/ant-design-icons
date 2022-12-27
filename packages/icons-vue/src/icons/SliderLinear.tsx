// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderLinearSvg from '@ant-design/icons-svg/lib/asn/SliderLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderLinear: SliderLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderLinearSvg}></AntdIcon>;
};

SliderLinear.displayName = 'SliderLinear';
SliderLinear.inheritAttrs = false;
export default SliderLinear;