// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathBoldSvg from '@ant-design/icons-svg/lib/asn/PathBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathBold: PathBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathBoldSvg}></AntdIcon>;
};

PathBold.displayName = 'PathBold';
PathBold.inheritAttrs = false;
export default PathBold;