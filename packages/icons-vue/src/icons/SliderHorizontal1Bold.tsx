// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontal1BoldSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontal1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontal1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontal1Bold: SliderHorizontal1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontal1BoldSvg}></AntdIcon>;
};

SliderHorizontal1Bold.displayName = 'SliderHorizontal1Bold';
SliderHorizontal1Bold.inheritAttrs = false;
export default SliderHorizontal1Bold;