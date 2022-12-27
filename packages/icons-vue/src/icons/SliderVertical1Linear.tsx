// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVertical1LinearSvg from '@ant-design/icons-svg/lib/asn/SliderVertical1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVertical1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVertical1Linear: SliderVertical1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVertical1LinearSvg}></AntdIcon>;
};

SliderVertical1Linear.displayName = 'SliderVertical1Linear';
SliderVertical1Linear.inheritAttrs = false;
export default SliderVertical1Linear;