// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Folder2LinearSvg from '@ant-design/icons-svg/lib/asn/Folder2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Folder2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Folder2Linear: Folder2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Folder2LinearSvg}></AntdIcon>;
};

Folder2Linear.displayName = 'Folder2Linear';
Folder2Linear.inheritAttrs = false;
export default Folder2Linear;