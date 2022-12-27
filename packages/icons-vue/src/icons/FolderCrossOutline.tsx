// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCrossOutline: FolderCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCrossOutlineSvg}></AntdIcon>;
};

FolderCrossOutline.displayName = 'FolderCrossOutline';
FolderCrossOutline.inheritAttrs = false;
export default FolderCrossOutline;