// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathSquareLinearSvg from '@ant-design/icons-svg/lib/asn/PathSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathSquareLinear: PathSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathSquareLinearSvg}></AntdIcon>;
};

PathSquareLinear.displayName = 'PathSquareLinear';
PathSquareLinear.inheritAttrs = false;
export default PathSquareLinear;