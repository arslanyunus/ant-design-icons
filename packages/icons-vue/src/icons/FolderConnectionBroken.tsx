// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderConnectionBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderConnectionBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderConnectionBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderConnectionBroken: FolderConnectionBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderConnectionBrokenSvg}></AntdIcon>;
};

FolderConnectionBroken.displayName = 'FolderConnectionBroken';
FolderConnectionBroken.inheritAttrs = false;
export default FolderConnectionBroken;