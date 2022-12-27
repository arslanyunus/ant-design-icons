// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DropLinearSvg from '@ant-design/icons-svg/lib/asn/DropLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DropLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DropLinear: DropLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropLinearSvg}></AntdIcon>;
};

DropLinear.displayName = 'DropLinear';
DropLinear.inheritAttrs = false;
export default DropLinear;