// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderMinusLinearSvg from '@ant-design/icons-svg/lib/asn/FolderMinusLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderMinusLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderMinusLinear: FolderMinusLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMinusLinearSvg}></AntdIcon>;
};

FolderMinusLinear.displayName = 'FolderMinusLinear';
FolderMinusLinear.inheritAttrs = false;
export default FolderMinusLinear;