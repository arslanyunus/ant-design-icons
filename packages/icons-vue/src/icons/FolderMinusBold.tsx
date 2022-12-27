// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderMinusBoldSvg from '@ant-design/icons-svg/lib/asn/FolderMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderMinusBold: FolderMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMinusBoldSvg}></AntdIcon>;
};

FolderMinusBold.displayName = 'FolderMinusBold';
FolderMinusBold.inheritAttrs = false;
export default FolderMinusBold;