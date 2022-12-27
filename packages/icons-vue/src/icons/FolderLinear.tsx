// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderLinearSvg from '@ant-design/icons-svg/lib/asn/FolderLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderLinear: FolderLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderLinearSvg}></AntdIcon>;
};

FolderLinear.displayName = 'FolderLinear';
FolderLinear.inheritAttrs = false;
export default FolderLinear;