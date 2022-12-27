// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVerticalLinearSvg from '@ant-design/icons-svg/lib/asn/SliderVerticalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVerticalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVerticalLinear: SliderVerticalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVerticalLinearSvg}></AntdIcon>;
};

SliderVerticalLinear.displayName = 'SliderVerticalLinear';
SliderVerticalLinear.inheritAttrs = false;
export default SliderVerticalLinear;