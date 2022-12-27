// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathBrokenSvg from '@ant-design/icons-svg/lib/asn/PathBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathBroken: PathBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathBrokenSvg}></AntdIcon>;
};

PathBroken.displayName = 'PathBroken';
PathBroken.inheritAttrs = false;
export default PathBroken;