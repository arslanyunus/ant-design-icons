// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderCloudTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCloudTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCloudTwoTone: FolderCloudTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCloudTwoToneSvg}></AntdIcon>;
};

FolderCloudTwoTone.displayName = 'FolderCloudTwoTone';
FolderCloudTwoTone.inheritAttrs = false;
export default FolderCloudTwoTone;