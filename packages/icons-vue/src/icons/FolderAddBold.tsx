// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddBoldSvg from '@ant-design/icons-svg/lib/asn/FolderAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddBold: FolderAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddBoldSvg}></AntdIcon>;
};

FolderAddBold.displayName = 'FolderAddBold';
FolderAddBold.inheritAttrs = false;
export default FolderAddBold;