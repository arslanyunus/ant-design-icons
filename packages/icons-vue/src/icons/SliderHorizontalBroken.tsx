// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontalBrokenSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontalBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontalBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontalBroken: SliderHorizontalBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontalBrokenSvg}></AntdIcon>;
};

SliderHorizontalBroken.displayName = 'SliderHorizontalBroken';
SliderHorizontalBroken.inheritAttrs = false;
export default SliderHorizontalBroken;