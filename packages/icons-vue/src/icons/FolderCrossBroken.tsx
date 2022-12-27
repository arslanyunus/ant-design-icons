// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCrossBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderCrossBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCrossBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCrossBroken: FolderCrossBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCrossBrokenSvg}></AntdIcon>;
};

FolderCrossBroken.displayName = 'FolderCrossBroken';
FolderCrossBroken.inheritAttrs = false;
export default FolderCrossBroken;