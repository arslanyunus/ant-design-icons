// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontal1OutlineSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontal1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontal1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontal1Outline: SliderHorizontal1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontal1OutlineSvg}></AntdIcon>;
};

SliderHorizontal1Outline.displayName = 'SliderHorizontal1Outline';
SliderHorizontal1Outline.inheritAttrs = false;
export default SliderHorizontal1Outline;