// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightLinearSvg from '@ant-design/icons-svg/lib/asn/AlignRightLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightLinear: AlignRightLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightLinearSvg}></AntdIcon>;
};

AlignRightLinear.displayName = 'AlignRightLinear';
AlignRightLinear.inheritAttrs = false;
export default AlignRightLinear;