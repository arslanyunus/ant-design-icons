// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCloudOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderCloudOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCloudOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCloudOutline: FolderCloudOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCloudOutlineSvg}></AntdIcon>;
};

FolderCloudOutline.displayName = 'FolderCloudOutline';
FolderCloudOutline.inheritAttrs = false;
export default FolderCloudOutline;