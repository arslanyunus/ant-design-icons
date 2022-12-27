// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontal1BrokenSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontal1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontal1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontal1Broken: SliderHorizontal1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontal1BrokenSvg}></AntdIcon>;
};

SliderHorizontal1Broken.displayName = 'SliderHorizontal1Broken';
SliderHorizontal1Broken.inheritAttrs = false;
export default SliderHorizontal1Broken;