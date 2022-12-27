// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Folder2OutlineSvg from '@ant-design/icons-svg/lib/asn/Folder2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Folder2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Folder2Outline: Folder2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2OutlineSvg}></AntdIcon>;
};

Folder2Outline.displayName = 'Folder2Outline';
Folder2Outline.inheritAttrs = false;
export default Folder2Outline;