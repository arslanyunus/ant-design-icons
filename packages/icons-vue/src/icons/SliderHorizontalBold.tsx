// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontalBoldSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontalBold: SliderHorizontalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontalBoldSvg}></AntdIcon>;
};

SliderHorizontalBold.displayName = 'SliderHorizontalBold';
SliderHorizontalBold.inheritAttrs = false;
export default SliderHorizontalBold;