// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderVerticalBoldSvg from '@ant-design/icons-svg/lib/asn/SliderVerticalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderVerticalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderVerticalBold: SliderVerticalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderVerticalBoldSvg}></AntdIcon>;
};

SliderVerticalBold.displayName = 'SliderVerticalBold';
SliderVerticalBold.inheritAttrs = false;
export default SliderVerticalBold;