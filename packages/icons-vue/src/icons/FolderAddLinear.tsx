// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderAddLinearSvg from '@ant-design/icons-svg/lib/asn/FolderAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderAddLinear: FolderAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderAddLinearSvg}></AntdIcon>;
};

FolderAddLinear.displayName = 'FolderAddLinear';
FolderAddLinear.inheritAttrs = false;
export default FolderAddLinear;