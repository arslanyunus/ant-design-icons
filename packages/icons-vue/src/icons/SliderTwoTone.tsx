// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderTwoToneSvg from '@ant-design/icons-svg/lib/asn/SliderTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderTwoTone: SliderTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderTwoToneSvg}></AntdIcon>;
};

SliderTwoTone.displayName = 'SliderTwoTone';
SliderTwoTone.inheritAttrs = false;
export default SliderTwoTone;