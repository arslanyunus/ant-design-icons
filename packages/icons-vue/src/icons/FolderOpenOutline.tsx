// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenOutlineSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenOutline: FolderOpenOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenOutlineSvg}></AntdIcon>;
};

FolderOpenOutline.displayName = 'FolderOpenOutline';
FolderOpenOutline.inheritAttrs = false;
export default FolderOpenOutline;