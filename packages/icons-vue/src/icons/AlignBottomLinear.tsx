// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignBottomLinearSvg from '@ant-design/icons-svg/lib/asn/AlignBottomLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignBottomLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignBottomLinear: AlignBottomLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomLinearSvg}></AntdIcon>;
};

AlignBottomLinear.displayName = 'AlignBottomLinear';
AlignBottomLinear.inheritAttrs = false;
export default AlignBottomLinear;