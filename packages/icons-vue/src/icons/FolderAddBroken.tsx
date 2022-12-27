// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddBroken: FolderAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddBrokenSvg}></AntdIcon>;
};

FolderAddBroken.displayName = 'FolderAddBroken';
FolderAddBroken.inheritAttrs = false;
export default FolderAddBroken;