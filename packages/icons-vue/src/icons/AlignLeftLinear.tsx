// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignLeftLinearSvg from '@ant-design/icons-svg/lib/asn/AlignLeftLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignLeftLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignLeftLinear: AlignLeftLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignLeftLinearSvg}></AntdIcon>;
};

AlignLeftLinear.displayName = 'AlignLeftLinear';
AlignLeftLinear.inheritAttrs = false;
export default AlignLeftLinear;