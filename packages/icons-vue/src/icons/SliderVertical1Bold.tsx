// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVertical1BoldSvg from '@ant-design/icons-svg/lib/asn/SliderVertical1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVertical1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVertical1Bold: SliderVertical1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVertical1BoldSvg}></AntdIcon>;
};

SliderVertical1Bold.displayName = 'SliderVertical1Bold';
SliderVertical1Bold.inheritAttrs = false;
export default SliderVertical1Bold;