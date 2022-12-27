// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontalOutlineSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontalOutline: SliderHorizontalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontalOutlineSvg}></AntdIcon>;
};

SliderHorizontalOutline.displayName = 'SliderHorizontalOutline';
SliderHorizontalOutline.inheritAttrs = false;
export default SliderHorizontalOutline;