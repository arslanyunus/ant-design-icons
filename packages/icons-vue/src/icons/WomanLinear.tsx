// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WomanLinearSvg from '@ant-design/icons-svg/lib/asn/WomanLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WomanLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WomanLinear: WomanLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WomanLinearSvg}></AntdIcon>;
};

WomanLinear.displayName = 'WomanLinear';
WomanLinear.inheritAttrs = false;
export default WomanLinear;