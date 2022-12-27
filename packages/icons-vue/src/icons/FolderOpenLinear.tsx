// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderOpenLinearSvg from '@ant-design/icons-svg/lib/asn/FolderOpenLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderOpenLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderOpenLinear: FolderOpenLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenLinearSvg}></AntdIcon>;
};

FolderOpenLinear.displayName = 'FolderOpenLinear';
FolderOpenLinear.inheritAttrs = false;
export default FolderOpenLinear;