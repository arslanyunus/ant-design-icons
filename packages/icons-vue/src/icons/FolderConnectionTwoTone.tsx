// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderConnectionTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderConnectionTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderConnectionTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderConnectionTwoTone: FolderConnectionTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderConnectionTwoToneSvg}></AntdIcon>;
};

FolderConnectionTwoTone.displayName = 'FolderConnectionTwoTone';
FolderConnectionTwoTone.inheritAttrs = false;
export default FolderConnectionTwoTone;