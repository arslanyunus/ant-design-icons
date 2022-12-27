// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxLinearSvg from '@ant-design/icons-svg/lib/asn/BoxLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxLinear: BoxLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxLinearSvg}></AntdIcon>;
};

BoxLinear.displayName = 'BoxLinear';
BoxLinear.inheritAttrs = false;
export default BoxLinear;