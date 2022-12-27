// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenBoldSvg from '@ant-design/icons-svg/lib/asn/FolderOpenBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenBold: FolderOpenBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenBoldSvg}></AntdIcon>;
};

FolderOpenBold.displayName = 'FolderOpenBold';
FolderOpenBold.inheritAttrs = false;
export default FolderOpenBold;