// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderHorizontalLinearSvg from '@ant-design/icons-svg/lib/asn/SliderHorizontalLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderHorizontalLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderHorizontalLinear: SliderHorizontalLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderHorizontalLinearSvg}></AntdIcon>;
};

SliderHorizontalLinear.displayName = 'SliderHorizontalLinear';
SliderHorizontalLinear.inheritAttrs = false;
export default SliderHorizontalLinear;