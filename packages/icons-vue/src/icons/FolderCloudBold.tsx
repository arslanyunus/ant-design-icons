// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCloudBoldSvg from '@ant-design/icons-svg/lib/asn/FolderCloudBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCloudBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCloudBold: FolderCloudBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCloudBoldSvg}></AntdIcon>;
};

FolderCloudBold.displayName = 'FolderCloudBold';
FolderCloudBold.inheritAttrs = false;
export default FolderCloudBold;