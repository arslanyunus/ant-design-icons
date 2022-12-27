// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderConnectionOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderConnectionOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderConnectionOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderConnectionOutline: FolderConnectionOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderConnectionOutlineSvg}></AntdIcon>;
};

FolderConnectionOutline.displayName = 'FolderConnectionOutline';
FolderConnectionOutline.inheritAttrs = false;
export default FolderConnectionOutline;