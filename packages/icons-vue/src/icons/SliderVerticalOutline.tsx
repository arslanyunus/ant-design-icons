// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVerticalOutlineSvg from '@ant-design/icons-svg/lib/asn/SliderVerticalOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVerticalOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVerticalOutline: SliderVerticalOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVerticalOutlineSvg}></AntdIcon>;
};

SliderVerticalOutline.displayName = 'SliderVerticalOutline';
SliderVerticalOutline.inheritAttrs = false;
export default SliderVerticalOutline;