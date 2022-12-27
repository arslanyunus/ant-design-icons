// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathBulkSvg from '@ant-design/icons-svg/lib/asn/PathBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathBulk: PathBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathBulkSvg}></AntdIcon>;
};

PathBulk.displayName = 'PathBulk';
PathBulk.inheritAttrs = false;
export default PathBulk;