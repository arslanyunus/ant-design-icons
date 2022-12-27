// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderCrossLinearSvg from '@ant-design/icons-svg/lib/asn/FolderCrossLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderCrossLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderCrossLinear: FolderCrossLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderCrossLinearSvg}></AntdIcon>;
};

FolderCrossLinear.displayName = 'FolderCrossLinear';
FolderCrossLinear.inheritAttrs = false;
export default FolderCrossLinear;