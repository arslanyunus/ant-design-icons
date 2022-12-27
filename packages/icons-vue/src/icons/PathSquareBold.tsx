// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathSquareBoldSvg from '@ant-design/icons-svg/lib/asn/PathSquareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathSquareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathSquareBold: PathSquareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathSquareBoldSvg}></AntdIcon>;
};

PathSquareBold.displayName = 'PathSquareBold';
PathSquareBold.inheritAttrs = false;
export default PathSquareBold;