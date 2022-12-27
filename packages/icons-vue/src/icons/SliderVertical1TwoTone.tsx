// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVertical1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SliderVertical1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVertical1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVertical1TwoTone: SliderVertical1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVertical1TwoToneSvg}></AntdIcon>;
};

SliderVertical1TwoTone.displayName = 'SliderVertical1TwoTone';
SliderVertical1TwoTone.inheritAttrs = false;
export default SliderVertical1TwoTone;