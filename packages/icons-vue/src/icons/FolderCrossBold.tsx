// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCrossBoldSvg from '@ant-design/icons-svg/lib/asn/FolderCrossBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCrossBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCrossBold: FolderCrossBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCrossBoldSvg}></AntdIcon>;
};

FolderCrossBold.displayName = 'FolderCrossBold';
FolderCrossBold.inheritAttrs = false;
export default FolderCrossBold;