// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontal1TwoToneSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontal1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontal1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontal1TwoTone: SliderHorizontal1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontal1TwoToneSvg}></AntdIcon>;
};

SliderHorizontal1TwoTone.displayName = 'SliderHorizontal1TwoTone';
SliderHorizontal1TwoTone.inheritAttrs = false;
export default SliderHorizontal1TwoTone;