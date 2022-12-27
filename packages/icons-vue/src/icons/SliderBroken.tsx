// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderBrokenSvg from '@ant-design/icons-svg/lib/asn/SliderBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderBroken: SliderBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderBrokenSvg}></AntdIcon>;
};

SliderBroken.displayName = 'SliderBroken';
SliderBroken.inheritAttrs = false;
export default SliderBroken;