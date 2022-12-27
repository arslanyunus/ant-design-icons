// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathLinearSvg from '@ant-design/icons-svg/lib/asn/PathLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathLinear: PathLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathLinearSvg}></AntdIcon>;
};

PathLinear.displayName = 'PathLinear';
PathLinear.inheritAttrs = false;
export default PathLinear;