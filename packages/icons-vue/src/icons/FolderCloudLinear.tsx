// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCloudLinearSvg from '@ant-design/icons-svg/lib/asn/FolderCloudLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCloudLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCloudLinear: FolderCloudLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCloudLinearSvg}></AntdIcon>;
};

FolderCloudLinear.displayName = 'FolderCloudLinear';
FolderCloudLinear.inheritAttrs = false;
export default FolderCloudLinear;