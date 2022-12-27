// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVertical1OutlineSvg from '@ant-design/icons-svg/lib/asn/SliderVertical1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVertical1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVertical1Outline: SliderVertical1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVertical1OutlineSvg}></AntdIcon>;
};

SliderVertical1Outline.displayName = 'SliderVertical1Outline';
SliderVertical1Outline.inheritAttrs = false;
export default SliderVertical1Outline;