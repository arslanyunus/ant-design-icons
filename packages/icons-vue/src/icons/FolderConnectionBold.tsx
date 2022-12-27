// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderConnectionBoldSvg from '@ant-design/icons-svg/lib/asn/FolderConnectionBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderConnectionBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderConnectionBold: FolderConnectionBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderConnectionBoldSvg}></AntdIcon>;
};

FolderConnectionBold.displayName = 'FolderConnectionBold';
FolderConnectionBold.inheritAttrs = false;
export default FolderConnectionBold;