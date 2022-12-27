// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderMinusOutline: FolderMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMinusOutlineSvg}></AntdIcon>;
};

FolderMinusOutline.displayName = 'FolderMinusOutline';
FolderMinusOutline.inheritAttrs = false;
export default FolderMinusOutline;