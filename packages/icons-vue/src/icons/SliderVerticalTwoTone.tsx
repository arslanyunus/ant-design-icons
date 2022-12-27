// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVerticalTwoToneSvg from '@ant-design/icons-svg/lib/asn/SliderVerticalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVerticalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVerticalTwoTone: SliderVerticalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVerticalTwoToneSvg}></AntdIcon>;
};

SliderVerticalTwoTone.displayName = 'SliderVerticalTwoTone';
SliderVerticalTwoTone.inheritAttrs = false;
export default SliderVerticalTwoTone;