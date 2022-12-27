// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderBrokenSvg from '@ant-design/icons-svg/lib/asn/FolderBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderBroken: FolderBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderBrokenSvg}></AntdIcon>;
};

FolderBroken.displayName = 'FolderBroken';
FolderBroken.inheritAttrs = false;
export default FolderBroken;