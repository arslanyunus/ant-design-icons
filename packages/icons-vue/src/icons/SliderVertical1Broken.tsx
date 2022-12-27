// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVertical1BrokenSvg from '@ant-design/icons-svg/lib/asn/SliderVertical1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVertical1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVertical1Broken: SliderVertical1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVertical1BrokenSvg}></AntdIcon>;
};

SliderVertical1Broken.displayName = 'SliderVertical1Broken';
SliderVertical1Broken.inheritAttrs = false;
export default SliderVertical1Broken;