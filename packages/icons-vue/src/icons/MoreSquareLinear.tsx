// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreSquareLinearSvg from '@ant-design/icons-svg/lib/asn/MoreSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreSquareLinear: MoreSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreSquareLinearSvg}></AntdIcon>;
};

MoreSquareLinear.displayName = 'MoreSquareLinear';
MoreSquareLinear.inheritAttrs = false;
export default MoreSquareLinear;