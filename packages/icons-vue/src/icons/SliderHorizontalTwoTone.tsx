// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontalTwoToneSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontalTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontalTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontalTwoTone: SliderHorizontalTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontalTwoToneSvg}></AntdIcon>;
};

SliderHorizontalTwoTone.displayName = 'SliderHorizontalTwoTone';
SliderHorizontalTwoTone.inheritAttrs = false;
export default SliderHorizontalTwoTone;