// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Folder2BoldSvg from '@ant-design/icons-svg/lib/asn/Folder2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Folder2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Folder2Bold: Folder2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2BoldSvg}></AntdIcon>;
};

Folder2Bold.displayName = 'Folder2Bold';
Folder2Bold.inheritAttrs = false;
export default Folder2Bold;