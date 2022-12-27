// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddOutline: FolderAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddOutlineSvg}></AntdIcon>;
};

FolderAddOutline.displayName = 'FolderAddOutline';
FolderAddOutline.inheritAttrs = false;
export default FolderAddOutline;