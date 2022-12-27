// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderConnectionLinearSvg from '@ant-design/icons-svg/lib/asn/FolderConnectionLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderConnectionLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderConnectionLinear: FolderConnectionLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderConnectionLinearSvg}></AntdIcon>;
};

FolderConnectionLinear.displayName = 'FolderConnectionLinear';
FolderConnectionLinear.inheritAttrs = false;
export default FolderConnectionLinear;