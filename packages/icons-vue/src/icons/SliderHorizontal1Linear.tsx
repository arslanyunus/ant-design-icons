// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontal1LinearSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontal1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontal1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontal1Linear: SliderHorizontal1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontal1LinearSvg}></AntdIcon>;
};

SliderHorizontal1Linear.displayName = 'SliderHorizontal1Linear';
SliderHorizontal1Linear.inheritAttrs = false;
export default SliderHorizontal1Linear;