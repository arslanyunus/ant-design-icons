// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderOpenBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenBroken: FolderOpenBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenBrokenSvg}></AntdIcon>;
};

FolderOpenBroken.displayName = 'FolderOpenBroken';
FolderOpenBroken.inheritAttrs = false;
export default FolderOpenBroken;