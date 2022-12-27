// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SliderOutlineSvg from '@ant-design/icons-svg/lib/asn/SliderOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SliderOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SliderOutline: SliderOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SliderOutlineSvg}></AntdIcon>;
};

SliderOutline.displayName = 'SliderOutline';
SliderOutline.inheritAttrs = false;
export default SliderOutline;