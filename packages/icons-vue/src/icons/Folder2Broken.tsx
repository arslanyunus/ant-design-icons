// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Folder2BrokenSvg from '@ant-design/icons-svg/lib/asn/Folder2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Folder2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Folder2Broken: Folder2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2BrokenSvg}></AntdIcon>;
};

Folder2Broken.displayName = 'Folder2Broken';
Folder2Broken.inheritAttrs = false;
export default Folder2Broken;