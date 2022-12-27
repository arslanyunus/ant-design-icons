// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVerticalBrokenSvg from '@ant-design/icons-svg/lib/asn/SliderVerticalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVerticalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVerticalBroken: SliderVerticalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVerticalBrokenSvg}></AntdIcon>;
};

SliderVerticalBroken.displayName = 'SliderVerticalBroken';
SliderVerticalBroken.inheritAttrs = false;
export default SliderVerticalBroken;