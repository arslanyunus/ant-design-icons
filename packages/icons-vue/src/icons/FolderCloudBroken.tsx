// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCloudBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderCloudBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCloudBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCloudBroken: FolderCloudBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCloudBrokenSvg}></AntdIcon>;
};

FolderCloudBroken.displayName = 'FolderCloudBroken';
FolderCloudBroken.inheritAttrs = false;
export default FolderCloudBroken;