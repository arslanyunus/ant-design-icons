// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderMinusBroken: FolderMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMinusBrokenSvg}></AntdIcon>;
};

FolderMinusBroken.displayName = 'FolderMinusBroken';
FolderMinusBroken.inheritAttrs = false;
export default FolderMinusBroken;