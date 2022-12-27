// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderBoldSvg from '@ant-design/icons-svg/lib/asn/FolderBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderBold: FolderBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderBoldSvg}></AntdIcon>;
};

FolderBold.displayName = 'FolderBold';
FolderBold.inheritAttrs = false;
export default FolderBold;