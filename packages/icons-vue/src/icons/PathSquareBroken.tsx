// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/PathSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathSquareBroken: PathSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathSquareBrokenSvg}></AntdIcon>;
};

PathSquareBroken.displayName = 'PathSquareBroken';
PathSquareBroken.inheritAttrs = false;
export default PathSquareBroken;