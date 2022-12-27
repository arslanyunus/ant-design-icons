// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderBoldSvg from '@ant-design/icons-svg/lib/asn/SliderBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderBold: SliderBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderBoldSvg}></AntdIcon>;
};

SliderBold.displayName = 'SliderBold';
SliderBold.inheritAttrs = false;
export default SliderBold;