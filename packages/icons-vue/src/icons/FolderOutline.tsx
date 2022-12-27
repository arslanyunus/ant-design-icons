// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOutline: FolderOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOutlineSvg}></AntdIcon>;
};

FolderOutline.displayName = 'FolderOutline';
FolderOutline.inheritAttrs = false;
export default FolderOutline;